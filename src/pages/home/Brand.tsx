import { memo } from "react";
import { useTranslation } from "react-i18next";
import { BRANDS } from "../../static";
import { FaArrowRightLong } from "react-icons/fa6";

const Brand = () => {
  const { t } = useTranslation();
  const brand_items = BRANDS.map((brand) => (
    <div key={brand.id} className="bg-white shadow-md flex justify-center items-center">
      <div>
        <img src={brand.image} alt="brand images" className="bg-cover" />
      </div>
    </div>
  ));
  return (
    <div className=" container my-10">
      <h1 className="font-bold text-[32px] mb-5">{t("home.brand_name")}</h1>
      <div className="grid grid-cols-6 gap-10">
        {brand_items}
        <div className=" justify-center items-center h-full py-4">
          <button className="relative text-primary cursor-pointer flex items-center gap-2">
            {t("home.btn_name")}
            <FaArrowRightLong className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Brand);
