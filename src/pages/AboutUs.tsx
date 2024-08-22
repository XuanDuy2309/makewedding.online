import Footer from "../components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import Header from "../components/Header";
import { LanguageContext } from "../hooks/languageContext";
import { useContext } from "react";

const AboutUs = () => {
  const valueLocation = useContext(LanguageContext);
  return (
    <div className="text-center ">
      <Header />
      <div className="md:w-[1440px] md:h-[790px] h-[620px] w-[360px] relative mx-auto z-0 mt-[100px]">
        <div className="absolute md:right-2 md:ml-[800px]  w-[300px] ml-11 md:w-fit mx-auto items-center justify-center text-center z-0 ">
          <img
            src="img\ab2.jpg"
            className="md:w-[800px] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="top-[400px] absolute text-left md:top-[200px] md:left-[60px] md:ml-0 ml-[40px] md:mt-0 mx-auto items-center justify-center">
          <h1 className="text-[#009DC4] md:font-[900] md:text-[30px] md:leading-[68px] font-black text-[28px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "THINKDIFF AI - CÔNG TY SẢN XUẤT PHẦN MỀM"
              : "THINKDIFF AI - A SOFTWARE PRODUCTS COMPANY"}
          </h1>
          <DividerHorizontalIcon />
          <h2 className="md:w-[800px] text-black md:font-[700] md:text-[50px] md:leading-[40px] md:my-3 font-extrabold text-[20px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Chuyên về"
              : "Specializing in"}
            <span className="text-[#009DC4]">
              {valueLocation.geoplugin_city === "Hanoi"
                ? " các ứng dụng"
                : "artificial intelligence"}
            </span>
            {valueLocation.geoplugin_city === "Hanoi"
              ? "trí tuệ nhân tạo"
              : " applications"}
          </h2>
          <h1 className="text-[#009DC4] md:font-[500] md:text-[24px] md:leading-[68px] font-black text-[28px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "SỨC MẠNH SÁNG TẠO"
              : "THE POWER OF CREATIVITY"}
          </h1>
          <p className="text-slate-500 md:font-[500] md:text-[16px] md:leading-[24px] md:w-[700px] font-semibold text-[16px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Chúng tôi phát triển số lượng lớn sản phẩm nhỏ, nhanh cho công việc ngắn hạn như tự động trang điểm mặt không tốn thời gian, tự động soạn bài phỏng vấn, tự động tìm vé máy bay giá rẻ, tự động tìm đơn hàng sale off, tự động tìm khách hàng có nhu cầu thuê nhà, tự động tìm kiếm khách hàng bán nhà, tự động tra cứu, tự động tìm và bán nhà. thắc mắc của khách hàng. Công ty chúng tôi có 200 nhân viên ở 3 địa điểm khác nhau, trụ sở chính tại thành phố Louis là nơi kết hợp đào tạo và phát triển nguồn nhân lực, bộ phận kinh doanh đặt tại 69 Vạn Phúc. Xin chúc mừng bạn đã quan tâm đến công ty chúng tôi và đã dành thời gian đọc bài viết này. Cảm ơn."
              : "We develop a large number of small, fast products for short jobs, such as automatic facial makeup without wasting time, automatically compose interviews, automatically find cheap airline tickets, automatically find sale off orders, automatically find customers who need to rent a house, automatically find customers to sell houses, automatically look up, automatically find and sell houses. customer inquiries. Our company has 200 employees in 3 different locations, the headquarters in Louis city is the place where training and human resource development is combined, the sales department is located at 69 Vạn Phúc. Congratulations for your interest in our company and for taking the time to read this article. Thank you."}
          </p>
        </div>
      </div>
      <div className="bg-[#FFF] md:w-[1440px] md:mx-auto md:mb-[100px] mt-[550px] md:mt-0 mx-auto justify-center">
        <h1 className="md:mt-[100px] md:w-[1064px] w-[310px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Chúng tôi cung cấp"
            : "We provide"}{" "}
          <span className="text-[#009DC4]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Các Dịch Vụ Khác Nhau"
              : "Different Services"}
          </span>{" "}
          &{" "}
          <span className="text-[#009DC4]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Đặc trưng"
              : "Features"}
          </span>
          {valueLocation.geoplugin_city === "Hanoi"
            ? " Dành Cho Đại Lý Của Bạn "
            : " For Your Agency "}
          <span className="text-[#009DC4]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Sức mạnh của sự sáng tạo"
              : "The Power Of Creativity"}
          </span>
        </h1>
        <div className="md:flex md:px-[100px] md:gap-8 mt-10 mx-auto">
          <div className="">
            <div className=" md:px-0 mx-auto md:mt-[80px]">
              <img
                src="img\ab11.jpg"
                className="w-[600px] object-cover"
                alt=""
              />
            </div>
          </div>
          <ul className=" space-y-2 ulhome md:grid md:grid-cols-2 md:gap-11 mx-auto md:mt-0 mt-4">
            <li className="">
              <div className="rounded-xl my-auto shadow-xl  w-[300px] cards mx-auto p-[30px]">
                <div className="group">
                  <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[70px] h-[70px] mt-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                      />
                    </svg>
                  </strong>
                  <div className="mt-[10px] text-xs font-medium text-gray-300">
                    <h5 className="font-[600] text-black text-[24px] leading-[30px] mt-[20px] text-left group-hover:text-[#33C5E9]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Khám phá thêm về các xu hướng mới nhất trên thế giới"
                        : "Discover more about the latest world trends"}
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="">
              <div className="rounded-xl my-auto shadow-xl  w-[300px] cards mx-auto p-[30px]">
                <div className="group">
                  <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[70px] h-[70px] mt-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                      />
                    </svg>
                  </strong>
                  <div className="mt-[10px] text-xs font-medium text-gray-300">
                    <h5 className="font-[600] text-black text-[24px] leading-[30px] mt-[20px] text-left group-hover:text-[#33C5E9]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Phân tích các yêu cầu lớn hoàn toàn của khách hàng"
                        : "Analyze large requirements completely by customer"}
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li className=" ">
              <div className="rounded-xl my-auto shadow-xl  w-[300px] cards mx-auto p-[30px]">
                <div className="group">
                  <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[70px] h-[70px] mt-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                      />
                    </svg>
                  </strong>
                  <div className="mt-[10px] text-xs font-medium text-gray-300">
                    <h5 className="font-[600] text-black text-[24px] mt-[40px] leading-[30px] text-left group-hover:text-[#33C5E9]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Phân tích và dự đoán dữ liệu chính xác"
                        : "Precise Data Analysis & Prediction"}
                    </h5>
                  </div>
                </div>
              </div>
            </li>
            <li className=" ">
              <div className="rounded-xl my-auto shadow-xl  w-[300px] cards mx-auto p-[30px]">
                <div className="group">
                  <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[70px] h-[70px] mt-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
                    </svg>
                  </strong>
                  <div className="mt-[10px] text-xs font-medium text-gray-300">
                    <h5 className="font-[600] text-black text-[24px] leading-[30px] mt-[40px] text-left group-hover:text-[#33C5E9]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Hơn 35000 ứng dụng"
                        : "35000+ client"}
                    </h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#f2fdff] md:h-[800px] md:py-[95px] py-11 md:mt-0 mt-11">
        <h1 className="md:w-[1064px] w-[310px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Khám phá của chúng tôi"
            : "Discover Our "}
          <span className="text-[#009DC4]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Các dự án"
              : "Projects"}
          </span>{" "}
          &{" "}
          <span className="text-[#009DC4]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Các sản phẩm"
              : "Products"}
          </span>
        </h1>
        <Carousel className="md:w-[1000px] w-[280px] mx-auto mt-11">
          <CarouselContent>
            <CarouselItem className="md:basis-1/3 bg-[#fff]">
              <a
                href="https://apps.apple.com/us/app/dawn-ai-avatar-generator/id1643890882"
                className="block"
              >
                <img
                  alt=""
                  src="img/sp1.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Vẽ AI - Tạo Avatar"
                    : "Draw AI - Avatar Generator"}
                </h3>

                <p className="mt-2 max-w-sm text-gray-700 mb-4">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Biến đổi ảnh của bạn bằng AI"
                    : "Transform your photos with AI"}
                </p>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 bg-[#fff]">
              <a
                href="https://apps.apple.com/us/app/prank-air-horn-fart-clipper/id1623746709"
                className="block"
              >
                <img
                  alt=""
                  src="img/sp2.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Đùa không khí, còi, xì hơi, tông đơ"
                    : "Prank air, horn, fart, clipper"}
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Thước phim chơi khăm và âm thanh vui nhộn"
                    : "Clipper prank & funny sounds"}
                </p>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 bg-[#fff]">
              <a
                href="https://apps.apple.com/us/app/manga-reader-top-manga-here/id1635298030"
                className="block"
              >
                <img
                  alt=""
                  src="img/sp3.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Manga Reader : Top Manga Tại Đây"
                    : "Manga Reader : Top Manga Here"}
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Ứng dụng tốt nhất cho truyện tranh và tiểu thuyết"
                    : "Best App for Manga & Novel Reader"}
                </p>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 bg-[#fff]">
              <a
                href="https://apps.apple.com/us/app/mimic-ai-photo-face-animator/id1590841930"
                className="block"
              >
                <img
                  alt=""
                  src="img/sp4.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Khuôn mặt nhảy: Ứng dụng hoạt hình ảnh"
                    : "Face Dance: Photo Animator App"}
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Hát nhép, Hoạt hình khuôn mặt hài hước"
                    : "Lip Sync, Funny Face Animation"}
                </p>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 bg-[#fff]">
              <a
                href="https://apps.apple.com/us/app/celebrity-voice-changer-parody/id1111710488"
                className="block"
              >
                <img
                  alt=""
                  src="img/sp5.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Người nổi tiếng thay đổi giọng nói nhại lại"
                    : "Celebrity Voice Changer Parody"}
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Hơn 100 giọng hát live và AI"
                    : "100+ Voices Live & AI Singing"}
                </p>
              </a>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <div className="bg-[#FFF] md:py-[95px] py-11">
        <h1 className="md:w-[1064px] w-[310px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          Discover Our <span className="text-[#009DC4]">Workplace</span> &{" "}
          <span className="text-[#009DC4]">Members</span>
        </h1>
        <Carousel className="md:w-[1000px] w-[280px] mx-auto mt-11">
          <CarouselContent>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp1.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Nơi làm việc"
                    : "Workplace"}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp2.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Nơi làm việc"
                    : "Workplace"}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp3.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Thân thiệt với người dùng"
                    : "Friendly Membership"}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp4.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Nơi làm việc"
                    : "Workplace"}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp5.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Nơi làm việc"
                    : "Workplace"}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp6.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Nơi làm việc"
                    : "Workplace"}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp7.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Nơi làm việc"
                    : "Workplace"}
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 bg-[#fff] ">
              <div className="block rounded-xl overflow-hidden">
                <img
                  alt=""
                  src="img/cp8.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Nơi làm việc"
                    : "Workplace"}
                </h3>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <div className="bg-[#F2FDFF] md:h-[670px] md:py-[110px] py-11 ">
        <h1 className="md:w-[1064px] w-[310px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Chúng tôi khám phá"
            : "Discover Our"}
          <span className="text-[#009DC4]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Các hoạt động ngoại khóa"
              : "Extracurricular Activities"}
          </span>{" "}
          &{" "}
          <span className="text-[#009DC4]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Quá trình phát triển"
              : "Development Process"}
          </span>
        </h1>
        <Carousel className="md:w-[1400px] w-[290px] px-5 mx-auto mt-11">
          <CarouselContent>
            <CarouselItem className="md:basis-1/4 ">
              <div className="block rounded-xl overflow-hidden bg-white pb-4">
                <img
                  alt=""
                  src="img/tb1.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2022
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4">
              <div className="block rounded-xl overflow-hidden bg-white pb-4">
                <img
                  alt=""
                  src="img/tb2.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2022
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <div className="block rounded-xl overflow-hidden bg-white pb-4">
                <img
                  alt=""
                  src="img/tb3.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2022
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4">
              <div className="block rounded-xl overflow-hidden bg-white pb-4">
                <img
                  alt=""
                  src="img/tb4.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2017
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4">
              <div className="block rounded-xl overflow-hidden bg-white pb-4 ">
                <img
                  alt=""
                  src="img/tb5.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2017
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4">
              <div className="block rounded-xl overflow-hidden bg-white pb-4">
                <img
                  alt=""
                  src="img/tb6.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2017
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4">
              <div className="block rounded-xl overflow-hidden bg-white pb-4">
                <img
                  alt=""
                  src="img/tb7.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2022
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/4">
              <div className="block rounded-xl overflow-hidden bg-white pb-4">
                <img
                  alt=""
                  src="img/tb8.jpg"
                  className="h-full w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  2017
                </h3>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <div className="bg-[#FFF] md:h-[876px] md:py-[110px] py-11">
        <div className="md:w-[1200px] w-[360px] items-center mx-auto justify-center md:grid md:grid-cols-2">
          <div className="">
            <img
              src="img/abs.jpg"
              className="object-cover md:block hidden"
              alt=""
            />
          </div>
          <div className="md:w-[500px] w-[300px] mx-auto">
            <h1 className="md:font-[800] md:text-[24px] md:leading-[58px] text-black text-left mx-auto text-[28px] font-extrabold">
              More <span className="text-[#009DC4]">About Us</span> & What{" "}
              <span className="text-[#009DC4]">We Offer</span>
            </h1>
            <p className="text-left mb-4">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Chúng tôi luôn mang đến chất lượng, giá trị đích thực, khách hàng luôn tin tưởng và lựa chọn chúng tôi"
                : "We always bring quality, true value, customers always trust and choose us"}
            </p>
            <div className="text-left font-black pt-4">
              <span className="text-[#6366F1] font-black text-left">IOS</span>
              <span className="block rounded-full bg-gray-200 relative mt-2">
                <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                  <span className="font-bold text-white"> 90% </span>
                </span>
                <span className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500 w-[90%]"></span>
              </span>
            </div>
            <div className="text-left font-black pt-4">
              <span className="text-[#6366F1] font-black text-left">WEB</span>
              <span className="block rounded-full bg-gray-200 relative mt-2">
                <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                  <span className="font-bold text-white"> 80% </span>
                </span>
                <span className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500 w-[80%]"></span>
              </span>
            </div>
            <div className="text-left font-black pt-4">
              <span className="text-[#6366F1] font-black text-left">
                ANDROID
              </span>
              <span className="block rounded-full bg-gray-200 relative mt-2">
                <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                  <span className="font-bold text-white"> 90% </span>
                </span>
                <span className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500 w-[90%]"></span>
              </span>
            </div>
            <div className="text-left font-black pt-4">
              <span className="text-[#6366F1] font-black text-left">
                PYTHON
              </span>
              <span className="block rounded-full bg-gray-200 relative mt-2">
                <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                  <span className="font-bold text-white"> 90% </span>
                </span>
                <span className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500 w-[90%]"></span>
              </span>
            </div>
            <div className="text-left font-black pt-4">
              <span className="text-[#6366F1] font-black text-left">PHP</span>
              <span className="block rounded-full bg-gray-200 relative mt-2">
                <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                  <span className="font-bold text-white"> 90% </span>
                </span>
                <span className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500 w-[90%]"></span>
              </span>
            </div>
            <p className="text-left mt-8">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bản thân nỗi đau là quan trọng, việc giáo dục được tuân theo, nhưng người làm lại rơi vào thời điểm lao động và đau đớn, nỗi đau là quan trọng, việc học được tuân theo, nhưng người làm cũng vậy"
                : "Pain itself is important, education is followed, but the doer falls at a time when labor and pain, pain is important, education is followed, but so is the doer."}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white md:w-[1200px] gap-[70px] pb-3 md:flex justify-center mx-auto w-[390px] overflow-hidden">
        <div className="">
          <img
            src="img/hr1.jpg"
            className="mt-[80px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="">
          <img src="img/hr3.jpg" className="w-full object-cover" alt="" />
          <img
            src="img/hr2.jpg"
            className="md:mt-[70px] w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="md:flex justify-center mx-auto gap-11 my-[100px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.163657000406!2d105.75852617409872!3d20.98607588924546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134533dce504063%3A0x32b9b7219061c03c!2zMzAgxJDGsOG7nW5nIExvdWlzIDcsIGtodSDEkcO0IHRo4buLIExvdWlzIENpdHksIEjDoCBO4buZaSwgMTAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1707980272060!5m2!1svi!2s"
          width="600"
          height="500"
          loading="lazy"
          className="md:rounded-3xl md:w-[600] md:h-[500] w-[370px] h-[450px] mx-auto"
        ></iframe>
        <div className="rounded-2xl bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 md:w-[600px] md:mt-0 mt-4">
          <h1 className="md:font-[800] md:text-[24px] md:leading-[58px] text-black text-center mx-auto text-[20px] font-extrabold">
            <span className="text-[#009DC4]">Contact Us</span> & Get In{" "}
            <span className="text-[#009DC4]">Touch</span>
          </h1>
          <form action="#" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Message"
                rows={8}
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-xl bg-[#009DC4] px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white mb-[40px]">
        <div className="rounded-3xl bg-[#d8fbff] md:h-[200px] mx-auto items-center justify-center px-[76px]">
          <div className="md:grid md:grid-cols-3 md:w-[800px] mx-auto items-center justify-center py-[50px] md:py-0 md:pt-[50px]">
            <div className="text-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[50px] h-[50px] mx-auto mb-2"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              0582.296.888
            </div>
            <div className="text-[16px] md:mt-0 mt-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[50px] h-[50px] mx-auto mb-2"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              hr@thinkdiff.us
            </div>
            <div className="text-[16px] md:mt-0 mt-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[50px] h-[50px] mx-auto mb-2"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              Số 30 Đường Louis 7 Đại Mỗ,Nam Từ Liêm, Hà Nội
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
