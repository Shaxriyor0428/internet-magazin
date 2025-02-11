import { memo } from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight, MdOutlineWatchLater } from "react-icons/md";
import Sidebar from "../../components/sidebar/Sidebar";
import { NEWS } from "../../static";
import { FaRegBookmark, FaRegCopy } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const News = () => {
  const { t } = useTranslation();
  const SIDEBAR_ITEMS1 = [
    {
      id: 1,
      title: t("home.news.left_sidebar.item2.title1"),
    },
    {
      id: 2,
      title: t("home.news.left_sidebar.item2.title2"),
    },
  ];

  const SIDEBAR_ITEMS2 = [
    {
      id: 1,
      title: t("home.news.left_sidebar.item3.title1"),
    },
    {
      id: 2,
      title: t("home.news.left_sidebar.item3.title2"),
    },
    {
      id: 3,
      title: t("home.news.left_sidebar.item3.title3"),
    },
    {
      id: 4,
      title: t("home.news.left_sidebar.item3.title4"),
    },
    {
      id: 5,
      title: t("home.news.left_sidebar.item3.title5"),
    },
    {
      id: 6,
      title: t("home.news.left_sidebar.item3.title6"),
    },
    {
      id: 7,
      title: t("home.news.left_sidebar.item3.title7"),
    },
    {
      id: 8,
      title: t("home.news.left_sidebar.item3.title8"),
    },
  ];

  return (
    <div className="flex gap-3 min-h-screen container ">
      <div className="w-[360px]  rounded-lg shadow-md bg-gray-50">
        <section className="rounded-lg bg-white mb-10">
          <div className="text-[#555555] text-[26px] px-5 py-5 flex justify-start items-center gap-1">
            {t("home.news.left_sidebar.item1.subject")}
            <MdKeyboardArrowRight className="text-[#555555] cursor-pointer translate-y-1 text-[20px]" />
          </div>
          <div className="px-5 h-[120px] bg-gray-50 flex flex-col justify-center gap-3">
            <p>{t("home.news.left_sidebar.item1.title1")}</p>
            <span className="flex justify-start items-center gap-2 text-[#A3A3A3]">
              <MdOutlineWatchLater />
              <span>18 апреля 2024 г.</span>
            </span>
          </div>
          <div className="px-5 h-[120px]  flex flex-col justify-center gap-3">
            <p>{t("home.news.left_sidebar.item1.title")}</p>
            <span className="flex justify-start items-center gap-2 text-[#A3A3A3]">
              <MdOutlineWatchLater />
              <span>29 марта 2024 г.</span>
            </span>
          </div>
          <div className="h-[6px] bg-primary"></div>
        </section>

        <Sidebar
          data={SIDEBAR_ITEMS1}
          subject={t("home.news.left_sidebar.item2.subject")}
        />
        <Sidebar
          data={SIDEBAR_ITEMS2}
          subject={t("home.news.left_sidebar.item3.subject")}
        />
      </div>
      <div className="flex-1 rounded-lg shadow-md px-5 pb-12">
        <div className="flex items-center justify-center h-14">
          <ul className="w-[1042px] flex items-center justify-between">
            <li className="border-b-[5px] border-b-primary cursor-pointer py-2">
              <span className="font-medium text-[16px] text-[#333333] ">
                {t("home.news.right_sidebar.menu.advice")}
              </span>
            </li>
            <li className="border-b-[5px] border-b-transparent py-2 hover:border-b-primary cursor-pointer">
              <span className="font-medium text-[16px] text-[#333333] ">
                {t("home.news.right_sidebar.menu.news")}
              </span>
            </li>
            <li className="border-b-[5px] border-b-transparent py-2 hover:border-b-primary cursor-pointer">
              <span className="font-medium text-[16px] text-[#333333] ">
                {t("home.news.right_sidebar.menu.bonus")}
              </span>
            </li>
            <li className="border-b-[5px] border-b-transparent py-2 hover:border-b-primary cursor-pointer">
              <span className="font-medium text-[16px] text-[#333333] ">
                {t("home.news.right_sidebar.menu.product_with_discount")}
              </span>
            </li>
            <li className="border-b-[5px] border-b-transparent py-2 hover:border-b-primary cursor-pointer">
              <span className="font-medium text-[16px] text-[#333333] ">
                {t("home.news.right_sidebar.menu.famous")}
              </span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-5 pt-2 ">
          {NEWS.map((item) => (
            <div
              key={item.id}
              className="p-3 border rounded-lg overflow-hidden "
            >
              <div className="min-h-[235px]">
                <img
                  className="w-full h-auto object-cover bg-center bg-no-repeat"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex items-start mt-2 mb-6 min-h-[120px]">
                <span className="text-[#3B3B3B] w-[90%]">{item.desc}</span>
                <FaRegCopy className="text-[#C4C4C4] translate-y-1 cursor-pointer" />
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-[#3B3B3B]">{item.sku}</span>
                <FaRegCopy className="text-[#C4C4C4] translate-y-1 cursor-pointer" />
              </div>
              <div className="mb-8">
                <span className="text-primary">В наличии: {item.stok} уп</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[20px]">
                  {new Intl.NumberFormat("ru-RU", { useGrouping: true }).format(
                    item.price
                  )}{" "}
                  сум
                </p>
                <FaRegBookmark className="" />
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
                <div className="h-8 w-8 rounded-full bg-gray-100 grid place-items-center">
                  <BsCart2 className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(News);
