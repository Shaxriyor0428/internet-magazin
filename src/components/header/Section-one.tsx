import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../lang";

const SectionOne = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("lang_code") || "ru";
    i18n.changeLanguage(lang);
  }, []);

  return (
    <div className="bg-primary min-h-10 text-center grid place-items-center">
      <p className="text-white cursor-pointer">
        {t("header.sectionOne.title")}{" "}
        <span className="underline">{t("header.sectionOne.title2")}</span>
      </p>
    </div>
  );
};

export default memo(SectionOne);
