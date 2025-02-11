import { memo } from "react";
import SectionOne from "./Section-one";
import logo from "../../assets/images/logo.png";
import { FaRegBookmark, FaRegUser, FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { BsCart2 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import country_image from "../../assets/images/country_image.png";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <SectionOne />
      <section className=" py-2 border-b">
        <ul className="flex gap-5 justify-between items-center container">
          <li className=" cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Header logo" />
          </li>
          <li className="w-[680px] h-[50px] relative rounded-lg overflow-hidden">
            <input
              type="text"
              className="w-full h-full outline-none bg-[#EEEEEE] pl-4 pr-10"
              placeholder={t("header.nav.search_title")}
            />
            <FaSearch className="text-primary absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer" />
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 10C2.1875 6.31715 2.1875 4.47573 3.33162 3.33162C4.47573 2.1875 6.31715 2.1875 10 2.1875C13.6828 2.1875 15.5243 2.1875 16.6684 3.33162C17.8125 4.47573 17.8125 6.31715 17.8125 10C17.8125 13.6828 17.8125 15.5243 16.6684 16.6684C15.5243 17.8125 13.6828 17.8125 10 17.8125C6.31715 17.8125 4.47573 17.8125 3.33162 16.6684C2.1875 15.5243 2.1875 13.6828 2.1875 10Z"
                stroke="#333333"
                strokeWidth="1.125"
              />
              <path
                d="M7.65625 12.3438L12.3438 7.65625"
                stroke="#333333"
                strokeWidth="1.125"
                strokeLinecap="round"
              />
              <path
                d="M12.7344 11.9531C12.7344 12.3846 12.3846 12.7344 11.9531 12.7344C11.5216 12.7344 11.1719 12.3846 11.1719 11.9531C11.1719 11.5216 11.5216 11.1719 11.9531 11.1719C12.3846 11.1719 12.7344 11.5216 12.7344 11.9531Z"
                fill="#333333"
              />
              <path
                d="M8.82812 8.04688C8.82812 8.47836 8.47836 8.82812 8.04688 8.82812C7.61541 8.82812 7.26562 8.47836 7.26562 8.04688C7.26562 7.61541 7.61541 7.26562 8.04688 7.26562C8.47836 7.26562 8.82812 7.61541 8.82812 8.04688Z"
                fill="#333333"
              />
            </svg>

            <p>{t("header.nav.bonus")}</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <FaRegBookmark className="text-gray-700" />
            <p>{t("header.nav.saved")}</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8125 17.8125H2.1875"
                stroke="#333333"
                strokeLinecap="round"
              />
              <path
                d="M17.0312 17.8125V11.9531C17.0312 11.3059 16.5066 10.7812 15.8594 10.7812H13.5156C12.8684 10.7812 12.3438 11.3059 12.3438 11.9531V17.8125"
                stroke="#333333"
                strokeWidth="1.2"
              />
              <path
                d="M12.3438 17.8125V4.53125C12.3438 3.4264 12.3437 2.87397 12.0005 2.53073C11.6573 2.1875 11.1048 2.1875 10 2.1875C8.89516 2.1875 8.34272 2.1875 7.99948 2.53073C7.65625 2.87397 7.65625 3.4264 7.65625 4.53125V17.8125"
                stroke="#333333"
                strokeWidth="1.2"
              />
              <path
                d="M7.65625 17.8125V8.04688C7.65625 7.39966 7.13159 6.875 6.48438 6.875H4.14062C3.49341 6.875 2.96875 7.39966 2.96875 8.04688V17.8125"
                stroke="#333333"
                strokeWidth="1.2"
              />
            </svg>
            <p>{t("header.nav.compare")}</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <FaRegUser className="text-gray-700" />
            <p>{t("header.nav.profile")}</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <BsCart2 className="text-gray-800" />
            <p>{t("header.nav.cart")}</p>
          </li>
        </ul>
      </section>

      <section className="mb-2 h-14 shadow-lg">
        <ul className="flex justify-between container items-center h-full">
          <div className="flex gap-4">
            <li className="flex bg-primary cursor-pointer text-white gap-2 justify-center items-center py-2 px-4 rounded-lg font-medium">
              <button>
                <IoMenu className="text-xl" />
              </button>
              <p>{t("header.nav.btn_title")}</p>
            </li>
            <li className="flex justify-center items-center gap-3">
              <img src={country_image} alt="Country image tashkent" />
              <p className="text-[#333333] font-medium">
                {t("header.nav.country_name")}
              </p>
              <span className="text-[#333333] font-medium">+998999999999</span>
            </li>
          </div>

          <div className="flex gap-20">
            <li className="flex justify-center items-center gap-1 cursor-pointer">
              <p>{t("header.nav.clients")}</p>
              <IoIosArrowDown />
            </li>
            <li className="flex justify-center items-center gap-1 cursor-pointer">
              <p>{t("header.nav.service")}</p>
              <IoIosArrowDown />
            </li>
            <li className="flex justify-center items-center gap-1 cursor-pointer">
              <p>{t("header.nav.about")}</p>
              <IoIosArrowDown />
            </li>
            <li className="cursor-pointer">
              <p>{t("header.nav.chat")}</p>
            </li>
          </div>
        </ul>
      </section>
    </>
  );
};

export default memo(Header);
