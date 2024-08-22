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

function CreateBabyImage() {
  const valueLocation = useContext(LanguageContext);
  const [original_Image_1, setOriginalImage1] = useState<File | null>(null);
  const [original_Image_2, setOriginalImage2] = useState<File | null>(null);
  const [chosenImage1, setChosenImage1] = useState("");
  const [checkChosen1, setCheckChosen1] = useState(false);
  const [chosenImage2, setChosenImage2] = useState("");
  const [checkChosen2, setCheckChosen2] = useState(false);
  const [uploadedImage] = useState<string[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navi = useNavigate();

  const On_Uploader_1_Drop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      //@ts-ignore
      image.src = event.target!.result;
      image.onload = () => {
        setOriginalImage1(acceptedFiles[0]);
      };
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

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
    getRootProps: get_Uploader_1_RootProps,
    getInputProps: get_Uploader_1_InputProps,
    open: openUploader1,
    isDragActive: isUploader1DragActive,
  } = useDropzone({
    onDrop: On_Uploader_1_Drop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    multiple: false,
  });

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

  const handleChoose1 = (src: string) => {
    setOriginalImage1(null);
    setCheckChosen1(true);
    setChosenImage1(src);
  };

  const handleChoose2 = (src: string) => {
    setOriginalImage2(null);
    setCheckChosen2(true);
    setChosenImage2(src);
  };

  const { toast } = useToast();
  const handleCreate = async () => {
    if (!original_Image_1 && !chosenImage1) {
      toast({
        variant: "destructive",
        description: `Image 1 must not be empty!`,
        action: (
          <ToastAction altText="Try again">
            {valueLocation.geoplugin_city === "Hanoi" ? "Thử lại" : "Try again"}
          </ToastAction>
        ),
      });
      return;
    }
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
    let req_post_img_1, req_post_img_2;
    if (original_Image_1) {
      postFormData.append("image_1", original_Image_1);
      const image_1_formData = new FormData();
      image_1_formData.append("src_img", original_Image_1);
      req_post_img_1 = axios
        .post(
          `https://api.funface.online/upload-gensk/${userData.id_user}?type=src_nam`,
          image_1_formData,
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
    } else if (chosenImage1) {
      req_post_img_1 = `/var/www/build_futurelove/${chosenImage1.replace(
        "https://futurelove.online/",
        ""
      )}`;
    }
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
    const [src_res_1, src_res_2] = await Promise.all([
      req_post_img_1,
      req_post_img_2,
    ]);
    console.log(src_res_1, src_res_2);

    if (src_res_1 !== null && src_res_2 !== null) {
      try {
        setIsLoading(true);
        const randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        const response = await axios.get(
          "https://video.funface.online/getdata/swap/listimage_baby_family",
          {
            params: {
              device_them_su_kien: userData.device_register,
              ip_them_su_kien: userData.ip_register,
              id_user: userData.id_user,
              list_folder: `baby_family${randomNumber}`,
            },
            headers: {
              link1: src_res_1,
              link2: src_res_2,
              Authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const id_all_sk = response.data.sukien_2_image.id_all_sk;
        const data = response.data;
        setIsLoading(false);
        navi(`/expand/${userData.id_user}/create/timeline/${id_all_sk}`, {
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
              Add Parents’ Photo
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
          <div className="w-full h-[48%] flex justify-between">
            <div className="h-full">
              {/* {Image uploader 1} */}
              <div className="flex gap-3 ml-2 md:ml-0">
                <div
                  {...get_Uploader_1_RootProps()}
                  className="md:w-[220px] md:h-[240px] w-[116px] r border md:bg-[#EFF6FD] border-gray-100 shadow-xl hover-ring-1 hover-ring-gray focus-outline-none focus-ring"
                >
                  <input
                    {...get_Uploader_1_InputProps()}
                    className="h-full w-full"
                  />
                  {isUploader1DragActive ? (
                    <p className="text-red-500">
                      {valueLocation.geoplugin_city === "Hanoi"
                        ? "Thả ảnh tại đây"
                        : "Drop your image"}
                    </p>
                  ) : (
                    <div className="flex gap-1 h-full">
                      {!checkChosen1 ? (
                        original_Image_1 ? (
                          <img
                            className="aspect-square w-full object-cover"
                            src={URL.createObjectURL(original_Image_1)}
                            alt={original_Image_1?.name}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col relative">
                            <img
                              className="w-[100px] h-[100px] bg-[#EFF6FD] object-fit"
                              src="https://s3-alpha-sig.figma.com/img/1b6e/d52f/cea85f0662d115e0633c83e4fab45dac?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2iggiIjkWs16OmzWTRq-aFLTSTloUcTy5x6~szPquaJpLfFowwGJX6B7R-tCFi-Iybixw43sJPBcLwIDQYcNCZEb4KZWu8qrArlrkkY-LqxI3qih8EIiPGyf99oq5N-UBjaiPrOIleVw78VPHnOgwwIe1EPHB-PIRJqe5cIQiK62OCI8ON~apuAT-Llf1q8U4QZiK1J6nQc105wCi6KWjQ5y8pT89hNUw1VNmoetqBPpKMMQQC1CPy8K7EoSUkGU4oJDqoqX3SJywUxY-MJiQN1jO2BW518-dYcAkn1yaGQ9fXtrOdeQ7BDH4jX~3kURn178UMighChrlydX0JTUA__"
                              alt="boy"
                            />
                            <span className="font-[500]">
                              {valueLocation.geoplugin_city === "Hanoi"
                                ? "Ảnh bố"
                                : "Father's photo"}
                            </span>
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
                          src={chosenImage1}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* {onClick will trigger open upload file} */}
              <Dialog>
                <DialogTrigger className="flex items-center w-[140px] md:w-[190px] ml-3 mt-6 text-[#fff] bg-[#16B6D4] my-auto rounded-3xl md:px-[15px] px-[10px] md:py-[10px] py-[10px] text-center font-[700] md:text-[14px] text-[10px] justify-center">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Tải ảnh nam"
                    : "Upload man's face"}
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
                      ? "Tải ảnh nam"
                      : "Upload man's face"}
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
                      openUploader1();
                      setCheckChosen1(false);
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
                            onClick={() => handleChoose1(img)}
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
            <svg
              width="120"
              className="md:block hidden my-auto"
              height="100"
              viewBox="0 0 161 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80.3202 44.7407H80.3209C85.513 44.7467 90.6425 45.8818 95.3588 48.0683C100.075 50.2548 104.267 53.4411 107.648 57.4093C111.029 61.3774 113.519 66.0338 114.949 71.0602C116.379 76.0865 116.715 81.3645 115.933 86.5334C115.933 86.5335 115.933 86.5335 115.933 86.5335L115.439 86.4588C115.309 87.3161 114.847 88.0866 114.154 88.6007C113.46 89.1147 112.593 89.3303 111.742 89.1999C110.891 89.0695 110.126 88.6039 109.615 87.9055C109.105 87.2071 108.891 86.3331 109.021 85.4757L80.3202 44.7407ZM80.3202 44.7407C74.7163 44.742 69.19 46.06 64.1807 48.5897C59.1714 51.1195 54.8173 54.7912 51.4642 59.3128C48.1111 63.8343 45.8513 69.0811 44.8643 74.6362C43.8773 80.1912 44.1902 85.9016 45.7781 91.3135C47.366 96.7255 50.1853 101.69 54.0121 105.813C57.839 109.935 62.568 113.102 67.8234 115.061C73.0788 117.02 78.7155 117.717 84.2855 117.097C89.8555 116.478 95.205 114.557 99.9087 111.49L99.9091 111.49C100.743 110.945 101.326 110.089 101.533 109.112C101.74 108.136 101.553 107.116 101.012 106.277C100.472 105.438 99.6227 104.849 98.65 104.641C97.6773 104.432 96.6624 104.621 95.8288 105.166L80.3202 44.7407ZM146.82 46.8756V46.875C146.817 43.5652 145.51 40.3912 143.185 38.0497C140.861 35.708 137.708 34.3902 134.419 34.3866H134.419H112.326L108.746 20.9315L108.746 20.931C108.037 18.2777 106.48 15.9327 104.315 14.2591C102.15 12.5854 99.497 11.6763 96.7668 11.673H96.7662C91.1373 11.673 86.2601 11.6175 82.0306 11.5694C77.6706 11.5198 73.9989 11.478 70.9012 11.5129C64.8056 11.5816 60.7872 11.9436 57.9753 13.1813C55.1005 14.4466 53.5371 16.5999 52.2571 20.0358C51.3821 22.3843 50.6199 25.3906 49.6565 29.19C49.2533 30.78 48.8149 32.5089 48.3184 34.3866H26.222H26.2214C22.9323 34.3902 19.7798 35.708 17.4552 38.0497C15.1307 40.3912 13.8239 43.5652 13.8203 46.875V46.8756L13.8203 117.011L13.8203 117.012C13.8239 120.321 15.1307 123.495 17.4552 125.837C19.7798 128.179 22.9323 129.496 26.2214 129.5H26.222H134.419H134.419C137.708 129.496 140.861 128.179 143.185 125.837C145.51 123.495 146.817 120.321 146.82 117.012V117.011V46.8756ZM104.445 98.946C104.759 99.8958 105.436 100.682 106.327 101.131C106.768 101.353 107.248 101.486 107.74 101.521C108.233 101.556 108.727 101.493 109.195 101.336C109.663 101.179 110.095 100.931 110.468 100.605C110.84 100.28 111.145 99.8842 111.365 99.4406C111.585 98.9971 111.716 98.5143 111.751 98.02C111.786 97.5256 111.724 97.0291 111.569 96.5588C111.413 96.0884 111.167 95.6534 110.844 95.2785C110.521 94.9036 110.128 94.5962 109.687 94.374C108.796 93.9252 107.764 93.8513 106.819 94.1687C105.873 94.4861 105.093 95.1684 104.648 96.0642C104.204 96.9598 104.131 97.9963 104.445 98.946ZM74.2353 34.5692H86.4075C87.4021 34.5692 88.3553 34.1711 89.0575 33.4638C89.7596 32.7565 90.1534 31.7981 90.1534 30.7995C90.1534 29.8009 89.7596 28.8424 89.0575 28.1352C88.3553 27.4278 87.4021 27.0298 86.4075 27.0298H74.2353C73.2407 27.0298 72.2875 27.4278 71.5853 28.1352C70.8832 28.8424 70.4894 29.8009 70.4894 30.7995C70.4894 31.7981 70.8832 32.7565 71.5853 33.4638C72.2875 34.1711 73.2407 34.5692 74.2353 34.5692ZM29.8464 57.0945C29.8464 59.1428 30.6211 60.7158 31.8109 61.7717C32.9915 62.8193 34.5514 63.3326 36.0948 63.3329C37.6382 63.3332 39.1982 62.8205 40.3788 61.7729C41.5688 60.7171 42.3434 59.1438 42.3434 57.0945C42.3434 55.0453 41.5688 53.4715 40.379 52.415C39.1984 51.3668 37.6385 50.8532 36.095 50.8529C34.5515 50.8526 32.9915 51.3656 31.8109 52.4138C30.621 53.4702 29.8464 55.0443 29.8464 57.0945ZM137.889 43.3744C138.81 44.3024 139.329 45.5617 139.329 46.8756V117.011C139.329 118.325 138.81 119.584 137.889 120.512C136.968 121.44 135.72 121.961 134.419 121.961H26.222C24.921 121.961 23.6725 121.44 22.7515 120.512C21.8303 119.584 21.3121 118.325 21.3121 117.011V46.8756C21.3121 45.5617 21.8303 44.3024 22.7515 43.3744C23.6725 42.4466 24.921 41.9261 26.222 41.9261H51.1938C52.0653 41.9261 52.8155 41.7995 53.4576 41.2369C54.0694 40.701 54.5152 39.8249 54.9658 38.5265C55.5207 36.9278 56.1313 34.5282 57.034 30.9808C57.5993 28.7592 58.2792 26.0873 59.1317 22.88C59.4119 21.8269 60.029 20.8969 60.8866 20.2341C61.7442 19.5712 62.7944 19.2123 63.8744 19.2124H96.7662C97.8462 19.2123 98.8964 19.5712 99.754 20.2341C100.612 20.8969 101.229 21.8269 101.509 22.8801C102.353 26.0541 103.028 28.7029 103.591 30.9097C104.511 34.519 105.13 36.9459 105.69 38.5541C106.141 39.8479 106.586 40.7179 107.196 41.2483C107.837 41.8049 108.583 41.9261 109.447 41.9261H134.419C135.72 41.9261 136.968 42.4466 137.889 43.3744Z"
                fill="#009DC4"
                stroke="#009DC4"
              />
              <path
                d="M96.982 68.9018C90.9923 63.5468 84.2444 66.6752 80.3272 70.0574C76.4099 66.6752 69.662 63.5468 63.6471 68.9018C59.932 72.1994 58.3903 77.7517 59.6287 83.3885C61.5242 92.0693 69.0807 98.6644 79.8217 101.032C79.9986 101.06 80.1502 101.088 80.3272 101.088C80.4788 101.088 80.6557 101.06 80.8073 101.032C91.5736 98.6644 99.1301 92.0693 101.026 83.3885C102.239 77.7517 100.697 72.1994 96.982 68.9018Z"
                fill="#009DC4"
              />
            </svg>
            <div className="">
              {/* {Image upload 2} */}
              <div className="flex gap-3 ml-2 md:ml-0">
                <div
                  {...get_Uploader_2_RootProps()}
                  className="md:w-[220px] md:h-[240px] w-[116px] border md:bg-[#EFF6FD] border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
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
                            <img
                              className="w-[100px] h-[100px] bg-[#EFF6FD] object-fit"
                              src="https://s3-alpha-sig.figma.com/img/17fb/26e3/d47bd452058e73bd02b7b60b4acc98ac?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V7UFVpzoTGa0l0L8wRA0OmanMwLoU4GP3NYWMbWSUIp0seiKzryoUnEl4Uqs9Kxd1t-h-S8m0HM-qKelteG~3ND8rBUkTmWpSKelGZ5w2lAKC--CD6xBeWRCckvdA~f~qhhUb1tJm~2ZvAi4dbAGQuJAh4JlJAjQ8d0GhvH1c2jwF6r7QB8iRIbn2eBMnVdHEsC14yCGGwkeyudBZQbvvTkKxPaGeZKJaKoSRFsmsyI1uV94VVwhheiFx0p3jp1Edi5egxDR3QqBdLLp9cpkvSllr6nXJfM3NEmDkUUVGGI~c-IILjlnyvlZvDxtTErhncN4xFpMfXYADlVnm6~isQ__"
                              alt="girl"
                            />
                            <span className="font-[500]">
                              {valueLocation.geoplugin_city === "Hanoi"
                                ? "Ảnh mẹ"
                                : "Mother's photo"}
                            </span>
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
                <DialogTrigger className="flex items-center w-[140px] md:w-[190px] mt-6 text-[#fff] bg-[#16B6D4] my-auto rounded-3xl md:px-[15px] px-[10px] md:py-[10px] py-[10px] text-center font-[700] md:text-[14px] text-[10px] md:ml-6 justify-center">
                  {valueLocation.geoplugin_city === "Hanoi"
                    ? "Tải Ảnh nữ"
                    : "Upload woman's face"}
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

export default CreateBabyImage;
