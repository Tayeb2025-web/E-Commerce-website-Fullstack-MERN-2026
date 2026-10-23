import { useLanguage } from '../i18n/useLanguage';
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600"> {t("Discover clothing for everyday comfort and personal style. Shop our latest collections with confidence.")} </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">{t("COMPANY")}</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>{t("Home")}</li>
            <li>{t("About us")}</li>
            <li>{t("Delivery")}</li>
            <li>{t("Privacy Policy")}</li>
          </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">{t("GET IN TOUCH")}</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+93 79 557 1938</li>
              <li>sayedtayebpuya2024@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
         <hr />
         <p className="py-5 text-sm text-center">{t("Copyright 2026@ Sayed Tayeb Puya - All Right Reserved.")}</p>
      </div>
    </div>
  );
};

export default Footer;
