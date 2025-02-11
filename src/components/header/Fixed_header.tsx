import { memo, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import uz from "../../assets/images/uzbekistan.png";
import ru from "../../assets/images/russia.png";
import { FaRegBookmark } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { IoArrowUpSharp } from "react-icons/io5";
import { MdChatBubbleOutline } from "react-icons/md";
import i18n from "../../lang";
import ChatModal from "../modal/Chatmodal";

const FixedHeader = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lang_code") || "ru");
  const changeLang = (selectedLang: string) => {
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang_code", selectedLang);
    setLang(selectedLang);
  };

  useEffect(() => {
    changeLang(lang);
  }, []);

  const handleHome = () => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  return (
    <div className="fixed top-[220px] right-0 h-[860px] w-12 shadow-lg rounded-lg bg-white z-[100] pb-36 pt-4">
      <div className="flex flex-col justify-between items-center w-full h-full">
        <div className="flex flex-col items-center gap-6">
          <div className="pt-2 flex justify-center items-center rounded-lg">
            <div className="flex justify-center items-center ">
              <img src={logo} className="object-cover" alt="Image header" />
            </div>
          </div>
          <div
            onClick={() => changeLang("uz")}
            className={`flex flex-col select-none items-center cursor-pointer p-[6px] ${
              lang === "uz" ? "bg-gray-100 rounded-md " : ""
            }`}
          >
            <img src={uz} alt="Uzbekistan flag" className=" object-cover" />
            <p className="text-xs font-medium">Uz</p>
          </div>
          <div
            onClick={() => changeLang("ru")}
            className={`flex flex-col select-none items-center cursor-pointer gap-1 p-[6px] ${
              lang === "ru" ? "bg-gray-100 rounded-md" : ""
            }`}
          >
            <img src={ru} alt="Russia flag" className="object-cover" />
            <p className="text-xs font-medium">Ru</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-7 text-lg">
            <FaRegBookmark className=" cursor-pointer" />
            <GoShareAndroid className=" cursor-pointer" />
            <button
              onClick={() => setIsChatOpen((prev) => !prev)}
              className="w-9 h-9 rounded-full bg-gray-100 grid place-items-center"
            >
              <MdChatBubbleOutline className="text-[#6AB04C] cursor-pointer" />
            </button>
            {isChatOpen && (
              <ChatModal
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pb-2 gap-3">
          <button>
            <IoIosArrowDropright className="text-[22px]" />
          </button>
          <button
            onClick={handleHome}
            className="w-9 h-9 rounded-full bg-gray-200 grid place-items-center"
          >
            <IoArrowUpSharp className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(FixedHeader);
