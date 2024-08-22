import Header from "../../components/Header";
import { Button } from "../../components/ui/button";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../../hooks/languageContext";

interface IInvitation {
  groom_name: string;
  bride_name: string;
  wedding_date: string;
  wedding_image: string;
  wedding_location: string;
  google_maps_link: string;
  attendance_status: string;
  groom_image: string;
  bride_image: string;
}
function CardWedding() {
  const valueLocation = useContext(LanguageContext);
  const searchParams = new URLSearchParams(window.location.search);
  const data: IInvitation = {
    groom_name: searchParams.get("groom") || "",
    bride_name: searchParams.get("bride") || "",
    wedding_date: searchParams.get("date") || "",
    wedding_image: searchParams.get("wedding_image") || "",
    wedding_location: searchParams.get("location") || "",
    google_maps_link: searchParams.get("link_location") || "",
    attendance_status: searchParams.get("status") || "",
    groom_image: searchParams.get("groom_image") || "",
    bride_image: searchParams.get("bride_image") || "",
  };
  const [currentDate] = useState(new Date(data.wedding_date));
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(0);
  const [activeButton, setActiveButton] = useState(data.attendance_status);
  const [listImage, setListImage] = useState([]);

  useEffect(() => {
    // Tính toán số ngày trong tháng và ngày đầu tiên của tháng
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const firstDayOfMonth = new Date(year, month - 1, 1);
    setDaysInMonth(new Date(year, month, 0).getDate());
    setFirstDayOfWeek(firstDayOfMonth.getDay());
  }, [currentDate]);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get(
          "https://video.funface.online/getdata/image_from_folder",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            params: { list_folder: data.wedding_image },
          }
        );
        const image = response.data.linkImage;
        const imageUrl = image.map((item: string) => {
          const imageUrl = item.replace(
            "/var/www/build_futurelove/",
            "https://photo.gachmen.org/"
          );
          return imageUrl;
        });
        setListImage(imageUrl);
      } catch (err) {
        console.log(err);
      }
    };
    getImage();
  }, []);

  const time: string[] = data.wedding_date.split("-");
  const year = parseInt(time[0]);
  const month = parseInt(time[1]);
  const day = parseInt(time[2]);

  const handleActive = (value: string) => {
    setActiveButton(value);
    console.log(value);
  };
  const handleGoogleMap = () => {
    window.open(data.google_maps_link, "_blank");
  };

  // Tính lịch âm

  function convertSolarToLunar(
    year: number,
    month: number,
    day: number
  ): { year: number; month: number; day: number } {
    const solarDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const lunarMonths = [
      [0, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29], // Năm thường
      [0, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30], // Năm nhuận
    ];

    let lunarYear = year;
    let lunarMonth = 1;
    let lunarDay = 1;

    const totalDays =
      solarDays[month - 1] + day + (month > 2 && isLeapYear(year) ? 1 : 0);
    let leapMonth = 0;
    let daysInMonth = 0;

    while (totalDays > daysInMonth) {
      if (leapMonth === 0 && isLeapYear(lunarYear) && lunarMonth === 13) {
        leapMonth = lunarMonth;
        lunarMonth = 1;
        lunarYear++;
      } else {
        daysInMonth += lunarMonths[isLeapYear(lunarYear) ? 1 : 0][lunarMonth];
        lunarMonth++;
        if (lunarMonth > 12) {
          lunarMonth = 1;
          lunarYear++;
        }
      }
    }

    lunarDay =
      totalDays -
      daysInMonth +
      lunarMonths[isLeapYear(lunarYear) ? 1 : 0][lunarMonth - 1];

    return { year: lunarYear, month: lunarMonth - 2, day: lunarDay };
  }

  function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const lunarDate = convertSolarToLunar(year, month, day);

  return (
    <div className="bg-[#F2FDFF] h-[4220px] w-[100%]">
      <Header />
      <div className="flex flex-col px-4 sm:px-16 lg:px-40 h-[90%] w-full">
        <div className="font-[700] text-3xl text-[#009DC4] mb-[1.6rem] pointer-events-none">
          <p>{valueLocation.geoplugin_city === "Hanoi" ? "Đám" : "The"}</p>
          <p>{valueLocation.geoplugin_city === "Hanoi" ? "Cưới" : "Wedding"}</p>
          <p>{valueLocation.geoplugin_city === "Hanoi" ? "Của" : "Of"}</p>
        </div>
        <div className={`w-[950px] h-[300px] relative`}>
          <img
            className="w-full h-full object-cover "
            src="https://s3-alpha-sig.figma.com/img/0667/e746/074021786539143cdab7dcbb1ddefea9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GAyXp0Nn1FJFULrhcNgW~~sVYVzlS61mTB8oJuytm8~cP6BFDitJU7AfavYuyCF1avU-uJthyrP6ECk1zBU5v0euzKWvNh13ahayUZxi1NmXkzJkB3Ez1Vj3hKHNHRr5guSfuc9ocQOuERRLS53YXX3e5f0ejjbQ1BLVRWvH-NToiUW5lwrpYsGq-7aWIvE50Oz710UWNIQjkF3rUMRcTm7HVWoPDd2fckM-gX1uCQ3Ps0uZNu1nufuuqsMA59F9~DfDJPnxfi53ftFc~3Xr2J~crWVwwXo5rauRmybfeoxUemURVhw0cjCcNlARBzo08DnjZXVxmObLXcGrtbBvMQ__"
            alt="anh_nen_cuoi"
          />
          <div className="absolute z-10 text-[#fff] flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-open-raleway pointer-events-none">
            <span className="text-5xl italic">{data.bride_name}</span>
            <svg
              className="mx-[15px]"
              width="56"
              height="63"
              viewBox="0 0 56 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.40202 35.4704L27.2736 54.3574C27.6143 54.7175 27.7847 54.8975 27.9999 54.8975C28.2152 54.8975 28.3855 54.7175 28.7263 54.3574L46.5978 35.4704C48.5509 33.4064 49.5274 32.3743 50.1103 31.2493C51.2324 29.0838 51.4274 26.5556 50.651 24.2436C50.2476 23.0424 49.4409 21.8728 47.8276 19.5335L46.3839 17.4401C44.6981 14.9958 43.8553 13.7736 43.0887 13.1085C39.6065 10.087 34.2978 10.6264 31.4946 14.2865C30.8775 15.0922 30.2976 16.459 29.138 19.1924C28.9568 19.6195 28.8662 19.833 28.779 19.9414C28.3788 20.4389 27.6211 20.4389 27.2208 19.9414C27.1336 19.833 27.043 19.6195 26.8619 19.1924L26.8619 19.1924C25.7022 16.459 25.1224 15.0922 24.5053 14.2865C21.702 10.6264 16.3933 10.087 12.9111 13.1085C12.1446 13.7736 11.3017 14.9958 9.61593 17.4401L8.1722 19.5335C6.55892 21.8728 5.75228 23.0424 5.34887 24.2436C4.57239 26.5556 4.76748 29.0838 5.88949 31.2493C6.47241 32.3743 7.44895 33.4064 9.40202 35.4704Z"
                stroke="white"
              />
            </svg>
            <span className="text-5xl italic">{data.groom_name}</span>
          </div>
          <div className="absolute flex top-[62%] left-[30%]">
            <div className="border-t-2 border-black w-[100px]  mt-3"></div>
            <span>
              {day} tháng {month} {year}
            </span>
            <div className="border-t-2 border-black w-[100px] mt-3"></div>
          </div>
        </div>
        <div className="flex w-[950px] justify-evenly items-center">
          <div className="flex flex-col items-center bg-[#FFFFFF] w-[300px] h-[330px] mt-10 shadow-md">
            <p className="text-[#2A5578] text-2xl font-[600] mt-8 pointer-events-none">
              {valueLocation.geoplugin_city === "Hanoi" ? "Lưu lại" : "Save"}{" "}
              <span className="italic">
                {valueLocation.geoplugin_city === "Hanoi" ? "buổi" : "the"}{" "}
              </span>
              {valueLocation.geoplugin_city === "Hanoi" ? "hẹn" : "date"}
            </p>
            <p className="font-[200] my-2 pointer-events-none">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Cho ngày cưới của"
                : "For the wedding of"}
            </p>
            <p className="text-[#2A5578] text-2xl font-[600] my-1 pointer-events-none">
              {data.bride_name} & {data.groom_name}
            </p>
            <p className=" text-[#2A5578] my-1 pointer-events-none">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Một lời chúc của bạn chắc chắn"
                : "A wish from you for sure"}
            </p>
            <p className=" text-[#2A5578] my-1 pointer-events-none">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Sẽ làm cho đám cưới của chúng tôi"
                : "Will make for my wedding"}
            </p>
            <p className=" text-[#2A5578] my-1 pointer-events-none">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Có thêm một niềm hạnh phúc!"
                : "Have more happiness!"}
            </p>
            <Button
              variant="cus3"
              className="my-1 mt-2"
              onClick={() => handleActive("going")}
            >
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Gửi lời chúc"
                : "Send greetings"}{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 9L15.7071 8.29289L16.4142 9L15.7071 9.70711L15 9ZM3.75 10C3.19771 10 2.75 9.55228 2.75 9C2.75 8.44772 3.19771 8 3.75 8V10ZM11.2071 3.79289L15.7071 8.29289L14.2929 9.70711L9.79289 5.20711L11.2071 3.79289ZM15.7071 9.70711L11.2071 14.2071L9.79289 12.7929L14.2929 8.29289L15.7071 9.70711ZM15 10H3.75V8H15V10Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
          <div className="flex flex-col items-center bg-[#FFFFFF] w-[300px] h-[330px] mt-10 shadow-md pointer-events-none">
            <div className="my-4">
              <span>
                {currentDate.toLocaleString("en-US", {
                  month: "long",
                })}
                /
                {currentDate.toLocaleString("en-US", {
                  year: "numeric",
                })}
              </span>
            </div>
            <div>
              <table className="w-[250px] h-[180px] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="border-t-[0.25px] border-[#000000] border-b-[0.25px]">
                    <th className="font-[200] text-center">
                      {valueLocation.geoplugin_city === "Hanoi" ? "CN" : "Sun"}
                    </th>
                    <th className="font-[200] text-center">
                      {valueLocation.geoplugin_city === "Hanoi" ? "T2" : "Mon"}
                    </th>
                    <th className="font-[200] text-center">
                      {valueLocation.geoplugin_city === "Hanoi" ? "T3" : "Tue"}
                    </th>
                    <th className="font-[200] text-center">
                      {valueLocation.geoplugin_city === "Hanoi" ? "T4" : "Wed"}
                    </th>
                    <th className="font-[200] text-center">
                      {valueLocation.geoplugin_city === "Hanoi" ? "T5" : "Thu"}
                    </th>
                    <th className="font-[200] text-center">
                      {valueLocation.geoplugin_city === "Hanoi" ? "T6" : "Fri"}
                    </th>
                    <th className="font-[200] text-center">
                      {valueLocation.geoplugin_city === "Hanoi" ? "T7" : "Sat"}
                    </th>
                  </tr>
                </thead>
                <tbody className="border-b-[0.25px] border-[#000000]">
                  {Array.from({
                    length: Math.ceil((firstDayOfWeek + daysInMonth) / 7),
                  }).map((_, weekIndex) => (
                    <tr key={weekIndex}>
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const day =
                          weekIndex * 7 + dayIndex - firstDayOfWeek + 1;
                        const isActiveDay = new Date(
                          data.wedding_date
                        ).getDate();
                        return (
                          <td
                            className="text-center"
                            key={dayIndex}
                            style={
                              day === isActiveDay
                                ? {
                                    backgroundColor: "#009DC4",
                                    borderRadius: "100%",
                                  }
                                : {}
                            }
                          >
                            {day > 0 && day <= daysInMonth ? day : ""}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex">
              <div className="text-[#009DC4] mx-5">
                <span className="ml-2">{day}</span>
                <br />
                <span>
                  {valueLocation.geoplugin_city === "Hanoi" ? "ngày" : "day"}
                </span>
              </div>
              <div className="text-[#009DC4] mx-5">
                <span className="ml-1">00</span>
                <br />
                <span>
                  {valueLocation.geoplugin_city === "Hanoi" ? "giờ" : "hour"}
                </span>
              </div>
              <div className="text-[#009DC4] mx-5">
                <span className="ml-2">00</span>
                <br />
                <span>
                  {valueLocation.geoplugin_city === "Hanoi" ? "phút" : "minute"}
                </span>
              </div>
              <div className="text-[#009DC4] mx-5">
                <span className="ml-2">00</span>
                <br />
                <span>
                  {valueLocation.geoplugin_city === "Hanoi" ? "Giây" : "Second"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className={`my-8 w-[200px] rounded flex justify-center h-[40px] ${
              activeButton === "going" ? "bg-[#00C8E4]" : "bg-[#009DC4]"
            }`}
            onClick={() => handleActive("going")}
          >
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 mt-1"
            >
              <path
                d="M12.375 13.3334L17.1472 16.8041C17.561 17.105 18.1351 17.0451 18.4778 16.6653L27.5 6.66675"
                stroke="white"
                stroke-linecap="round"
              />
              <path
                d="M28.875 16C28.875 18.5073 28.0651 20.9517 26.559 22.9897C25.0529 25.0278 22.9263 26.5572 20.4778 27.3632C18.0294 28.1691 15.3821 28.2111 12.9077 27.4833C10.4334 26.7554 8.25631 25.2943 6.68225 23.3051C5.10819 21.3159 4.21623 18.8986 4.13163 16.3926C4.04702 13.8867 4.77404 11.4179 6.21056 9.33316C7.64709 7.2484 9.72096 5.65233 12.1409 4.76913C14.5609 3.88592 17.2053 3.75995 19.7029 4.40889"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
            <span className="text-base mt-2">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Tham dự lễ"
                : "Attend the ceremony"}
            </span>
          </button>
          <button
            className={`my-8 mx-5 w-[200px] flex justify-center h-[40px] rounded ${
              activeButton === "don't go and don't deposit"
                ? "bg-[#00C8E4]"
                : "bg-[#009DC4]"
            }`}
            onClick={() => handleActive("don't go and don't deposit")}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <circle
                cx="18"
                cy="18"
                r="12.9"
                stroke="white"
                stroke-width="1.2"
              />
              <path
                d="M13.5002 22.4995L22.5002 13.4995"
                stroke="white"
                stroke-width="1.2"
              />
              <path
                d="M22.5 22.5L13.5 13.5"
                stroke="white"
                stroke-width="1.2"
              />
            </svg>
            <span className="text-base mt-2">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Không tham dự lễ"
                : "Can't go"}
            </span>
          </button>
          <button
            className={`my-8 w-[200px] flex justify-center rounded  ${
              activeButton === "don't go and deposit"
                ? "bg-[#00C8E4]"
                : "bg-[#009DC4]"
            }`}
            onClick={() => handleActive(`don't go and deposit`)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 mt-1"
            >
              <path
                d="M6.64282 24.2857H23.0714C23.8998 24.2857 24.5714 23.6142 24.5714 22.7858V9.95039C24.5714 9.79514 24.5352 9.64203 24.4658 9.50318L22.6956 5.96275C22.3568 5.28518 21.6643 4.85718 20.9068 4.85718H8.80746C8.04992 4.85718 7.35739 5.28518 7.01861 5.96275L5.2484 9.50318C5.17897 9.64203 5.14282 9.79514 5.14282 9.95039V22.7857C5.14282 23.6142 5.81439 24.2857 6.64282 24.2857Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6.35718 9.71436H23.3572"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.4284 4.85718L11.2141 9.71432V17L14.857 14.5715L18.4998 17V9.71432L17.2855 4.85718"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-base mt-2">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Gửi tiền mừng cưới"
                : "Send wedding money"}
            </span>
          </button>
        </div>
        <div className="w-[950px] bg-[#fff] h-[1250px] flex flex-col items-center">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/2248/445c/a9d8f43797708951afbfb590b7ec50d5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W18LTSwVsgKJ5CLtfDbjBHHuPniqWddJ3oD1BwC-oLjdFx0uTRw9h8H-lS-5nTepDVWcEyvXwen~z6m~rJmhTR-I1xMaf~xRjzXjtpfpWj-~NYDkBgD1skY1ifFGe9lQ8W3xAZpIDMBxK4PdFZH~pwSaGR1SDDAbZuKf2laZ3I4Yi74Fwnp8iYfVcfLAq1aQmdk~qbdPVdLrxQIjV3ZtMtjTkLz5vRCCED6B88Y6YREP~vdYMkNllQE-EE7MgiXW6PNhoOsZo-I2rb-WwKamL8wlJREFS2NOVZynMkL9tGv4Mqi4WgkV319fl48PKWcC8uRfigXU-JbFVoNiS-4vMg__"
              alt="hoa_cuoi"
            />
          </div>
          <span className="text-[#009DC4] font-[400] italic">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Chuyện tình yêu"
              : "Love story"}
          </span>
          <br />
          <span className="text-[#009DC4] text-center ">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Tình yêu là điều kiện trong đó hạnh phúc của người là điều cần thiết"
              : "Love is the condition in which the happiness of the person is essential"}
          </span>
          <div className="flex w-full">
            <div className="w-[400px] ml-12">
              <span className="flex justify-end rtl font-[500] mt-8">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Bạn có tin vào tình yêu không?"
                  : "Do you believe in love?"}
              </span>
              <br />
              <span className="flex justify-end rtl">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "12 tháng 12 năm 2015"
                  : "December 12 2015"}
              </span>
              <br />
              <span>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy là chồng mình"
                  : "I used to not believe in online love. Ever thought about what to do? Is it possible to like someone you've never met? But now I'm back It's like that, now I understand: the virtual world is real love!!! That day, I aimlessly posted a status line on Facebook complaining and aimlessly jokingly talking to a stranger I never knew. Whichever Little did I know, 4 years later that person was my husband"}
              </span>
              <img
                className="w-[200px] h-[200px] object-cover object-center rounded-[10px] mx-auto mt-10"
                src={listImage[3]}
                alt="Anh thiep cuoi"
              />
              <span className="flex justify-end rtl mt-8 font-[500] text-xl">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Phút giây cầu hôn"
                  : "Proposal moment"}
              </span>
              <span className="flex justify-end rtl">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "12 tháng 12 năm 2015"
                  : "December 12 2015"}
              </span>
              <span>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh."
                  : "5 years together is not a long time, but enough Let us realize many things. Love each other, cultivate happiness happiness and work together to overcome difficulties in life. We went from two strangers into each other's lives. And now Here we continue to turn a new page together. Your moment I asked, \"Be my wife!\", I was willing to go anywhere in this life Okay, as long as it's with you."}
              </span>
              <img
                className="w-[200px] h-[200px] object-cover object-center rounded-[10px] mx-auto mt-10"
                src={listImage[9]}
                alt="anh 2"
              />
            </div>
            <div className="w-[30px] text-center relative py-8 border-l-4 ml-8 border-[#009DC4]">
              <div className="absolute -left-[18px] top-0 w-8 h-8 bg-[#009DC4] rounded-full"></div>
              <div className="absolute -left-[18px] top-[300px] w-8 h-8 bg-white border-4 border-[#009DC4] rounded-full"></div>
              <div className="absolute -left-[18px] top-[520px] w-8 h-8 bg-[#009DC4] rounded-full"></div>
              <div className="absolute -left-[18px] top-[800px] w-8 h-8 bg-white border-4 border-[#009DC4] rounded-full"></div>
            </div>
            <div className="w-[400px] mt-3">
              <img
                className="w-[200px] h-[200px] object-cover object-center rounded-[10px] mx-auto mt-20"
                src={listImage[13]}
                alt="anh3"
              />
              <span className="font-[500] text-base">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Lời tỏ tình"
                  : "Confession of love"}
              </span>
              <br />
              <span>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "12 tháng 12 năm 2015"
                  : "December 12 2015"}
              </span>
              <br />
              <span>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy cùng em”."
                  : "That day, I was 21! Alone in the middle of the city, hiding. Every last afternoon Every week I often drive around the streets, weaving in and out crowded lines of people. Or even stop by a coffee shop on the side of the road to sit there and feel about your own life. Sometimes lost and a bit lonely. But then one fine day, The boy appeared, held his hand and whispered in his ear: Hy I hope you can do those things with me in the future."}
              </span>
              <img
                className="w-[200px] h-[200px] object-cover object-center rounded-[10px] mx-auto mt-10"
                src={listImage[21]}
                alt="anh4"
              />
              <div className="mt-8">
                <span className="font-[500] text-base mt-10">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Ngày lễ đính hôn"
                    : "Engagement day"}
                </span>
                <br />
                <span>
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "12 tháng 12 năm 2015"
                    : "December 12 2015"}
                </span>
                <br />
                <span>
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "“Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh."
                    : "Confession of love"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[1.2px] border-[#009DC4] mt-8"></div>
        <div className="flex items-center flex-col mt-4">
          <span className="text-xl font-[300] pointer-events-none">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Trân trọng kính mời"
              : "Cordially invited"}
          </span>
          <span className="text-3xl font-[600] italic mt-4 pointer-events-none">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Quý khách"
              : "Customers"}
          </span>
          <span className="text-xl font-[300] mt-4 pointer-events-none">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Đến dự buổi tiệc chung vui cùng gia đình tại"
              : "Come to a fun party with your family at"}
          </span>
          <span className="text-3xl font-[600] italic mt-4 pointer-events-none">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Nhà Hàng..."
              : "Restaurant..."}
          </span>
          <span className="text-xl font-[300] mt-4 pointer-events-none">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Địa chỉ cụ thể nơi tổ chức đám cưới"
              : "The specific address of the wedding venue"}
          </span>
          <br />
          <div className="flex border-2 border-[#009DC4] rounded pointer-events-none">
            <span className="text-center w-[200px] bg-[#009DC4] text-[#fff] pointer-events-none">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Thời gian cụ thể"
                : "Specific time"}
            </span>
            <span className="text-center w-[200px] pointer-events-none">
              {data.wedding_date}
            </span>
          </div>
          <span className="mt-3 pointer-events-none font-[500]">{`${
            valueLocation.geoplugin_city === "Hanoi" ? "Tức ngày" : "Mean day"
          } ${lunarDate.day} ${
            valueLocation.geoplugin_city === "Hanoi" ? "tháng" : "month"
          } ${lunarDate.month} ${lunarDate.year} ${
            valueLocation.geoplugin_city === "Hanoi"
              ? "âm lịch"
              : "lunar calendar"
          }`}</span>
          <span className="font-[200] text-lg mt-4 pointer-events-none">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Sự hiện diện của bạn"
              : "Your presence"}
          </span>
          <span className="font-[200] text-lg mt-4 pointer-events-none">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Là niềm vinh dự của chúng tôi"
              : "It's our honor"}
          </span>
          <button
            className="border-[1.5px] border-[#009DC4] text-[#16B6D4] bg-white rounded flex justify-center w-[15rem] mt-4 "
            onClick={handleGoogleMap}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 mr-2"
            >
              <path
                d="M1 1L15.8571 15.8571"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.28564 3.85714L8.9592 2.18346C10.5372 0.605512 13.0955 0.605512 14.6735 2.18346C16.2515 3.76143 16.2515 6.3198 14.6735 7.89776L12.9999 9.57143"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5713 13L7.89775 14.6737C6.3198 16.2516 3.76143 16.2516 2.18346 14.6737C0.605511 13.0958 0.605512 10.5373 2.18346 8.95937L3.85702 7.28571"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="underline">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Đường dẫn tới bản đồ"
                : "Link to map"}
            </span>
          </button>
        </div>
        <div className="w-[950px] h-[72rem] bg-white mt-2 flex flex-col items-center">
          <img
            className="w-[150px] h-auto object-cover"
            src="https://s3-alpha-sig.figma.com/img/2248/445c/a9d8f43797708951afbfb590b7ec50d5?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ehWa8gf0o8Nr9W2G3bNdqzNPGSzxNIsViASxp~ydWlhpRAyxzJvOeleApG~5r4kRQQlblQE1iwdXwUdf2UNqkQaWGSq8PgCFNO7EDw~E7msVeLMOcvV8F0Qo36xQaT95~qWaGQt62pVqwCqK3vcrdphrGCw35YJVRAlfzGRwqVD5rlnxkkb6zckp2GKT4LRDBVVrpDySEygPdvgXW7MFsYNENOdUm0Ml~hVs6Fy7soBH4o~gSOAAROI4njwdrW6wPY7ya1GCoaYhnMDnYqQvLi4S9w6nwvJ0CLJ32OXSBfcTRQIVojmQzqzAtPpgGX22y68su~5IJzzXvMaTFCgx-Q__"
            alt="hoa_cuoi"
          />
          <span className="text-[#009DC4] italic text-2xl">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Album ảnh cưới"
              : "Wedding photo album"}
          </span>
          <span className="text-[#009DC4] text-base">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu"
              : "Being deeply loved by someone gives you strength, while loving"}
            {valueLocation.geoplugin_city === "Hanoi"
              ? "ai đó sâu sắc sẽ cho bạn dũng khí."
              : "Someone thoughtful will give you courage."}
          </span>
          <div className="w-full h-full mt-3">
            <div className="w-full h-[40%] flex justify-around">
              <img
                className="w-[30%] h-[80%] object-cover rounded-[9%] object-contain"
                src={listImage[13]}
                alt="13"
              />
              <img
                className="w-[30%] h-[80%] object-cover rounded-[9%] object-contain"
                src={listImage[14]}
                alt="14"
              />
              <img
                className="object-cover rounded-[9%] w-[30%] h-[80%] object-contain"
                src={listImage[19]}
                alt="19"
              />
            </div>
            <div className="w-full h-[60%] flex justify-around">
              <div className="w-[30%] h-full flex justify-around">
                <div className="w-[40%] h-full flex flex-col justify-around">
                  <img
                    className="rounded-[9%] h-[30%] w-full object-cover"
                    src={listImage[27]}
                    alt="27"
                  />
                  <img
                    className="h-[35%] w-full rounded-[9%] object"
                    src={listImage[29]}
                    alt="29"
                  />
                  <img
                    className="rounded-[9%] h-[30%] w-full object-cover"
                    src={listImage[30]}
                    alt="30"
                  />
                </div>
                <div className="w-[40%] h-full flex flex-col justify-around">
                  <img
                    className="w-full h-[35%] rounded-[9%] object-cover"
                    src={listImage[33]}
                    alt="33"
                  />
                  <img
                    className="w-full h-[22%] rounded-[9%] object-cover"
                    src={listImage[34]}
                    alt="34"
                  />
                  <img
                    className="w-full h-[35%] rounded-[9%] object-cover"
                    src={listImage[35]}
                    alt="35"
                  />
                </div>
              </div>
              <img
                className="w-[30%] h-full rounded-[9%] object-cover"
                src={listImage[36]}
                alt="36"
              />
              <div className="w-[30%] h-full flex justify-around">
                <div className="w-[40%] h-full flex flex-col justify-around">
                  <img
                    className="w-full h-[35%] rounded-[9%] object-cover"
                    src={listImage[37]}
                    alt="37"
                  />
                  <img
                    className="w-full h-[22%] rounded-[9%] object-cover"
                    src={listImage[38]}
                    alt="38"
                  />
                  <img
                    className="w-full h-[35%] rounded-[9%] object-cover"
                    src={listImage[39]}
                    alt="39"
                  />
                </div>
                <div className="w-[40%] h-full flex flex-col justify-around">
                  <img
                    className="rounded-[9%] h-[30%] w-full object-cover"
                    src={listImage[23]}
                    alt="23"
                  />
                  <img
                    className="h-[35%] w-full rounded-[9%] object"
                    src={listImage[24]}
                    alt="24"
                  />
                  <img
                    className="rounded-[9%] h-[30%] w-full object-cover"
                    src={listImage[25]}
                    alt="25"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="relative w-full h-[25rem] mt-20">
          <img
            className="w-full h-full object-cover"
            src={listImage[18]}
            alt="18"
          />
          <span className="absolute top-[2%] left-[50%] w-[75%] -translate-x-1/2 text-[#f5f5f5] font-bold font-sans font-[500] text-3xl italic">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Cảm ơn bạn rất nhiều vì những lời tốt đẹp nhất"
              : "Thank you so much for your kind words"}
          </span>
          <span className="absolute top-[10%] left-[50%] -translate-x-1/2 text-[#f5f5f5] font-bold font-sans font-[500] text-3xl italic">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "đến đám cưới của chúng tôi"
              : "to our wedding"}
          </span>
          <input
            className="absolute top-[25%] w-[500px] placeholder-[#009DC4] left-[50%] -translate-x-1/2 border-[1.5px] border-[#009DC4] rounded focus:outline-none"
            type="text"
            placeholder={
              valueLocation.geoplugin_city === "Hanoi"
                ? "Nhập họ và tên khách mời"
                : "Enter first and last name customer"
            }
          />
          <textarea
            placeholder={
              valueLocation.geoplugin_city === "Hanoi"
                ? "Viết lời chúc của bạn"
                : "Write your wish"
            }
            className="absolute top-[35%] w-[500px] h-[200px] left-[50%] placeholder-[#009DC4] -translate-x-1/2 border-[1.5px] border-[#009DC4] rounded focus:border-[#009DC4] focus:outline-none"
          ></textarea>
          <Button
            variant={"cus3"}
            className="absolute top-[90%] left-[50%] -translate-x-1/2"
          >
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Gửi lời chúc"
              : "Send greetings"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardWedding;
