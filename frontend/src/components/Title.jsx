import React from "react";
import { useLanguage } from "../i18n/useLanguage";

const Title = ({ text1, text2 }) => {
  const { language } = useLanguage();
  const titles = {
    'درباره ما ما': 'درباره ما',
    'تماس با ما ما': 'تماس با ما',
    'شما سبد خرید': 'سبد خرید شما',
    'من سفارش‌ها': 'سفارش‌های من',
    'ارسال اطلاعات': 'اطلاعات ارسال',
    'پرداخت روش': 'روش پرداخت',
    'سبد خرید مجموع': 'مجموع سبد خرید',
  };
  const title = language === 'fa' && titles[`${text1} ${text2}`];
  return (
    <div className=" inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500 ">
        {title || <>{text1} <span className="text-gray-700 font-medium">{text2}</span></>}
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
