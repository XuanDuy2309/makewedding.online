import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../hooks/languageContext";
import { Button } from "../components/ui/button";

const HomePage = () => {
  const valueLocation = useContext(LanguageContext);
  const [user, setUser] = useState({ id_user: "" });
  const navi = useNavigate();
  useEffect(() => {
    const data = JSON.parse(String(localStorage.getItem("user")));
    if (data) {
      setUser(data);
    } else {
      return;
    }
  }, []);

  const handleYourSelf = () => {
    navi(`/${user.id_user}/yourself`);
  };

  const handleBaby = () => {
    if(user.id_user){
      navi(`/${user.id_user}/create`);
    console.log(user.id_user);
    }else{
      navi(`/signin`);
    }
  };
  return (
    <div className="text-center h-auto ">
      <Header />
      {/* baby image */}
      <div className="bg-[#F2FDFF] text-center h-[600px] w-[80%] mx-auto flex flex-col justify-between mt-8 items-center">
        <div>
          {" "}
          <span className="text-[#009DC4] text-4xl">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Tạo những bức ảnh con cái sử dụng ảnh của cha mẹ"
              : "Create simple baby photos using just photos of the parents"}
          </span>
        </div>
        <div className="relative w-full h-[10%]">
          <img
            className="absolute right-[65%] bottom-[30%] w-[120px] rounded-[100%] h-[120px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/b8df/404b/00c9996943a0de9d05fd8bcde2989b2e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4uKh0aT8dlFGn7TTP8Gm-oLYz3qEWTNzhTXUn~OezLLxNp4VIsHSCsz2jpQ7zaPPl9JhyughGKnnPrvV22XS5~hJ89uYSGbwdzP9kzyPEnmJqHyCn~qs3wLWbvTvGkUidtLOygQNeyadOUrlfaBrkT-vtryHJzJLwjj-eDHwNymwxzyTKR3O~o9nRIxagxVB-dIY6pHnbRTbdfmC9vR9GVPSHM-AxnvQvMCWOtXf6p~qPFWHiTY7S2iamsUJNQ9-F0Ju0oze0zzhmiL7NseHS3UjD0YGyxQOJFqlD5pXUtEHgjljCCiK6Ax3EOxu8puee-DMDzNg3swb6DB5AjtVw__"
            alt="anh_trai"
          />
          <img
            className="absolute right-[56%] bottom-[60%] w-[120px] rounded-[100%] h-[120px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/5fe2/36c9/21342718838a24ba29f890cbe23a15d0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wj3nVdqKG10w8gB7FM-HHwcy99VJa--VIC1ijPbTkNuNhehSjdOTuJGYDctBB74EAImqwk5ejq2e2ne4hmx0iQcTvngRCFKqCDVLiCRj1l5GU3tavIFhcsGXUzEq2fycr6tENjBspAfLAASTkvi8QXRYWWh91x75iTrdOz-8lqgtW3JNN~o00lDOHSIB0tSpoHvqFlUIW9MHwrT4Mr6XHw2vbnbHYkDacW4TulCWrBf9YcgnGJntwTTyQ299d2CvBG7eNiIeuyC2roVcfI8mhfTq~fD-UyBAW-ACR~u3cMcYZcHY3w6E63c1LautJvkiha5Kvd4P0vkjbv3rybiX0g__"
            alt="anh_gai"
          />
          {/* arrow parents to baby */}
          <svg
            width="178"
            height="232"
            viewBox="0 0 152 202"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[59%] top-[35%] w-[80px] h-auto"
          >
            <path
              d="M73.758 78.6765C60.1161 90.1044 24.6472 123.817 5.54667 101.342C-13.5516 69.8761 34.1096 60.0417 49.2025 76.6194C57.3869 85.6089 89.5834 150.788 98.3146 159.778C109.229 171.016 112.967 173.263 129.337 180.005"
              stroke="#222222"
              stroke-linecap="round"
            />
            <path
              d="M69.4127 82.4249C73.6606 79.3588 77.6387 74.7255 80.9721 68.9619C84.3056 63.1983 86.8845 56.4941 88.4659 49.4812C90.0472 42.4683 90.579 35.3777 90.0109 28.8778C89.4428 22.3778 87.7937 16.6826 85.219 12.3289"
              stroke="#222222"
              stroke-linecap="round"
            />
            <path
              d="M131.91 161.827L142.843 185.607L113.975 194.613"
              stroke="#222222"
            />
          </svg>
        </div>
        <div className="flex justify-around h-[40%]  mb-8">
          <div className="flex flex-col">
            <span className="font-[500] text-[#009DC4] text-lg">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Khám phá xem con của bạn trong tương lai trông như thế nào?"
                : "Discover what your child will look like in the future?"}
            </span>

            <span>
              {" "}
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Bắt đầu tạo hình em bé"
                : "Start creating the baby's face."}
            </span>

            <Button
              variant={"cus4"}
              className="w-[200px] mx-auto"
              onClick={handleBaby}
            >
              <span className="mr-2">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Khám phá ngay"
                  : "Explore now"}
              </span>
              {/* arrow go next */}
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51 36H9"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M65.6427 35.7856L52.2116 27.727C51.6784 27.407 51 27.7911 51 28.413V43.587C51 44.2089 51.6784 44.593 52.2116 44.273L65.6427 36.2144C65.8045 36.1173 65.8045 35.8827 65.6427 35.7856Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
          <div className="w-[80%] h-full">
            {" "}
            <img
              className="h-[100%] w-[100%] object-cover rounded-md"
              alt="baby_img"
              src="https://s3-alpha-sig.figma.com/img/26d9/ae09/ac949cc47d2bc96328c285de2577e4f4?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQMMkhN9FaUCeEMLxkBqg0ssGAGjge8MkjFNenZCTqUyBPeXXr20PNxXT1qtbQDzBe7RsrXAfYod8bekZY2NbLbHzPF8ok1Vsanoit48NWpq0C~sDFcKOyiIV8CyobR3mC7FdnjRJboGvEIcN-QU3LQqA~0xwLWVu1-gH4QfJOgZnBpnuZFurEo4im-49cO7IrpWSSgPCDNAM1bfbaHUh6UXIw27tp6sLgCMPpVKXwYWnNgwA0lHNnrtu6aJT3BBFhbhhNiCyoLHzO5ru-Nywe8Ub6Z7VeMNYlpuEez3ywJfKX6XpEm-eiO5Hyk~FG8dto~Uyq-V83yeTeihSeXcMA__"
            />
          </div>
        </div>
      </div>
      <div className="md:w-full md:h-[790px] h-[620px] w-[360px] relative mx-auto z-0">
        <div className=" md:right-2 md:pt-[154px] md:ml-[700px] w-[320px] md:w-fit pt-8 mx-auto items-center justify-center text-center z-0">
          <img src="img\ba-bpn.png " className="" alt="" />
        </div>
        <div className="absolute md:w-[623px] text-left md:top-[240px] md:left-[200px] md:ml-0 ml-[40px] md:mt-0 mx-auto items-center justify-center">
          <h1 className="text-[#009DC4] md:font-[900] md:text-[56px] md:leading-[68px] font-black text-[28px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Hoán đổi mặt bằng AI"
              : "AI Face Swap Online"}
          </h1>
          <h2 className="text-[#009DC4] md:font-[700] md:text-[40px] md:leading-[40px] md:my-3 font-extrabold text-[20px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Đám cưới trong mơ của bạn"
              : "Make Your Dream Wedding"}
          </h2>
          <p className="text-[#000] md:font-[500] md:text-[24px] md:leading-[24px] md:w-[500px] font-semibold text-[16px] w-[300px]">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Tải ảnh của bạn lên để hoán đổi khuôn mặt với AI. Trải nghiệm hiệu ứng hoán đổi khuôn mặt thực tế mạnh mẽ. Tạo những bức ảnh cưới tuyệt đẹp!"
              : "Upload your photos to swap the face with AI. Experience powerful realistic face swapping effects. Create gorgeous wedding photos!"}
          </p>
          <Link to={`/listcategories`}>
            <button className="text-[#fff] bg-[#33C5E9] mt-8 rounded-3xl px-[20px] py-[10px] text-center font-[800] text-[20px] leading-[20px] ml-3 flex">
              <span>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Bắt đầu hoán đổi"
                  : "Start face swapping"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
          <Link
            to={`${user.id_user ? `/invitation/${user.id_user}` : "/signin"}`}
          >
            <button className="text-[#fff] bg-[#33C5E9] mt-8 rounded-3xl px-[20px] py-[10px] text-center font-[800] text-[20px] leading-[20px] ml-3 flex">
              <span className="mx-auto">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Tạo thiệp mời cưới"
                  : "Wedding invitation"}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M10.6926 2.29004L18.4024 9.99989L10.6926 17.7097"
                  stroke="white"
                  stroke-width="3.08394"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.4022 10L2 10"
                  stroke="white"
                  stroke-width="3.08394"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[715px] w-[85%] mx-auto relative">
        <img
          className="w-full h-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/31e5/b331/0c8fb5391c221a6f5c8c3162b4240fb3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g2CglQwO0WDCYYVURB-Gq8y9lDmIngDCdqx3JT5ZornQkH6BuPoebc5RR9k4UV8XCGf4zDzF8u7td7aglqFXy6H9S6ZkllmmS6hOZNck08SY9g4LcrXPMnSlzP-~qvjz2dooYP2O-EhcyTmusk8ChAgAJCuDz7Qs3dDWC7dZxqNSGeLXmj6eo-yYPWDcCYuxWk~d9Hmi8x2QgoFA99h~N4RqQkHCi7zDAXgmOAS21Q2HZzufBbpHhYBZLDXmkQNMlSjA6QnXoITHywfM69N6ds7j0W64c~mrPx2eHaxpmrhGbrTTAee7Pqh2wGtaSVXyUcIEA5pd~gZ6CASm0XYfEQ__"
          alt="cuoi"
        />
        <span className="absolute bottom-[52%] left-[10%] w-[55%] h-[10%] font-[900] leading-3 text-5xl text-[#009DC4]">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "TẠO THIỆP MỜI CƯỚI"
            : "WEDDING INVITATION"}
        </span>
        <span className="absolute bottom-[46%] left-[15%] w-[32%] h-[10%] font-[800] text-lg leading-10">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Tạo thiệp mời cưới chỉ với 1 nút ấn"
            : "Create wedding invitations with just 1 click"}
        </span>
        <Link
          to={`${user.id_user ? `/invitation/${user.id_user}` : "/signin"}`}
          className="absolute bottom-[42%] left-[20%]"
        >
          <button className="text-[#fff] bg-[#33C5E9] mt-8 rounded-3xl px-[20px] py-[10px] text-center font-[800] text-[20px] leading-[20px] ml-3 flex">
            <span className="mx-auto">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Tạo thiệp mời cưới"
                : "Wedding invitation"}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M10.6926 2.29004L18.4024 9.99989L10.6926 17.7097"
                stroke="white"
                stroke-width="3.08394"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.4022 10L2 10"
                stroke="white"
                stroke-width="3.08394"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="w-[85%] h-[601px] mx-auto bg-[#F2FDFF] mt-10">
        <span className="font-[900] w-full h-[8%] text-[#009DC4] text-4xl leading-10 text-center mt-6">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Hãy khám phá ngay để tạo cho mình những tấm ảnh đẹp"
            : "Discover now to create yourself beautiful photo"}
        </span>
        <div className="flex justify-around h-[90%] w-full mt-6">
          <div className="flex flex-col justify-around h-[50%] w-[30%] my-auto">
            <span className="font-[600] text-md leading-5 ">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Chọn bộ ảnh phù hợp với bạn để bắt đầu tạo những danh mục này hình ảnh một lần trong đời"
                : "Choose a Category that's right for you to start creating these once-in-a-lifetime images"}
            </span>
            <div>
              {" "}
              <Button
                variant={"cus4"}
                className="bottom-8 w-[200px] h-full"
                onClick={handleYourSelf}
              >
                <span className="mr-2">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "TẠO ẢNH"
                    : "CREATE PHOTO"}
                </span>
              </Button>
            </div>
          </div>
          <div className="w-[65%] h-full flex justify-center">
            <div className="w-[34%] h-full flex flex-col justify-center">
              <img
                className="w-[80%] h-[260px] object-cover rounded-md mb-2"
                src="https://s3-alpha-sig.figma.com/img/eecc/1d4c/dd710b5d86f201b68e60ce74ce6f3e1b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Moq7NQxmPxuYaPXOXEnJ0Xr4JIdeQT-w2Cb4dH1JJiE9S-WdYx-hNGspeIcm-se-fnfDEnz5d9JN~2Tdryb45eQ4aEuCXYCXJSI~3DQtwnYtAsBdIMnlVdLeBN9nd42OEzi9IWRadeM83P0kTWwwkKO6gloyvcQD2iVgyyTU20t43rMfChj8lO7JVpn5DeEKQG57dnmRDUhJVzrFehOakdctBygb1EIO2EO~iXnZLouCyXmWDuaxMO2iyY40ed0e3mqS3C7bUF~4vqHmCb1WXH486zwpXNz6cm2RkUzIYT~dKlrWh9h1pLW8aaQmN6oq-jXkp7BXaqfckSozaSi6fg__"
                alt="anh 1"
              />
              <img
                className="w-[80%] h-[200px] object-cover rounded-md"
                src="https://s3-alpha-sig.figma.com/img/9fcb/6869/891d619c874cd4ee5862a91c35d002b7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvXxLJxHvQUTxe6r7pEqHvJ8F66xLV9poPda8~t8UkVtRVlkczoTVjJejmhlmKa4QngN4omCTO2UPY-8tlmWARz~rdAJVxeWZP39knP3zpZqkgyuC3~z~AzAXqIOHFRG8JX~xmAQc48lWiBV6EqHbT09mTGgA66L9HxtZO7z9ZUdM0Mb4zxLWBRRa5Mh1lTC9qtzQP8WC3TzD3x9AcP5xnb-zTVIqOAcGidKU~Elf6sQbNqS7-eCsSonmEYWDjDBXeMu1kyDefTOUrAG1jtg-rK~GbqtNMEhef4GxjFWglRWDd1eJaxh~rYz2PFgC4cPjSS565d33Ge8NtdvwlT2vA__"
                alt="anh 2"
              />
            </div>
            <div className="w-[50%] h-[87%] my-auto bg-white">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://s3-alpha-sig.figma.com/img/37c3/8ff7/c811418ad438465e73518aa5389682bd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7tpG9-ec7OGm3b7OIT1b5VOPWcJOHohBlzAEEbEs7B0r0fvfuJUbJcMKk~hQStvm4GyA3nfRvj6y3wPr4At~2QgQUS5pAuIA4~kHWj-iP2Ty7SlTrIDgWXc4EO7-kURGmrE3qOR5zY07QCnHAl6Eom3Q07jvhB3NxGzALf7AaNfJOnyHwCvpyzJQEjHgu~rhsV8yEJhzfcq9RBwmZN2gqeuimge0fOpDC-KuK~YOcs9izt-2ibkuUaltIzvbZt48i8JYb65timQ2GrG~OkHQ~PDY7Wdw~e42NNP2msrsZZw6ik2ZssssNX5mgh7W6a9MzkTHE0npsoXISVzSCCiug__"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF] md:w-[1440px] md:mx-auto md:mb-[100px] mt-5 md:mt-0 mx-auto justify-center">
        <h1 className="md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center md:mt-[100px] md:mb-[50px] text-[24px] font-extrabold mx-auto justify-center">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Làm thế nào để thay đổi khuân mặt"
            : "How to Swap a Face Online"}
        </h1>
        <div className="md:grid md:grid-cols-2 md:px-[100px] md:gap-8 mt-10 mx-auto">
          <div className="">
            <ul className=" space-y-2 ulhome md:block hidden mx-auto">
              <li className="">
                <div className="rounded-xl my-auto hover:shadow-xl  w-[550px] h-[170px] cards mx-auto">
                  <div className="flex gap-[16px] pt-6 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                      1
                    </strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Tải một bức ảnh lên"
                          : "Upload an Image"}
                      </h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Đơn thuần nhấn 'Tải một bức ảnh lên' và chọn 2 bức ảnh bạn muốn thay đổi tương tự với source ảnh. Hãy chắc chắn chỉ có một khuôn mặt và chất lượng ảnh tốt."
                          : "Simply click 'Upload an Image' and select 2 photos you want to use as the source image. Ensure only one face in the photo is of good quality."}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="rounded-xl hover:shadow-xl w-[550px] h-[170px] cards card1 mx-auto">
                  <div className="flex gap-[16px] pt-6 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                      2
                    </strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Thay đổi khuân mặt với AI"
                          : "Swap Face with AI"}
                      </h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Nhấn nút 'Thay đổi khuân mặt' sẽ xuất hiện những bức ảnh AI. Hoán đổi khuân mặt sẽ hoàn thiện trong vài giây. AI của chúng tôi làm việc này tự động hoàn toàn sẽ cho ra thành quả tốt nhất"
                          : "Click the 'Swap Face Now' button to show AI its magic. Faceswapper will finish face swapping in a few seconds. Our AI does the job automatically while guaranteeing the best output."}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" ">
                <div className="rounded-xl my-auto hover:shadow-xl w-[550px] h-[170px] cards card1 mx-auto">
                  <div className="flex gap-[16px] pt-6 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                      3
                    </strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Xem thành quả và tải xuống"
                          : "Preview and download"}
                      </h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Khuôn mặt của bạn được hoán đổi thành người bạn thích! Xem trước kết quả cuối cùng trên cùng một trang. Nhấp vào 'Tải xuống' để lưu hình ảnh không có hình mờ vào thiết bị của bạn. Chia sẻ nó cho vui!"
                          : "Bingo! Your face is swapped to who you like! Preview the final result on the same page. Click 'Download' to save the watermark-free picture to your device. Share it for fun!"}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="px-5 md:px-0 md:w-[448px] md:h-[528px] w-[300px] h-[300px]  rounded-3xl overflow-hidden mx-auto">
            <img
              src="img\cd9.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <Carousel className="block md:hidden ml-5 pb-3 mx-auto">
          <CarouselContent>
            <CarouselItem className="">
              <li className="">
                <div className="rounded-xl my-auto hover:shadow-xl  md:w-[550px] h-[170px] w-[390px] cards mx-auto">
                  <div className="flex gap-[16px] pt-3 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                      1
                    </strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Tải một bức ảnh lên"
                          : "Upload an Image"}
                      </h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Đơn thuần nhấn 'Tải một bức ảnh lên' và chọn 2 bức ảnh bạn muốn thay đổi tương tự với source ảnh. Hãy chắc chắn chỉ có một khuôn mặt và chất lượng ảnh tốt."
                          : "Simply click 'Upload an Image' and select 2 photos you want to use as the source image. Ensure only one face in the photo is of good quality."}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </CarouselItem>
            <CarouselItem>
              <li className="">
                <div className="rounded-xl hover:shadow-xl md:w-[550px] h-[170px] w-[390px] cards card1 mx-auto">
                  <div className="flex gap-[16px] pt-3 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                      2
                    </strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Thay đổi khuân mặt với AI"
                          : "Swap Face with AI"}
                      </h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Nhấn nút 'Thay đổi khuân mặt' sẽ xuất hiện những bức ảnh AI. Hoán đổi khuân mặt sẽ hoàn thiện trong vài giây. AI của chúng tôi làm việc này tự động hoàn toàn sẽ cho ra thành quả tốt nhất"
                          : "Click the 'Swap Face Now' button to show AI its magic. Faceswapper will finish face swapping in a few seconds. Our AI does the job automatically while guaranteeing the best output."}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </CarouselItem>
            <CarouselItem>
              <li className=" ">
                <div className="rounded-xl my-auto hover:shadow-xl md:w-[550px] w-[390px] h-[170px] cards card1 mx-auto">
                  <div className="flex gap-[16px] pt-3 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">
                      3
                    </strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Xem thành quả và tải xuống"
                          : "Preview and download"}
                      </h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">
                        {valueLocation.geoplugin_city === "Hanoi"
                          ? "Khuôn mặt của bạn được hoán đổi thành người bạn thích! Xem trước kết quả cuối cùng trên cùng một trang. Nhấp vào 'Tải xuống' để lưu hình ảnh không có hình mờ vào thiết bị của bạn. Chia sẻ nó cho vui!"
                          : "Bingo! Your face is swapped to who you like! Preview the final result on the same page. Click 'Download' to save the watermark-free picture to your device. Share it for fun!"}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="bg-[#F2FDFF] md:h-[707px] md:py-[95px] py-11">
        <h1 className="md:w-[1064px] w-[310px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Trình tạo AI tối ưu của bạn để tạo ảnh cưới miễn phí"
            : "Your Ultimate AI Maker to Generate Wedding Photos for Free"}
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-[48px] md:mx-[100px] md:my-auto md:mt-[45px] mt-5 w-[352px] md:w-auto mx-auto">
          <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <img src="img\easy-to-use 2.png" alt="" />
            <div className="mt-[10px] text-left">
              <h5 className="font-[700] text-[24px]">
                {" "}
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Dễ dàng sử dụng"
                  : "Easy to use"}
              </h5>
              <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Tất cả những gì bạn cần làm là tải lên 2 bức chân dung khuôn mặt xuất sắc. AI sẽ hoán đổi khuôn mặt một cách mượt mà mà không cần chỉnh sửa thủ công."
                  : "All you need to do is upload 2 excellent face portrait. AI will swap faces smoothly without requiring manual editing."}
              </p>
            </div>
          </div>
          <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mt-7 md:mt-0">
            <img src="img\light.png" alt="" />
            <div className="mt-[10px] text-left">
              <h5 className="font-[700] text-[24px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Bảo vệ quyền riêng tư"
                  : "Privacy Protection"}
              </h5>
              <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chúng tôi hứa rằng tất cả hình ảnh bạn tải lên và dữ liệu khác sẽ được bảo vệ tốt. Sẽ không ai nhìn thấy những điều này ngoại trừ chính bạn. Chúng tôi đảm bảo quy trình hoán đổi khuôn mặt có tính riêng tư cao."
                  : "We promise that all your uploaded images and other data will be protected well. No one will see these things except yourself. We make sure the face swapping procedure is highly private."}
              </p>
            </div>
          </div>
          <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mt-7 md:mt-0">
            <img src="img\lights.png" alt="" />
            <div className="mt-[10px] text-left">
              <h5 className="font-[700] text-[24px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Nhanh chóng hoán đổi"
                  : "One-sec Face Swap"}
              </h5>
              <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Ứng dụng hoán đổi khuôn mặt AI trực tuyến này có thể chuyển sang khuôn mặt của bất kỳ ai trực tuyến. Không cần cài đặt, không có quảng cáo và không có hình mờ! Tạo khuôn mặt kỳ diệu của bạn theo phong cách tuyệt vời và không cần quá nhiều nỗ lực!"
                  : "This online AI face swap app can switch to the faces of anyone online. No installation, no ads, and no watermarks! Create your face magic in fantastic style and without too much effort!"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF] md:py-[95px] py-11">
        <h1 className="md:w-[1064px] w-[300px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Bắt đầu sáng tạo của bạn với hơn 50 mẫu ảnh cưới"
            : "Jump Start Your Creation with 50+ Wedding Photos Template"}
        </h1>
        <div className="md:grid grid-cols-3 gap-6 mx-[125px] mt-[50px] hidden">
          <div className=" w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal1.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal3.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal4.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px]  h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal5.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal6.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal7.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal8.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
            <img
              src="img\gal9.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="mx-[60px] mt-5 md:hidden block">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal1.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal2.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal3.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal4.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4  ">
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal5.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal6.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal7.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img
                      src="img\gal8.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="bg-[#F2FDFF] md:h-[1061px] md:py-[110px] py-11 ">
        <h1 className="md:w-[1064px] w-[300px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Nói tạm biệt với chụp ảnh, studio, chi phí và hơn thế nữa"
            : "Say Goodbye to Photographer, Studios, Expense and More"}
        </h1>
        <div className="md:grid grid-cols-2 md:px-[120px] mt-10 w-[352px] md:w-auto mx-auto">
          <div className="md:w-[544px] w-[352px] md:p-[32px] p-8 block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <h5 className="font-[700] text-[24px] leading-[30px] text-black text-center mx-auto">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Ảnh cưới truyền thống"
                : "Traditional Wedding Photo"}
            </h5>
            <div className="h-[354px]">
              <img
                className="mt-[30px] h-full w-full object-contain"
                src="img\cd1.png"
                alt=""
              />
            </div>
            <div className="mt-[30px] text-left">
              <li className="flex font-[500] text-[16px] leading-[19px] mt-2">
                <svg
                  className="mr-[15px]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z"
                    fill="#FF6A55"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chi phí cao cho máy ảnh, studio, sân khấu âm thanh, v.v."
                  : "High cost of cameras, studios, sound stage, etc."}
              </li>
              <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                <svg
                  className="mr-[15px]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z"
                    fill="#FF6A55"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Mất nhiều thời gian để chuẩn bị, chụp và chỉnh sửa."
                  : "Long time in preparing, shooting, and editing."}
              </li>
              <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                <svg
                  className="mr-[15px]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z"
                    fill="#FF6A55"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Quy trình thủ công phức tạp qua tất cả các giai đoạn."
                  : "Complex manual processes through all stages."}
              </li>
              <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                <svg
                  className="mr-[15px]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z"
                    fill="#FF6A55"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Khó cập nhật ảnh sau khi thực hiện"
                  : "Hard to update the photos after done"}
              </li>
            </div>
          </div>
          <div className="md:w-[544px] w-[352px] md:p-[32px] p-8 block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mt-9 md:mt-0">
            <h5 className="font-[700] text-[24px] leading-[30px] text-black text-center mx-auto">
              {valueLocation.geoplugin_city === "Hanoi"
                ? "Ảnh đám cưới AI"
                : "AI Ưedding Photo"}
            </h5>
            <div className="h-[354px]">
              <img
                className="mt-[30px] h-full w-full object-contain"
                src="img\cd2.png"
                alt=""
              />
            </div>
            <div className="mt-[30px] text-left">
              <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                <svg
                  width="28"
                  className="mr-[15px]"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z"
                    fill="#61DE35"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Không máy ảnh, không studio, không môi trường cụ thể hơn"
                  : "No camera, no studios, no more specific environment"}
              </li>
              <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                <svg
                  width="28"
                  className="mr-[15px]"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z"
                    fill="#61DE35"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Chọn từ hơn 50 khung hình AI mà không cần thuê studio."
                  : "Choose from 50+ AI frames, without hiring studios."}
              </li>
              <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                <svg
                  width="28"
                  className="mr-[15px]"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z"
                    fill="#61DE35"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Tạo ảnh AI trong vòng vài phút"
                  : "Generate AI photos within several minutes"}
              </li>
              <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                <svg
                  width="28"
                  className="mr-[15px]"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z"
                    fill="#61DE35"
                  />
                </svg>
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Các quy trình trực quan và dễ dàng được hỗ trợ bởi công nghệ AI."
                  : "Intuitive & easy processes powered by AI tech."}
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF] md:h-[876px] md:py-[110px] py-11 flex gap-2">
        <div className="md:w-[1200px] w-[360px] items-center mx-auto justify-center">
          <h1 className="md:w-[1064px] w-[360px] md:font-[800] md:text-[48px] leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
            {valueLocation.geoplugin_city === "Hanoi"
              ? "Được hàng triệu người sáng tạo và công ty trên toàn thế giới tin cậy."
              : "Trusted by Millions of Creators and Companies Worldwide"}
          </h1>
          <div className="md:w-[1200px] w-[360px] md:mt-[40px] mx-auto items-center justify-center text-center mt-5">
            <Carousel
              opts={{
                align: "start",
              }}
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl1.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Do hậu Covid 19 nên kinh tế nước ta rất khó khăn nên chúng tôi dùng phần mềm này chụp ảnh cưới để lưu giữ làm kỷ niệm, thật tuyệt vời, đây là sản phẩm trí tuệ nhân tạo tuyệt vời, nó giúp ích cho chúng tôi rất nhiều. Tôi có một bức ảnh lưu niệm"
                        : "Due to post-covid 19, we have a very difficult economy, we used this software to create wedding photos to keep as memories, it's amazing, this is a great artificial intelligence product, it helps us. I got a souvenir photo"}
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl2.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Chúng tôi sử dụng trí tuệ nhân tạo để tạo ra những bức ảnh cưới tuyệt vời, bạn không cần tốn tiền chụp ảnh cưới, hãy sử dụng sản phẩm của chúng tôi"
                        : "We use artificial intelligence to create great wedding photos, you don't need to spend money on wedding photography, use our products"}
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl3.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Tôi được người yêu giới thiệu sản phẩm cưới giả. Nó đã cho tôi nhiều ý tưởng để chụp ảnh cưới. Chúng tôi tạo ra một sự kiện AI để chụp ảnh cưới, sau đó yêu cầu nhiếp ảnh gia đám cưới chụp những bức ảnh trông giống như sản phẩm đám cưới. Ngạc nhiên. , nó rất hợp với khuôn mặt của chúng ta, nó giúp tôi dễ dàng hình dung ra cách chụp những bức ảnh phù hợp."
                        : "I was introduced to the fake wedding product by my lover. It gave me many ideas for wedding photography. We created an AI event to take wedding photos, then asked the wedding photographer to take photos that look like wedding products. It's amazing. , it suits our faces very well, it helps me easily imagine how to take suitable photos."}
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl2.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Do hậu Covid 19 nên kinh tế nước ta rất khó khăn nên chúng tôi dùng phần mềm này chụp ảnh cưới để lưu giữ làm kỷ niệm, thật tuyệt vời, đây là sản phẩm trí tuệ nhân tạo tuyệt vời, nó giúp ích cho chúng tôi rất nhiều. Tôi có một bức ảnh lưu niệm"
                        : "Due to post-covid 19, we have a very difficult economy, we used this software to create wedding photos to keep as memories, it's amazing, this is a great artificial intelligence product, it helps us. I got a souvenir photo"}
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="md:block hidden" />
              <CarouselNext className="md:block hidden" />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="bg-white md:h-[400px] pb-3">
        <h2 className="md:w-[1064px] w-[300px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Làm cho ảnh cưới trở nên dễ dàng cho tất cả mọi người!"
            : "Make Wedding Photo Easy for All!"}
        </h2>
        <h5 className="font-[500] text-[24px] md:leading-[30px] mt-10 md:w-[1120px] w-[300px] px-[5px] mx-auto">
          {valueLocation.geoplugin_city === "Hanoi"
            ? "Sử dụng sức mạnh của AI để tạo ra những bức ảnh cưới chuyên nghiệp nhanh hơn, tốn ít công sức và chi phí hơn. Tạo đám cưới trong mơ của bạn. Bắt đầu với AI đám cưới!"
            : "Use the power of AI to create professional wedding photos faster, with less effort and cost. Create your dream wedding . Get started with Wedding AI!"}
        </h5>
        <Link to={`/listcategories`}>
          <button className="text-[#fff] w-[340px] bg-[#009DC4] mt-11 rounded-3xl px-[20px] py-[10px] text-center font-[700] text-[16px] leading-[20px] flex mx-auto items-center">
            <div className="mx-auto flex">
              <span className="">
                {" "}
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Tạo ảnh cưới miễn phí"
                  : "Create Free Wedding Photo"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
