import { Link, useParams } from "react-router-dom";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../../components/ui/button";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../hooks/MyContext";
import { itemType } from "../../common/types/Album";
import axios from "axios";
import nProgress from "nprogress";
import ProgressPercentage from "../../components/ProgressPercentage";
const Event = () => {
  const data = useContext(MyContext);
  const [user, setUser] = useState<any>({
    user_name: "",
    email: "",
    link_avatar: "",
    id_user: "",
  });
  const [zipFilePath, setZipFilePath] = useState("");
  const [isTriggerZip, setIsTriggerZip] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isMakeVideo, setIsMakeVideo] = useState(false);
  const [pathVideo, setPathVideo] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const { id } = useParams();
  let listTemp: itemType[] = [];
  let id_user = 0;
  let id_album = "";
  let time = "";
  let img_nam = "";
  let img_nu = "";
  const album = data.find(
    (item) => String(item.list_sukien_image[0].id_sk_swap_album) == id
  );
  if (album) {
    listTemp = album.list_sukien_image;
    console.log(listTemp);
    id_user = listTemp[0].id_user;
    time = listTemp[0].thoigian_sukien;
    img_nam = listTemp[0].link_src_goc.replace(
      "/var/www/build_futurelove",
      "https://photo.gachmen.org/"
    );
    img_nu = listTemp[0].link_tar_goc.replace(
      "/var/www/build_futurelove",
      "https://photo.gachmen.org/"
    );
    id_album = listTemp[0].album.replace("weddingface", "");
  }
  const fetchUser = () => {
    axios
      .get(`https://api.funface.online/profile/${id_user}`)
      .then((res) => setUser(res.data));
  };

  useEffect(() => {
    fetchUser();
  }, [id_user]);

  const handleExportFileZip = async () => {
    nProgress.start();
    const response = await axios.get(
      "https://api.funface.online/get/list_2_image/id_image_swap_all_id_sk",
      {
        params: {
          id_user: user.id_user,
          id_sk: id,
        },
      }
    );
    const link: string = response.data.id_su_kien_swap_image[0].link_da_swap;
    const folderLuu: string = link.replace(
      "https://futurelove.online",
      "/var/www/build_futurelove"
    );
    console.log(folderLuu);

    const partPaths: string[] = folderLuu.split("/");
    partPaths.pop();
    const newFolder: string = partPaths.join("/");
    console.log(newFolder);

    const zipResponse = await axios.get(
      "https://api.funface.online/getdata/Download",
      {
        headers: {
          Authorization:
            "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjI0MTI0MzksInVzZXJuYW1lIjoibnZwLjEzMTIuMjAwMUBnbWFpbC5jb20ifQ.fd98yvgwaYc0Z9s17NPf4O5VVgqXGQzEp-3aHQ8_97A",
        },
        params: {
          device_them_su_kien: user.device_register,
          ip_them_su_kien: user.ip_register,
          id_user: user.id_user,
          folderLuu: newFolder,
        },
      }
    );
    setIsTriggerZip(true);
    console.log(zipResponse.data);
    const pathZip: string = zipResponse.data.replace(
      "/var/www/build_futurelove",
      "photo.fakewedding.online"
    );
    setZipFilePath(pathZip);
    nProgress.done();
  };

  const handleButtonClose = () => {
    setIsTriggerZip(false);
    setIsComplete(false);
    setPathVideo("");
    setZipFilePath("");
  };

  const handleCopy = (value: string) => {
    if (value === "zip") {
      navigator.clipboard.writeText(zipFilePath);
    }
    if (value === "video") {
      navigator.clipboard.writeText(pathVideo);
    }
    setIsCopy(true);
  };

  const handleMakeVideo = async () => {
    nProgress.start();
    setIsMakeVideo(true);
    const response = await axios.get(
      "https://api.funface.online/get/list_2_image/id_image_swap_all_id_sk",
      {
        params: {
          id_user: user.id_user,
          id_sk: id,
        },
      }
    );
    const link: string = response.data.id_su_kien_swap_image[0].link_da_swap;
    console.log(link);

    const folderLuu: string = link.replace(
      "https://futurelove.online",
      "/var/www/build_futurelove"
    );
    console.log(folderLuu);

    const partPaths: string[] = folderLuu.split("/");
    partPaths.pop();
    const newFolder: string = partPaths.join("/");
    const videoResponse = await axios.get(
      "https://api.funface.online/getdata/makevideofromfolder",
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        params: {
          device_them_su_kien: user.device_register,
          ip_them_su_kien: user.ip_register,
          id_user: user.id_user,
          folderLuu: newFolder,
        },
      }
    );
    console.log(videoResponse);

    const linkDataVideo: string = videoResponse.data.replace(
      "/var/www/build_futurelove",
      "photo.fakewedding.online"
    );
    console.log(linkDataVideo);

    setPathVideo(linkDataVideo);
    nProgress.done();
  };

  return (
    <>
      <div className="mx-auto">
        <h2 className="font-bold text-xl mb-3">Author</h2>
        <div className="flex mb-7">
          <div className="w-[80px] h-[80px]">
            {user.link_avatar?.includes("https://photo.gachmen.org") ? (
              <img
                className="h-full w-full object-cover"
                src={`${user.link_avatar?.replace(
                  "/var/www/build_futurelove/",
                  ""
                )}`}
                alt=""
              />
            ) : user.link_avatar !=
              "https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png?fbclid=IwAR3IUCAOlBSThvKijmWXmNuZk-6oEe1q6k-oGQXGr_zd1zWixMIUfAaAyfw" ? (
              <img
                className="h-full w-full object-cover"
                src={`https://photo.gachmen.org/${user.link_avatar?.replace(
                  "/var/www/build_futurelove/",
                  ""
                )}`}
                alt="undefind image"
              />
            ) : (
              <img
                className="h-full w-full object-cover"
                src={`${user.link_avatar}`}
                alt=""
              />
            )}
          </div>
          <div className="block ml-4">
            <Link to={`/profile/${id_user}`}>
              <span className="text-xl hover:underline font-[500] hover:font-bold cursor-pointer">
                {user.user_name}
              </span>
            </Link>{" "}
            <br />
            <span className="italic text-[10px]">{time}</span>
          </div>
        </div>
        <div className="md:h-[350px] h-[250px] flex justify-between items-center md:px-[100px]">
          <div className="md:h-[250px] md:w-[250px] overflow-hidden ">
            <img
              src={img_nam}
              className="md:h-[250px] md:w-[250px] w-[150px] h-[150px] border-8 border-[#33C5E9] object-cover rounded-full"
              alt="111"
            />
          </div>
          <div className="w-[100px] h-[100px] hidden md:block">
            <img src="../../../heart.png" className="object-cover" alt="" />
          </div>
          <div className="md:h-[250px] md:w-[250px] overflow-hidden ">
            <img
              src={img_nu}
              className="md:h-[250px] md:w-[250px] w-[150px] h-[150px] border-8 border-[#ed839e] object-cover rounded-full"
              alt="111"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-2">
            {listTemp?.slice(0, 1).map((image, index) => {
              const src_img = image.link_da_swap;
              return (
                <div
                  className="group relative overflow-hidden flex items-center justify-center"
                  key={index}
                >
                  <div className="w-[450px] h-[630px] ">
                    <div className="">
                      <img
                        src={src_img}
                        className=" absolute group-hover:opacity-50 h-full object-cover w-full"
                        alt={`Image ${index}`}
                        key={index}
                      />
                    </div>
                  </div>
                  <div className="absolute">
                    <Dialog>
                      <Link to={`/upload/${id_album}`}>
                        <Button
                          variant={"default"}
                          className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] rounded-3xl"
                        >
                          Create Now!
                        </Button>
                      </Link>{" "}
                      <br />
                      <DialogTrigger asChild className="">
                        <Button
                          variant={"outline"}
                          className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                            group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl"
                        >
                          View Detail
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px]">
                        <img
                          src={src_img}
                          className="object-contain"
                          alt={`Image ${index}`}
                          key={index}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              );
            })}
            <div className="grid grid-cols-2 gap-2">
              {listTemp?.slice(1, 5).map((image, index) => {
                const src_img = image.link_da_swap;
                return (
                  <div
                    className="group relative overflow-hidden flex items-center justify-center"
                    key={index}
                  >
                    <div className="w-[225px] h-[300px] ">
                      <div className="">
                        <img
                          src={src_img}
                          className=" absolute group-hover:opacity-50 h-full w-full object-cover"
                          alt={`Image ${index}`}
                          key={index}
                        />
                      </div>
                    </div>
                    <div className="absolute">
                      <Link to={`/upload/${id_album}`}>
                        <Button
                          variant={"default"}
                          className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] rounded-3xl"
                        >
                          Create Now!
                        </Button>
                      </Link>{" "}
                      <br />
                      <Dialog>
                        <DialogTrigger asChild className="">
                          <Button
                            variant={"outline"}
                            className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl"
                          >
                            View Detail
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[900px]">
                          <img
                            src={src_img}
                            className="object-contain"
                            alt={`Image ${index}`}
                            key={index}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {listTemp?.slice(5, 49).map((image, index) => {
              const src_img = image.link_da_swap;
              return (
                <div
                  className="group relative overflow-hidden flex items-center justify-center"
                  key={index}
                >
                  <div className="w-[225px] h-[300px] ">
                    <div className="">
                      <img
                        src={src_img}
                        className=" absolute group-hover:opacity-50 h-full w-full object-cover"
                        alt={`Image ${index}`}
                        key={index}
                      />
                    </div>
                  </div>
                  <div className="absolute">
                    <Link to={`/upload/${id_album}`}>
                      <Button
                        variant={"default"}
                        className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] rounded-3xl"
                      >
                        Create Now!
                      </Button>
                    </Link>{" "}
                    <br />
                    <Dialog>
                      <DialogTrigger asChild className="">
                        <Button
                          variant={"outline"}
                          className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl"
                        >
                          View Detail
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px]">
                        <img
                          src={src_img}
                          className="object-contain"
                          alt={`Image ${index}`}
                          key={index}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {listTemp?.map((image, index) => {
              const src_img = image.link_da_swap;
              return (
                <div
                  className="group relative overflow-hidden flex items-center justify-center"
                  key={index}
                >
                  <div className="w-[170px] h-[220px] ">
                    <Link to={`/upload/${id_album}`}>
                      <div className="">
                        <img
                          src={src_img}
                          className=" absolute group-hover:opacity-50 h-full object-cover w-full"
                          alt={`Image ${index}`}
                          key={index}
                        />
                      </div>{" "}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row justify-around mt-5">
          <Button
            variant={"cus3"}
            className="md:w-[430px] h-[50px] ml-4 md:flex"
          >
            See more result
          </Button>
          <Button
            variant={"cus3"}
            className="md:w-[430px] h-[50px] ml-4 md:flex"
            onClick={handleMakeVideo}
          >
            Make a video
          </Button>
          {isMakeVideo && (
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/50">
              <div className="relative bg-white shadow-lg rounded p-6 flex flex-col items-center md:translate-y-[-20%] w-[58%] h-[58%] rounded-[49px] border-solid border-[rgba(0,157,196,0.5)] border-4">
                <div className="md:py-[30px]">
                  <div className="md:mb-11 mb-2">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-[spin_2s_linear_infinite] mx-auto"
                    >
                      <circle
                        cx="26"
                        cy="26"
                        r="23"
                        stroke="#2D2D2D"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-dasharray="1 11 1 11"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <ProgressPercentage
                      onComplete={() => {
                        setIsMakeVideo(false);
                        setIsComplete(true);
                      }}
                    />{" "}
                    <br />
                  </div>
                  <span className="md:text-xl text-[10px] font-bold text-[#409afa]">
                    Please wait some seconds...
                  </span>
                </div>
              </div>
            </div>
          )}
          {isComplete && (
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/50">
              <div className="relative bg-white shadow-lg rounded p-6 flex flex-col items-center md:translate-y-[-30%] w-[58%] h-[40%] rounded-[49px] border-solid border-[rgba(0,157,196,0.5)] border-4">
                <button
                  className="absolute top-[3%] right-[2%] text-white"
                  onClick={handleButtonClose}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 8L8 24"
                      stroke="#222222"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 8L24 24"
                      stroke="#222222"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <span className="flex justify-between text-[13px] bg-[#D9D9D9] w-[100%] p-3 rounded-[20px] text-black mt-10">
                  <div>{pathVideo}</div>
                </span>
                <Button
                  variant={"cus3"}
                  className="mt-8"
                  onClick={() => handleCopy("video")}
                >
                  {isCopy ? <>Copied</> : <>Copy link</>}
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-around ">
          <Button
            variant={"cus2"}
            className="relative"
            onClick={handleExportFileZip}
          >
            <div className="absolute left-3">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.38354 1L21.3835 21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.84473 4.84615L12.0976 2.59312C14.2218 0.46896 17.6657 0.46896 19.79 2.59312C21.9141 4.7173 21.9141 8.16125 19.79 10.2854L17.537 12.5384"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9218 17.1537L10.669 19.4068C8.54481 21.5309 5.10085 21.5309 2.97667 19.4068C0.852502 17.2826 0.852504 13.8386 2.97667 11.7144L5.22953 9.46143"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="absolute right-11 underline italic text-base font-bold">
              Download here
            </div>
          </Button>
          {isTriggerZip ? (
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/50">
              <div className="relative bg-white shadow-lg rounded p-6 flex flex-col items-center md:translate-y-[-30%] w-[58%] h-[40%] rounded-[49px] border-solid border-[rgba(0,157,196,0.5)] border-4">
                <button
                  className="absolute top-[3%] right-[2%] text-white"
                  onClick={handleButtonClose}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 8L8 24"
                      stroke="#222222"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 8L24 24"
                      stroke="#222222"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <span className="flex justify-between text-[13px] bg-[#D9D9D9] w-[100%] p-3 rounded-[20px] text-black mt-10">
                  <div>
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.61133 1.93347L20.8617 18.2084"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75537 5.06326L11.9238 3.22987C13.9683 1.50134 17.2831 1.50134 19.3278 3.22987C21.3724 4.95842 21.3724 7.76092 19.3278 9.48946L17.1594 11.3228"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.7171 15.0786L10.5487 16.912C8.50417 18.6405 5.1893 18.6405 3.14474 16.912C1.10019 15.1835 1.10019 12.3809 3.14474 10.6524L5.31316 8.81897"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>{zipFilePath}</div>
                </span>
                <Button
                  variant={"cus3"}
                  className="mt-8"
                  onClick={() => handleCopy("zip")}
                >
                  {isCopy ? <>Copied</> : <>Copy link</>}
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default Event;
