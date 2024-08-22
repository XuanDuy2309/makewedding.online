import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import Header from "../../components/Header";

function BabyImage() {
  const locate = useLocation();
  const { data } = locate.state || {};
  console.log(data);

  const [dataBaby] = useState(data.link_anh_swap);
  const husband_image = data.sukien_2_image.link_src_goc.replace(
    "/var/www/build_futurelove",
    "https://photo.fakewedding.online"
  );
  const wife_image = data.sukien_2_image.link_tar_goc.replace(
    "/var/www/build_futurelove",
    "https://photo.fakewedding.online"
  );
  const babyImage = dataBaby.map((data: string) => {
    return data.replace(
      "https://futurelove.online",
      "https://photo.fakewedding.online"
    );
  });
  return (
    <div>
      <Header />
      <div className="h-[6100px] w-[100%] bg-gradient-to-b from-[#fff] to-[#C2E9F0] relative flex flex-col items-center">
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
        <span className="font-[500] text-lg">
          Photos of your future family!
        </span>
        <div className="relative w-full h-[2%] mt-2">
          <img
            loading="lazy"
            className="absolute top-0 right-[50%] w-[220px] h-[180px] rounded-md object-cover"
            src={husband_image}
            alt="husband"
          />
          <svg
            width="80"
            height="76"
            viewBox="0 0 125 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[48%] top-[60%] z-10"
          >
            <rect width="125" height="121" rx="60.5" fill="white" />
            <path
              d="M44.5737 35.6666C38.2181 35.6702 32.3354 37.6304 28.0703 41.4947C23.8037 45.3567 21.233 51.1016 21.2326 58.2639C21.2332 65.7779 26.6902 72.7637 34.0871 79.624C41.484 86.4843 50.9995 93.2531 59.7113 100.279C60.2249 100.677 61.0223 100.675 61.5336 100.278C70.2424 93.255 79.7353 86.4623 87.1561 79.6244C94.5768 72.7864 100.105 65.8586 100.104 58.2661C100.105 51.0254 97.4436 45.3374 93.1738 41.4944C88.9065 37.65 83.1088 35.6687 76.7607 35.668C70.2296 35.6653 64.7121 39.6556 60.6215 43.6997C56.5499 39.6806 51.0889 35.6651 44.5737 35.6666Z"
              fill="#DD1717"
            />
          </svg>
          <img
            loading="lazy"
            className="absolute top-[48%] right-[34%] w-[220px] h-[180px] rounded-md object-cover"
            src={wife_image}
            alt="wife"
          />
        </div>
        <div className="absolute top-[5%] w-full h-[90%] flex flex-col items-center justify-around">
          <div className="w-[70%] h-[10%] flex justify-around">
            <div className="w-[46%] h-full flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[56%] object-cover rounded-md"
                src={babyImage[0]}
                alt="baby0"
              />
              <img
                loading="lazy"
                className="w-full h-[40%] object-cover rounded-md"
                src={babyImage[1]}
                alt="baby1"
              />
            </div>
            <div className="w-[46%] h-full flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[36%] object-cover rounded-md"
                src={babyImage[2]}
                alt="baby2"
              />
              <img
                loading="lazy"
                className="w-full h-[60%] object-cover rounded-md"
                src={babyImage[3]}
                alt="baby3"
              />
            </div>
          </div>
          <div className="w-[70%] h-[4%] flex justify-around">
            <img
              loading="lazy"
              className="h-full w-[30%] object-cover rounded-md"
              src={babyImage[4]}
              alt="baby4"
            />
            <img
              loading="lazy"
              className="h-full w-[30%] object-cover rounded-md"
              src={babyImage[5]}
              alt="baby5"
            />
            <img
              loading="lazy"
              className="h-full w-[30%] object-cover rounded-md"
              src={babyImage[6]}
              alt="baby6"
            />
          </div>
          <div className="w-[70%] h-[10%] flex justify-around">
            <img
              loading="lazy"
              className="w-[35%] h-full object-cover rounded"
              src={babyImage[7]}
              alt="baby7"
            />
            <img
              loading="lazy"
              className="w-[35%] h-full object-cover rounded"
              src={babyImage[8]}
              alt="baby8"
            />
            <div className="w-[25%] h-full flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[30%] object-cover rounded-md"
                src={babyImage[9]}
                alt="baby9"
              />
              <img
                loading="lazy"
                className="w-full h-[30%] object-cover rounded-md"
                src={babyImage[10]}
                alt="baby10"
              />
              <img
                loading="lazy"
                className="w-full h-[30%] object-cover rounded-md"
                src={babyImage[11]}
                alt="baby11"
              />
            </div>
          </div>
          <div className="w-[70%] h-[10%] flex justify-between">
            <div className="h-full w-[20%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[30%] rounded-md object-cover"
                src={babyImage[12]}
                alt="baby12"
              />
              <img
                loading="lazy"
                className="w-full h-[30%] rounded-md object-cover"
                src={babyImage[13]}
                alt="baby13"
              />
              <img
                loading="lazy"
                className="w-full h-[30%] rounded-md object-cover"
                src={babyImage[14]}
                alt="baby14"
              />
            </div>
            <img
              loading="lazy"
              className="h-full w-[40%] rounded-md object-cover"
              src={babyImage[15]}
              alt="baby15"
            />
            <div className="h-full w-[20%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[30%] rounded-md object-cover"
                src={babyImage[16]}
                alt="baby16"
              />
              <img
                loading="lazy"
                className="w-full h-[30%] rounded-md object-cover"
                src={babyImage[17]}
                alt="baby17"
              />
              <img
                loading="lazy"
                className="w-full h-[30%] rounded-md object-cover"
                src={babyImage[18]}
                alt="baby18"
              />
            </div>
          </div>
          <div className="w-[70%] h-[6%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-[67%] rounded-md object-cover"
              src={babyImage[19]}
              alt="19"
            />
            <img
              loading="lazy"
              className="h-full w-[27%] rounded-md object-cover"
              src={babyImage[20]}
              alt="20"
            />
          </div>
          <img
            loading="lazy"
            className="w-[70%] h-[7%] rounded-md object-cover"
            src={babyImage[22]}
            alt="baby22"
          />
          <div className="w-[70%] h-[6%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-[48%] rounded-md object-cover"
              src={babyImage[23]}
              alt="baby23"
            />
            <div className="h-full w-[48%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={babyImage[25]}
                alt="baby25"
              />
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={babyImage[24]}
                alt="baby24"
              />
            </div>
          </div>
          <div className="w-[70%] h-[4%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-[30%] rounded-md object-cover"
              src={babyImage[26]}
              alt="baby26"
            />
            <div className="h-full w-[30%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={babyImage[27]}
                alt="baby27"
              />
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={babyImage[28]}
                alt="baby28"
              />
            </div>
            <div className="h-full w-[30%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={babyImage[29]}
                alt="baby29"
              />
              <img
                loading="lazy"
                className="w-full h-[48%] rounded-md object-cover"
                src={babyImage[30]}
                alt="baby30"
              />
            </div>
          </div>
          <div className="w-[70%] h-[6%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-[35%] rounded-md object-cover"
              src={babyImage[31]}
              alt="baby31"
            />
            <img
              loading="lazy"
              className="h-full w-[60%] rounded-md object-cover"
              src={babyImage[32]}
              alt="baby32"
            />
          </div>
          <div className="w-[70%] h-[6%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-[30%] rounded-md object-cover"
              src={babyImage[33]}
              alt="baby33"
            />
            <img
              loading="lazy"
              className="h-full w-[30%] rounded-md object-cover"
              src={babyImage[34]}
              alt="baby34"
            />
            <img
              loading="lazy"
              className="h-full w-[30%] rounded-md object-cover"
              src={babyImage[35]}
              alt="baby35"
            />
          </div>
          <div className="w-[70%] h-[6%] flex justify-between">
            <div className="h-full w-[20%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[46%] rounded-md object-cover"
                src={babyImage[37]}
                alt="baby37"
              />
              <img
                loading="lazy"
                className="w-full h-[46%] rounded-md object-cover"
                src={babyImage[38]}
                alt="baby38"
              />
            </div>
            <div className="h-full w-[20%] flex flex-col justify-between">
              <img
                loading="lazy"
                className="w-full h-[46%] rounded-md object-cover"
                src={babyImage[39]}
                alt="baby39"
              />
              <img
                loading="lazy"
                className="w-full h-[46%] rounded-md object-cover"
                src={babyImage[40]}
                alt="baby40"
              />
            </div>
            <img
              loading="lazy"
              className="h-full w-[20%] rounded-md object-cover"
              src={babyImage[41]}
              alt="baby41"
            />
            <img
              loading="lazy"
              className="h-full w-[20%] rounded-md object-cover"
              src={babyImage[42]}
              alt="baby42"
            />
          </div>
          <div className="w-[70%] h-[3%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-[15%] rounded-md object-cover"
              src={babyImage[43]}
              alt="baby43"
            />
            <img
              loading="lazy"
              className="h-full w-[15%] rounded-md object-cover"
              src={babyImage[44]}
              alt="baby44"
            />
            <img
              loading="lazy"
              className="h-full w-[15%] rounded-md object-cover"
              src={babyImage[45]}
              alt="baby45"
            />
            <img
              loading="lazy"
              className="h-full w-[15%] rounded-md object-cover"
              src={babyImage[46]}
              alt="baby46"
            />
          </div>
          <div className="w-[70%] h-[8%] flex justify-between">
            <img
              loading="lazy"
              className="h-full w-[46%] rounded-md object-cover"
              src={babyImage[47]}
              alt="baby47"
            />
            <img
              loading="lazy"
              className="h-full w-[46%] rounded-md object-cover"
              src={babyImage[48]}
              alt="baby48"
            />
          </div>
          <img
            loading="lazy"
            className="w-[70%] h-[12%] rounded-md object-cover"
            src={babyImage[49]}
            alt="baby49"
          />
        </div>
        <Button
          variant={"cus4"}
          className="absolute bottom-[4%] right-[50%] w-[25%]"
        >
          <span className="text-xl">Save Image</span>
        </Button>
        <Button
          variant={"cus4"}
          className="absolute bottom-[4%] right-[20%] w-[25%]"
        >
          <span className="text-xl">Make a video</span>
        </Button>
        <Button variant={"cus2"} className="absolute bottom-[3%] w-[25%] ">
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

          <span className="mx-2">Share Your Family</span>
        </Button>
      </div>
    </div>
  );
}

export default BabyImage;
