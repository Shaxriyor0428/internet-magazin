import { memo } from "react";
import banner_image from "../../assets/images/bannerphoto.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className=" container my-12 relative">
      <img src={banner_image} alt="" />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[96px] text-[#A3A3A3]">
        {t("home.hero.banner_title")}
      </p>
    </div>
  );
};

export default memo(Hero);
