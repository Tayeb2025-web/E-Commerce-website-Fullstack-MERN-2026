import { useLanguage } from '../i18n/useLanguage';
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={t("ABOUT")} text2={t("US")} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p> {t("We bring together clothing for women, men and children in one convenient store.")} </p>
          <p> {t("Browse our collections, choose your size and have your order delivered to your door.")} </p>
          <b className="text-gray-800">{t("Our Mission")}</b>
          <p> {t("Our mission is to make finding and ordering your favourite clothing simple and enjoyable.")} </p>
        </div>
      </div>

      <div className="text-xl py-4 ">
        <Title text1={t("WHY")} text2={t("CHOOSE US")} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{t("Quality Assurance:")}</b>
          <p className="text-gray-600"> {t("We carefully select products with quality and comfort in mind.")} </p>
        </div>

        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{t("Convenience:")}</b>
          <p className="text-gray-600"> {t("Find your style, select your size and order in a few simple steps.")} </p>
        </div>

        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{t("Exceptional Customer Service:")}</b>
          <p className="text-gray-600"> {t("Our support team is here to help with your shopping and orders.")} </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
