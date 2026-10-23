import { useLanguage } from '../i18n/useLanguage';
import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { t } = useLanguage();
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={t("BEST")} text2={t("SELLERS")} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600"> {t("Discover the pieces our customers love most.")} </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item , index)=>(
            <ProductItem key={index} id={item._id} name={item.name} nameFa={item.nameFa} image={item.image} price={item.price}/>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
