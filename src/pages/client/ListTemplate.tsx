import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../../components/ui/button";
import { LanguageContext } from "../../hooks/languageContext";
type listItemType = {
  id: number;
  mask: string;
  thongtin: string;
  image: string;
  dotuoi: string;
  IDCategories: number;
};
const ListTemplate = () => {
  const valueLocation = useContext(LanguageContext);
  const { id } = useParams();
  const navi = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navi("/");
  };
  const [listTemp, setListTemp] = useState<listItemType[] | []>([]);
  useEffect(() => {
    axios
      .get(
        `https://api.funface.online/get/list_image_wedding/1?album=${id}`
      )
      .then((res) => {
        setListTemp(res.data.list_sukien_video);
      });
  }, []);
  const [checkUser, setCheckUser] = useState(false);
  const [user, setUser] = useState({ id_user: "", link_avatar: "" });
  useEffect(() => {
    setUser(JSON.parse(String(localStorage.getItem("user"))));
    if (localStorage.getItem("user")) setCheckUser(true);
  }, []);
  return (
    <>
      <div className="bg-[#F2FDFF]">
        <header className="bg-white md:w-[1440px]">
          <div className="mx-auto">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <Link to={"/"}>
                  <img src="img\logo.png" alt="" />
                </Link>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    {checkUser && (
                      <li>
                        <Link
                          className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']"
                          to={`/profile/${user.id_user}`}
                        >
                          {" "}
                          My Profile{" "}
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']"
                        to="/listvideotemplate"
                      >
                        {" "}
                        Swap Video{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']"
                        to="/timeline"
                      >
                        {" "}
                        Timeline{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']"
                        to="/funnyvideo"
                      >
                        {" "}
                        Funny Video{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']"
                        to="/aboutus"
                      >
                        {" "}
                        About Us{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']"
                        to="/policy"
                      >
                        {" "}
                        Policy
                      </Link>
                    </li>
                    {checkUser ? (
                      <li>
                        <Link to={`/profile/edit/${user?.id_user}`}>
                          <div className="w-[40px] h-[40px] rounded-[60px] overflow-hidden">
                            {user.link_avatar.includes(
                              "https://photo.gachmen.org"
                            ) ? (
                              <img
                                className="h-full w-full object-cover"
                                src={`${user.link_avatar.replace(
                                  "/var/www/build_futurelove/",
                                  ""
                                )}`}
                                alt=""
                              />
                            ) : user.link_avatar !=
                              "https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png?fbclid=IwAR3IUCAOlBSThvKijmWXmNuZk-6oEe1q6k-oGQXGr_zd1zWixMIUfAaAyfw" ? (
                              <img
                                className="h-full w-full object-cover"
                                src={`https://photo.gachmen.org/${user.link_avatar.replace(
                                  "/var/www/build_futurelove/",
                                  ""
                                )}`}
                                alt=""
                              />
                            ) : (
                              <img
                                className="h-full w-full object-cover"
                                src={`${user.link_avatar}`}
                                alt=""
                              />
                            )}
                          </div>
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to={`/signin`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="gray"
                            className="w-[40px] h-[40px]"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
                <div className="md:hidden mr-4">
                  <Dialog>
                    <DialogTrigger>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </DialogTrigger>
                    <DialogContent className="mt-10 items-start justify-start">
                      <ul className="h-[90vh] pt-5">
                        <li className="">
                          {checkUser ? (
                            <Link
                              to={`/profile/edit/${user?.id_user}`}
                              className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                            >
                              {valueLocation.geoplugin_city === "Hanoi"
                                ? "Hồ sơ"
                                : "Profile"}
                            </Link>
                          ) : (
                            <Link
                              to={`/signin`}
                              className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                            >
                              {valueLocation.geoplugin_city === "Hanoi"
                                ? "Đăng nhập"
                                : "Sign In"}
                            </Link>
                          )}
                        </li>
                        <li className="mt-3">
                          <Link
                            to={``}
                            className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                          >
                            {valueLocation.geoplugin_city === "Hanoi"
                              ? "Dịch vụ"
                              : "Service"}
                          </Link>
                        </li>
                        <li className="mt-3">
                          <Link
                            to={``}
                            className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                          >
                            {valueLocation.geoplugin_city === "Hanoi"
                              ? "Chúng tôi"
                              : "About Us"}
                          </Link>
                        </li>
                        <li className="mt-3">
                          <Link
                            to={`/timeline`}
                            className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                          >
                            {valueLocation.geoplugin_city === "Hanoi"
                              ? "Dòng thời gian"
                              : "Timeline"}
                          </Link>
                        </li>
                        <li className="mt-3">
                          <Link
                            to={`/funnyvideo`}
                            className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                          >
                            {valueLocation.geoplugin_city === "Hanoi"
                              ? "Video vui nhộn"
                              : "Funny video"}
                          </Link>
                        </li>
                        <li className="mt-3">
                          <Link
                            to={`/listvideotemplate`}
                            className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                          >
                            {valueLocation.geoplugin_city === "Hanoi"
                              ? "Video hoán đổi"
                              : "Swap video"}
                          </Link>
                        </li>
                        {checkUser && (
                          <li className="mt-3">
                            <Link
                              to={`/profile/${user.id_user}`}
                              className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 "
                            >
                              {valueLocation.geoplugin_city === "Hanoi"
                                ? "Hồ sơ"
                                : "Profile"}
                            </Link>
                          </li>
                        )}
                        {checkUser ? (
                          <li>
                            <span
                              onClick={() => {
                                confirm("Are you fucking sure?") && logOut();
                              }}
                              className="flex cursor-pointer items-center p-2 mt-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                              <span className="ms-2 flex">
                                {valueLocation.geoplugin_city === "Hanoi"
                                  ? "Đăng xuất"
                                  : "Log out"}{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6 ml-2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                                  />
                                </svg>
                              </span>
                            </span>
                          </li>
                        ) : (
                          <></>
                        )}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="pb-[70px] pt-[40px]">
          <Link to={"/"} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#808080"
              className="w-10 h-10 float-right mr-[40px] mt-[-10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
          <h1 className="font-[600] text-[40px] leading-[48px] ml-[210px] mb-[30px] mt-[10px]"></h1>
          <div className="mx-auto p-[24px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring gap-8 items-center justify-center mt-4">
            <div className="">
              <h1 className="font-[600] text-[40px] leading-[48px] text-center mb-[10px] mt-[10px]">
                Wedding Template {id}
              </h1>
              <h5 className="font-[400] italic md:text-[20px] text-[16px] leading-[20px] text-center mb-[30px] mt-[10px]">
                Choose a template that's right for you to start creating these
                once-in-a-lifetime images
              </h5>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-2">
                  {listTemp.slice(0, 1).map((image, index) => {
                    const src_img = image.image;
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
                            <Link to={`/upload/${id}`}>
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
                                className=""
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
                    {listTemp.slice(1, 5).map((image, index) => {
                      const src_img = image.image;
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
                            <Link to={`/upload/${id}`}>
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
                                  className=""
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
                  {listTemp.slice(5, 49).map((image, index) => {
                    const src_img = image.image;
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
                          <Link to={`/upload/${id}`}>
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
                                className=""
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
                  {listTemp.map((image, index) => {
                    const src_img = image.image;
                    return (
                      <div
                        className="group relative overflow-hidden flex items-center justify-center"
                        key={index}
                      >
                        <div className="w-[170px] h-[220px] ">
                          <Link to={`/upload/${id}`}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListTemplate;
