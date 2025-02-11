import { memo } from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className=" container my-20 bg-white rounded-md shadow-lg ">
      <div className="p-6">
        <p className=" text-[18.5px] text-[#333333] leading-6 pb-2">
          {t("home.info.desc1")}
        </p>
        <p className=" text-[18.5px] text-[#333333] leading-6 pb-2">
          {t("home.info.desc1_2")}
        </p>
        <p className=" text-[18.5px] text-[#333333] leading-6 pb-3">
          {t("home.info.desc1_3")}
        </p>

        <h3 className="font-bold text-center text-[28px] leading-8 pb-2">
          {t("home.info.title")}
        </h3>

        <ul className="text-[15px] mt-3 px-8">
          <li className="list-disc">{t("home.info.desc2")}</li>
          <li className="list-disc opacity-80">{t("home.info.desc3")}</li>
          <li className="list-disc opacity-70">{t("home.info.desc4")}</li>
          <li className="list-disc opacity-50">{t("home.info.desc5")}</li>
        </ul>
      </div>
      <p className="border-b "></p>
      <div className="py-5  px-5">
        <span className="text-primary cursor-pointer  decoration-clone border-b-2 border-dotted border-primary">
          {t("home.info.span_title")}
        </span>
      </div>
    </div>
  );
};

export default memo(Info);
