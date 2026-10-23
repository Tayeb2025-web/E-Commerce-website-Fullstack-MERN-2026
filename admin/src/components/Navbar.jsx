import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/useLanguage';
import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  const { t } = useLanguage();
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10% , 80px)]' src={assets.logo} alt="" />
      <div className="flex items-center gap-3">
      <LanguageSwitcher />
      <button onClick={()=> setToken('')} className='bg-gray-600 text-white sm:py-2 cursor-pointer sm:px-7 px-5 py-2 text-xs sm:text-sm rounded-full'>{t("Logout")}</button>
      </div>
    </div>
  )
}

export default Navbar