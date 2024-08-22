import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useToast } from "../../components/ui/use-toast";
import { useCallback, useContext, useState } from "react";
import { ToastAction } from "../../components/ui/toast";
import axios from "axios";
import { Button } from "../../components/ui/button";
import ProgressForBaby from "./ProgressForBaby";
import { LanguageContext } from "../../hooks/languageContext";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

function Yourself() {
  const valueLocation = useContext(LanguageContext);
  const [original_Image_2, setOriginalImage2] = useState<File | null>(null);
  const [chosenImage2, setChosenImage2] = useState("");
  const [checkChosen2, setCheckChosen2] = useState(false);
  const [uploadedImage] = useState<string[] | []>([]);
  const [isActive, setIsActive] = useState("girl");
  const [isLoading, setIsLoading] = useState(false);

  const navi = useNavigate();

  const On_Uploader_2_Drop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      //@ts-ignore
      image.src = event.target!.result;
      image.onload = () => {
        setOriginalImage2(acceptedFiles[0]);
      };
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: get_Uploader_2_RootProps,
    getInputProps: get_Uploader_2_InputProps,
    open: openUploader2,
    isDragActive: isUploader2DragActive,
  } = useDropzone({
    onDrop: On_Uploader_2_Drop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    multiple: false,
  });

  const handleChoose2 = (src: string) => {
    setOriginalImage2(null);
    setCheckChosen2(true);
    setChosenImage2(src);
  };

  const { toast } = useToast();
  const handleCreate = async () => {
    if (!original_Image_2 && !chosenImage2) {
      toast({
        variant: "destructive",
        description: `Image 2 must not be empty`,
        action: (
          <ToastAction altText="Try again">
            {valueLocation.geoplugin_city === "Hanoi" ? "Thử lại" : "Try again"}
          </ToastAction>
        ),
      });
      return;
    }
    const postFormData = new FormData();
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    let req_post_img_2;
    if (isActive === "boy") {
      if (original_Image_2) {
        postFormData.append("image_2", original_Image_2);
        const image_2_formData = new FormData();
        image_2_formData.append("src_img", original_Image_2);
        req_post_img_2 = axios
          .post(
            `https://api.funface.online/upload-gensk/${userData.id_user}?type=src_nam`,
            image_2_formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          )
          .then((res) => {
            return res.data;
          });
      } else if (chosenImage2) {
        req_post_img_2 = `/var/www/build_futurelove/${chosenImage2.replace(
          "https://futurelove.online/",
          ""
        )}`;
      }
    } else {
      if (original_Image_2) {
        postFormData.append("image_2", original_Image_2);
        const image_2_formData = new FormData();
        image_2_formData.append("src_img", original_Image_2);
        req_post_img_2 = axios
          .post(
            `https://api.funface.online/upload-gensk/${userData.id_user}?type=src_nu`,
            image_2_formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            }
          )
          .then((res) => {
            return res.data;
          });
      } else if (chosenImage2) {
        req_post_img_2 = `/var/www/build_futurelove/${chosenImage2.replace(
          "https://futurelove.online/",
          ""
        )}`;
      }
    }
    const [src_res_2] = await Promise.all([req_post_img_2]);
    console.log(src_res_2);

    if (src_res_2 && src_res_2 !== null) {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://video.funface.online/getdata/swap/listimage_alone",
          {
            params: {
              device_them_su_kien: userData.device_register,
              ip_them_su_kien: userData.ip_register,
              id_user: userData.id_user,
              list_folder: `ANH_ALONE_1`,
            },
            headers: {
              link1: src_res_2,
              Authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = response.data;
        setIsLoading(false);
        navi(`/expand/${userData.id_user}/yourself/image/`, {
          state: { data },
        });
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        alert("Sorry!:< an error occur!!!Please go back and try again.");
        navi(-1);
      }
    }
  };

  const handleActive = (value: string) => {
    if (value === "girl") {
      setIsActive(value);
    }
    if (value === "boy") {
      setIsActive(value);
    }
  };
  return (
    <div>
      {isLoading && <ProgressForBaby />}
      <Header />
      <div className="h-[588px] w-[100%] bg-[#C2E9F0] relative">
        {/* {Wave} */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M956.565 0.236115C1249.31 2.31686 1413.94 51.9233 1461.93 81.4006L1527.71 223.837V361.687C1318.76 374.258 824.056 399.401 516.918 399.401C134.23 399.401 -132.233 303.783 -220.088 272.257L-220.932 271.955C-307.914 240.743 -220.12 22.738 -91.958 69.0815C101.51 139.04 590.639 -2.36481 956.565 0.236115Z"
            fill="url(#paint0_linear_150_1851)"
            fill-opacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_150_1851"
              x1="634.534"
              y1="399.401"
              x2="634.534"
              y2="5.31315"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stopOpacity="0" />
              <stop offset="1" stop-color="#16B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="w-[50%] h-[98%] bg-[#fff] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] flex flex-col justify-around">
          <div className="w-full h-[8%] flex justify-around">
            <button className="w-[10%] h-full" onClick={() => navi(-1)}>
              {/* button back */}
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-auto"
              >
                <path d="M9.25 0.5L0.75 9L9.25 17.5" stroke="#222222" />
              </svg>
            </button>
            <div className="w-[80%] h-full font-[700] mt-[0.2rem] text-2xl  ">
              Add Your Photo
            </div>
            <button className="w-[10%] h-full" onClick={() => navi("/")}>
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M9.7915 24.9874C9.7915 22.3285 9.7915 20.999 10.329 19.8304C10.8665 18.6618 11.8759 17.7966 13.8947 16.0662L15.853 14.3876C19.502 11.2599 21.3265 9.69604 23.4998 9.69604C25.6731 9.69604 27.4976 11.2599 31.1466 14.3876L33.105 16.0662C35.1238 17.7966 36.1332 18.6618 36.6707 19.8304C37.2082 20.999 37.2082 22.3285 37.2082 24.9874V33.2915C37.2082 36.9842 37.2082 38.8305 36.061 39.9777C34.9138 41.1249 33.0675 41.1249 29.3748 41.1249H17.6248C13.9322 41.1249 12.0858 41.1249 10.9387 39.9777C9.7915 38.8305 9.7915 36.9842 9.7915 33.2915V24.9874Z"
                  stroke="#33363F"
                  strokeWidth="2"
                />
                <path
                  d="M28.3957 41.125V30.375C28.3957 29.8227 27.948 29.375 27.3957 29.375H19.604C19.0517 29.375 18.604 29.8227 18.604 30.375V41.125"
                  stroke="#33363F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-[52%] flex justify-center items-center">
            <div className="">
              {/* {Image upload 2} */}
              <div className="flex gap-3 ml-2 md:ml-0">
                <div
                  {...get_Uploader_2_RootProps()}
                  className="md:w-[250px] md:h-[300px] w-[116px] border md:bg-[#EFF6FD] border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                >
                  <input
                    {...get_Uploader_2_InputProps()}
                    className="w-full h-full"
                  />
                  {isUploader2DragActive ? (
                    <p className="text-red-500">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Thả ảnh tại đây"
                        : "Drop your photo"}
                    </p>
                  ) : (
                    <div className="flex gap-1 h-full">
                      {!checkChosen2 ? (
                        original_Image_2 ? (
                          <img
                            className="aspect-square w-full object-cover"
                            src={URL.createObjectURL(original_Image_2)}
                            alt={original_Image_2.name}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col relative">
                            <div>
                              <svg
                                width="40"
                                height="50"
                                viewBox="0 0 54 59"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute bottom-[2%] right-[30%]"
                              >
                                <path
                                  d="M5.78585 50.5713H48.2144C50.3447 50.5713 52.0716 48.6846 52.0716 46.357V12.6428C52.0716 10.3152 50.3447 8.42847 48.2144 8.42847H5.78585C3.65561 8.42847 1.92871 10.3152 1.92871 12.6428V46.357C1.92871 48.6846 3.65561 50.5713 5.78585 50.5713Z"
                                  stroke="#3B94EE"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M36.6506 26.1793C39.3031 26.1793 41.4534 23.8298 41.4534 20.9317C41.4534 18.0335 39.3031 15.6841 36.6506 15.6841C33.998 15.6841 31.8477 18.0335 31.8477 20.9317C31.8477 23.8298 33.998 26.1793 36.6506 26.1793Z"
                                  stroke="#3B94EE"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M35.0334 50.5717C33.8357 43.6017 30.4104 37.3235 25.3688 32.8572C20.3272 28.3909 13.9971 26.027 7.50815 26.1873C5.63597 26.1819 3.76762 26.3724 1.92871 26.7563"
                                  stroke="#3B94EE"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M52.0714 37.6788C49.0331 36.5579 45.8479 35.9871 42.641 35.9891C38.5822 35.9795 34.5642 36.8771 30.8345 38.6268"
                                  stroke="#3B94EE"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <svg
                                width="50"
                                height="70"
                                viewBox="0 0 75 82"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute bottom-[-2%] right-[0%]"
                              >
                                <ellipse
                                  cx="36.7788"
                                  cy="40.2114"
                                  rx="28.125"
                                  ry="30.75"
                                  fill="#C6E2FF"
                                />
                                <path
                                  d="M37.5 27.3333L37.5 54.6666"
                                  stroke="#3B94EE"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M50 41L25 41"
                                  stroke="#3B94EE"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        )
                      ) : (
                        <img
                          className="aspect-square w-full object-cover"
                          src={chosenImage2}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* {onclick will trigger open upload file} */}
              <Dialog>
                <DialogTrigger className="flex items-center w-[140px] md:w-[200px] mt-6 text-[#fff] bg-[#16B6D4] my-auto rounded-3xl md:px-[15px] px-[10px] md:py-[10px] py-[10px] text-center font-[700] md:text-[14px] text-[10px] md:ml-6 justify-center">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Tải ảnh lên"
                    : "Upload face"}
                  <svg
                    width="21"
                    className="ml-2"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8118 2.29015L18.5216 10L10.8118 17.7099"
                      stroke="white"
                      strokeWidth="3.08394"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5213 10.0001L2.11914 10.0001"
                      stroke="white"
                      strokeWidth="3.08394"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </DialogTrigger>
                <DialogContent className="md:w-[818px] w-[360px] h-[70%] md:h-[100%] overflow-scroll md:overflow-auto">
                  <h3 className="font-[700] text-[24px] leading-[20x] mt-[10px] text-center">
                    {valueLocation.geoplugin_city === "Hanoi"
                      ? "Ảnh nữ"
                      : "Upload woman's face"}
                  </h3>
                  <div className="flex items-center mt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
                    </svg>
                    <span className="font-[600] md:text-[20px] text-[14px] leading-[20px] ml-2">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Ảnh của bạn cần xa hơn hoặc gần camera hơn"
                        : "Your image need to move closer or away from the camera to complete"}
                    </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
                    </svg>
                    <span className="font-[600] md:text-[20px] text-[14px] leading-[20px] ml-2">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Đảm bảo bạn đang ở trong môi trường sáng sủa"
                        : "Make sure you are in bright environment"}
                    </span>
                  </div>
                  <DialogClose
                    onClick={() => {
                      openUploader2();
                      setCheckChosen2(false);
                    }}
                    className="text-[#fff] bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[20px] py-[15px] text-center font-[700] md:text-[14px] text-[10px] flex items-center mt-4 mx-auto md:w-[736px] w-[320px] "
                  >
                    {valueLocation.geoplugin_city === "Hanoi"
                      ? "Các bức ảnh đã tải lên"
                      : "Upload photos"}
                    <svg
                      width="21"
                      className="ml-2"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8118 2.29015L18.5216 10L10.8118 17.7099"
                        stroke="white"
                        strokeWidth="3.08394"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5213 10.0001L2.11914 10.0001"
                        stroke="white"
                        strokeWidth="3.08394"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </DialogClose>
                  <h3 className="font-[600] text-[24px] leading-[10px] mt-2">
                    {valueLocation.geoplugin_city === "Hanoi"
                      ? "Đã tải"
                      : "Uploaded"}
                  </h3>
                  <ScrollArea className="md:[729px] whitespace-nowrap rounded-md border mt-[100px] md:mt-0">
                    <div className="flex w-max space-x-4 p-4">
                      {uploadedImage.map((img, index) => (
                        <div key={index} className="shrink-0">
                          <DialogClose
                            className="overflow-hidden rounded-md"
                            onClick={() => handleChoose2(img)}
                          >
                            <img
                              src={`${img}`}
                              className="object-cover w-[160px] h-[160px]"
                              alt={`Image ${index}`}
                            />
                          </DialogClose>
                        </div>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                  <p className="font-[400] md:text-[20px] text-[14px] leading-[20px] md:mt-8 mt-[100px] ml-2">
                    {valueLocation.geoplugin_city === "Hanoi"
                      ? "Chúng tôi tôn trọng sự riêng tư của bạn. Hãy yên tâm, chúng tôi xử lý dữ liệu của bạn với sự quan tâm tối đa."
                      : "We value your privacy. Rest assured, we handle your data with utmost care."}
                  </p>

                  <DialogClose
                    asChild
                    className="text-[#fff] bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[20px] py-[15px] text-center font-[700] md:text-[14px] text-[10px] flex items-center mx-auto mt-6 md:w-[736px] w-[320px]"
                  >
                    {valueLocation.geoplugin_city === "Hanoi"
                      ? "Lưu thay đổi"
                      : "Save changes"}
                  </DialogClose>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="w-full h-[50px] flex justify-around mt-4">
            <button
              className={`border-2 w-[40%] h-[75%] rounded border-[#DC90B6] flex justify-center items-center ${
                isActive === "girl" ? "bg-[pink]" : "bg-white"
              }`}
              onClick={() => handleActive("girl")}
            >
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 17.3572C18.6944 17.3572 22.5 13.6875 22.5 9.16078C22.5 4.63402 18.6944 0.964355 14 0.964355C9.30558 0.964355 5.5 4.63402 5.5 9.16078C5.5 13.6875 9.30558 17.3572 14 17.3572Z"
                  stroke="#D790B7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 17.3572V26.0357"
                  stroke="#D790B7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 22.1787H18"
                  stroke="#D790B7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="ml-2">Girl</span>
            </button>
            <button
              className={`border-2 w-[40%] h-[75%] rounded-md border-[#468DE1] flex justify-center items-center ${
                isActive === "boy" ? "bg-[#21b2e5]" : "bg-white"
              }`}
              onClick={() => handleActive("boy")}
            >
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_165_2160)">
                  <path
                    d="M7.80343 20.25C11.6596 20.25 14.7856 17.3958 14.7856 13.875C14.7856 10.3542 11.6596 7.5 7.80343 7.5C3.9473 7.5 0.821289 10.3542 0.821289 13.875C0.821289 17.3958 3.9473 20.25 7.80343 20.25Z"
                    stroke="#3B94EE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.7852 0.75H22.178V7.5"
                    stroke="#3B94EE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.7324 9.375L22.1789 0.75"
                    stroke="#3B94EE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_2160">
                    <rect width="23" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="ml-2">Boy</span>
            </button>
          </div>
          <div className="w-full h-[10%] flex justify-around">
            <Button
              variant={"cus4"}
              className="w-[200px]"
              onClick={handleCreate}
            >
              <span className="text-lg">
                {valueLocation.geoplugin_city === "Hanoi"
                  ? "Tiếp tục"
                  : "Continue"}
              </span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M33.2915 23.5H5.87484"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.7262 23.2856L34.5034 18.352C33.9702 18.032 33.2918 18.4161 33.2918 19.038V27.962C33.2918 28.5839 33.9702 28.968 34.5034 28.648L42.7262 23.7144C42.888 23.6173 42.888 23.3827 42.7262 23.2856Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yourself;
