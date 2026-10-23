import { useLanguage } from '../i18n/useLanguage';
import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div>
       <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={t("CONTACT")} text2={t("US")}/>
       </div>

       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]'  src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600 '>{t("Our Store")}</p>
              <p className='text-gray-500 '>{t("6 Nasrat Abad Street")} <br /> {t("Mazar-e-Sharif , Afghanistan")}</p>
              <p className='text-gray-500'>{t("Tel:+93 79 557 1938")} <br /> Email: sayedtayebpuya2024@gmail.com</p>
              <p className='font-semibold text-xl text-gray-600'>{t("Careers at E-commerce")}</p>
              <p className='text-gray-500 '>{t("Know more about our teams & job openings")}</p>
              <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>{t("Explore Jobs")}</button>
            </div>
       </div>

       <NewsletterBox />
    </div>
  )
}

export default Contact
