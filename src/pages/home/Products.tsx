import { memo } from "react";
import { PRODUCTS } from "../../static";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const product_items = PRODUCTS.map((product) => (
    <div
      key={product.id}
      className="flex flex-col gap-2 rounded-lg shadow-md relative overflow-hidden pb-3"
    >
      <div className="relative">
        <img
          src={product.image}
          alt=""
          className=" object-cover"
        />
      </div>
      <div className="bg-[#0054AE1F] w-[150px] h-[150px] rounded-full absolute -left-[30px] -top-[17px]"></div>
      <div className="relative z-10 pl-4">
        <p title={product.title} className="font-semibold text-lg line-clamp-2 min-h-16">
          {product.title}
        </p>
        <p className="text-[#A3A3A3]">{product.stock} товаров</p>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <h1 className="font-bold text-[32px] mb-5">{t("home.category_name")}</h1>
      <div className="grid grid-cols-6  gap-5">
        {product_items}
      </div>
    </div>
  );
};

export default memo(Products);
