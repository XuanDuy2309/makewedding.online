import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { Button } from "../../components/ui/button";
import { LanguageContext } from "../../hooks/languageContext";

function ImageYourself() {
  const valueLocation = useContext(LanguageContext);
  const locate = useLocation();
  const { data } = locate.state || {};
  const [dataImage] = useState(data);
  console.log();
  const image: string[] = [];
  dataImage.split(",").map((images: string) => {
    const imageReplace = images.replace(
      "https://futurelove.online",
      "https://photo.fakewedding.online"
    );
    image.push(imageReplace);
  });
  const finishImage = image.map((images: string) => {
    return images.replace(/"/g, "");
  });

  return (
    <div>
      <Header />
      <div className="h-[3000px] w-[100%] bg-gradient-to-b from-[#fff] to-[#C2E9F0] relative flex flex-col items-center">
        {/* {wave} */}
        <svg
          width="1302px"
          height="300px"
          viewBox="0 0 1500 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-3%]"
        >
          <path
            d="M941.122 322.288C1243.21 319.407 1413.1 250.722 1462.63 209.907L1530.51 12.6868V-178.182C1314.88 -195.588 804.38 -230.401 487.431 -230.401C92.5176 -230.401 -182.457 -98.0077 -273.119 -54.3566L-273.99 -53.9372C-363.75 -10.7216 -273.152 291.132 -140.896 226.964C58.7524 130.099 563.507 325.89 941.122 322.288Z"
            fill="url(#paint0_linear_158_1910)"
            fill-opacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_158_1910"
              x1="608.804"
              y1="-230.401"
              x2="608.804"
              y2="315.259"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="#16B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <span className="font-[500] text-lg text-[#009DC4]">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Những bức ảnh của bạn"
            : "Your pictures"}
        </span>
        <span className="font-[500] text-lg">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Tận hưởng những phút giây của bạn"
            : "Enjoy your beautiful photos"}
        </span>
        <div className="w-[60%] h-[90%] flex flex-col items-center justify-around">
          <div className="w-[70%] h-[15%] flex justify-around">
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
              src={finishImage[31]}
              alt="baby31"
            />
          </div>
          <div className="w-[70%] h-[10%] flex justify-around">
            <img
              loading="lazy"
              className="h-full w-[30%] object-cover rounded-md"
              src={finishImage[4]}
              alt="baby4"
            />
            <img
              loading="lazy"
              className="h-full w-[30%] object-cover rounded-md"
              src={finishImage[5]}
              alt="baby5"
            />
          </div>
          <div className="w-[70%] h-[10%] flex justify-around">
            <img
              loading="lazy"
              className="w-[30%] h-full object-cover rounded"
              src={finishImage[32]}
              alt="baby7"
            />
            <img
              loading="lazy"
              className="w-[30%] h-full object-cover rounded"
              src={finishImage[8]}
              alt="baby8"
            />
          </div>
          <div className="w-[70%] h-[14%] flex justify-between">
            <div className="h-full w-[20%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={finishImage[12]}
                alt="baby12"
              />
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={finishImage[14]}
                alt="baby14"
              />
            </div>
            <img
              loading="lazy"
              className="h-full w-[55%] rounded-md object-cover"
              src={finishImage[15]}
              alt="baby15"
            />
            <div className="h-full w-[20%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={finishImage[16]}
                alt="baby16"
              />
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={finishImage[18]}
                alt="baby18"
              />
            </div>
          </div>
          <div className="w-[70%] h-[12%] flex justify-around">
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
              src={finishImage[19]}
              alt="baby19"
            />
          </div>
          <div className="w-[70%] h-[12%] flex justify-between">
            <img
              loading="lazy"
              className="w-[48%] h-full rounded-md object-cover"
              src={finishImage[22]}
              alt="baby22"
            />
            <img
              loading="lazy"
              className="w-[48%] h-full rounded-md object-cover"
              src={finishImage[23]}
              alt="baby23"
            />
          </div>
          <div className="w-[70%] h-[10%] flex justify-between">
            <img
              loading="lazy"
              className="w-[48%] h-full rounded-md object-cover"
              src={finishImage[25]}
              alt="baby25"
            />
            <img
              loading="lazy"
              className="w-[48%] h-full rounded-md object-cover"
              src={finishImage[24]}
              alt="baby24"
            />
          </div>
          <div className="w-[70%] h-[15%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-full rounded-md object-cover"
              src={finishImage[34]}
              alt="baby34"
            />
          </div>
        </div>
        <div className="flex justify-around w-[80%] h-[3%]">
          <Button variant={"cus4"} className="right-[50%] w-[35%]">
            <span className="text-xl">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Lưu hình ảnh"
                : "Save Image"}
            </span>
          </Button>
          <Button variant={"cus4"} className="right-[20%] w-[35%]">
            <span className="text-xl">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Tạo video"
                : "Make a video"}
            </span>
          </Button>
        </div>
        <Button variant={"cus2"} className="w-[25%] ">
          <svg
            width="29"
            height="32"
            viewBox="0 0 69 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.0435 29.7618L58.4874 31.1456L59.8136 29.7618L58.4874 28.378L57.0435 29.7618ZM9.40854 53.5713C9.40854 54.6759 10.304 55.5713 11.4085 55.5713C12.5131 55.5713 13.4085 54.6759 13.4085 53.5713L9.40854 53.5713ZM44.2265 46.0265L58.4874 31.1456L55.5995 28.378L41.3386 43.2589L44.2265 46.0265ZM58.4874 28.378L44.2265 13.497L41.3386 16.2646L55.5995 31.1456L58.4874 28.378ZM57.0435 27.7618L17.4085 27.7618L17.4085 31.7618L57.0435 31.7618L57.0435 27.7618ZM9.40854 35.7618L9.40854 53.5713L13.4085 53.5713L13.4085 35.7618L9.40854 35.7618ZM17.4085 27.7618C12.9903 27.7618 9.40854 31.3435 9.40854 35.7618L13.4085 35.7618C13.4085 33.5526 15.1994 31.7618 17.4085 31.7618L17.4085 27.7618Z"
              fill="#009DC4"
            />
          </svg>

          <span className="mx-2">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Chia sẻ với gia đình của bạn"
              : "Share Your Family"}
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ImageYourself;
