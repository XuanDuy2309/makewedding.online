import "./App.css";
import Routers from "./routes";
import { MyContext } from "./hooks/MyContext";
import { LanguageContext } from "./hooks/languageContext";
import { languageType, listItemType } from "./common/types/Album";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "./components/ui/use-toast";
function App() {
  const [data, setData] = useState<listItemType[]>([]);
  const [geoplugin_city, setGeoplugin_city] = useState("");
  const [isYourLocation, setIsYourLocation] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.funface.online/get/list_image/all_wedding_time`
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  useEffect(() => {
    const storeData = localStorage.getItem("user");
    if (storeData) {
      const user = JSON.parse(storeData);
      if (user) {
        axios
          .get(`http://www.geoplugin.net/json.gp?ip=${user.ip_register}`)
          .then((res) => {
            setGeoplugin_city(res.data.geoplugin_city);
            setIsYourLocation(res.data.geoplugin_city);
          });
      }
    }
  }, []);
  window.addEventListener("load", () => {
    if (geoplugin_city !== isYourLocation) {
      setGeoplugin_city(isYourLocation);
    } else {
      return;
    }
  });
  const updateGeoplugin_city = (newLocation: string) => {
    setGeoplugin_city(newLocation);
  };
  const valueLocation: languageType = {
    geoplugin_city,
    updateGeoplugin_city,
  };
  const { toast } = useToast();
  const curent_date = new Date();
  const today = curent_date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const lastLoginDay = localStorage.getItem("lastLoginDate");
  const [day2, month2, year2] = today.split("/");
  const date2 = new Date(`${year2}-${month2}-${day2}`);
  if (lastLoginDay) {
    const [day1, month1, year1] = lastLoginDay.split("/");
    const date1 = new Date(`${year1}-${month1}-${day1}`);
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày
    const days = Math.round(
      Math.abs((date2.getTime() - date1.getTime()) / millisecondsPerDay)
    );
    if (days == 7) {
      toast({
        variant: "destructive",
        description: `Your session has expired!`,
      });
      localStorage.clear();
    }
  }

  return (
    <>
      <LanguageContext.Provider value={valueLocation}>
        <MyContext.Provider value={data}>
          <Routers />
        </MyContext.Provider>
      </LanguageContext.Provider>
    </>
  );
}
export default App;
