import { memo } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary">
      <div className="container grid grid-cols-4 py-6">
        <div className="text-white flex flex-col gap-4">
          <p className="uppercase pb-2">{t("footer.about_company.title")}</p>
          <p className=" cursor-pointer hover:underline">
            {t("footer.about_company.desc1")}
          </p>
          <p className=" cursor-pointer hover:underline">
            {t("footer.about_company.desc2")}
          </p>
          <p className=" cursor-pointer hover:underline">
            {t("footer.about_company.desc3")}
          </p>
          <p className=" cursor-pointer hover:underline">
            {t("footer.about_company.desc4")}
          </p>
          <p className=" cursor-pointer hover:underline">
            {t("footer.about_company.desc5")}
          </p>
        </div>
        <div className="text-white flex flex-col gap-4">
          <p className="uppercase pb-2">{t("footer.support.title")}</p>
          <p className="cursor-pointer hover:underline">
            {t("footer.support.desc1")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.support.desc2")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.support.desc3")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.support.desc4")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.support.desc5")}
          </p>
        </div>
        <div className="text-white flex flex-col gap-4">
          <p className="uppercase pb-2">{t("footer.projects.title")}</p>
          <p className="cursor-pointer hover:underline">
            {t("footer.projects.desc1")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.projects.desc2")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.projects.desc3")}
          </p>
        </div>
        <div className="text-white flex flex-col gap-4">
          <p className="uppercase pb-2">{t("footer.office.title")}</p>
          <p className="cursor-pointer hover:underline">
            {t("footer.office.desc1")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.office.desc2")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.office.desc3")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.office.desc4")}
          </p>
        </div>
      </div>
      <div className="container flex justify-between h-[130px] items-center">
        <div className="text-white">
          <p>© 2022–2025 sectortechnology.uz</p>
        </div>
        <div className="flex gap-[115px] text-white">
          <FaInstagram className="cursor-pointer hover:underline" />
          <FaTelegram className="cursor-pointer hover:underline" />
          <FaFacebook className="cursor-pointer hover:underline" />
        </div>
        <div className="text-white flex flex-col gap-3">
          <p className="cursor-pointer hover:underline">
            {t("footer.privacy")}
          </p>
          <p className="cursor-pointer hover:underline">
            {t("footer.personal")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
