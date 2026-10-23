import { useLanguage } from '../i18n/useLanguage';
import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const { t } = useLanguage();
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameFa, setNameFa] = useState("");
  const [descriptionFa, setDescriptionFa] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);


  const onSubmitHandler = async (e) =>{
      e.preventDefault();

      try{
         const formData = new FormData()

         formData.append("name" , name)
         formData.append("description" , description)
         formData.append("nameFa", nameFa)
         formData.append("descriptionFa", descriptionFa)
         formData.append("price" , price)
         formData.append("category" , category)
         formData.append("subCategory" , subCategory)
         formData.append("bestSeller" , bestseller ? "true" : "false")
         formData.append("sizes" , JSON.stringify(sizes))

         image1 && formData.append("image1" , image1)
         image2 && formData.append("image2" , image2)
         image3 && formData.append("image3" , image3)
         image4 && formData.append("image4" , image4)

         const response = await axios.post(backendUrl + "/api/product/add",formData , {headers:{token}})

         if (response.data.success) {
            toast.success(t(response.data.message))
            // Reset form
            setName("")
            setDescription("")
            setNameFa("")
            setDescriptionFa("")
            setPrice("")
            setCategory("Men")
            setSubCategory("Topwear")
            setBestseller(false)
            setSizes([])
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
         } else {
            toast.error(t(response.data.message))
         }
      }
      catch(error){
         console.log(error)
         toast.error(t(error.message))
      }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">{t("Upload Image")}</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">{t("Product Name")}</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder={t("Type Here")}
          required
          onChange={(e)=>setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="w-full">
        <p className="mb-2">{t("Product Description")}</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder={t("Write content Here")}
          required
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="w-full">
        <label htmlFor="nameFa" className="block mb-2">{t('Product Name (Persian)')}</label>
        <input id="nameFa" dir="rtl" lang="fa" value={nameFa} onChange={(e) => setNameFa(e.target.value)} placeholder={t('Optional Persian translation')} className="w-full max-w-[500px] px-3 py-2" />
      </div>
      <div className="w-full">
        <label htmlFor="descriptionFa" className="block mb-2">{t('Product Description (Persian)')}</label>
        <textarea id="descriptionFa" dir="rtl" lang="fa" value={descriptionFa} onChange={(e) => setDescriptionFa(e.target.value)} placeholder={t('Optional Persian translation')} className="w-full max-w-[500px] px-3 py-2" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2 ">{t("Product Category")}</p>
          <select onChange={(e)=> setCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Men">{t("Men")}</option>
            <option value="Women">{t("Women")}</option>
            <option value="Kids">{t("Kids")}</option>
          </select>
        </div>

        <div>
          <p className="mb-2 ">{t("Sub Category")}</p>
          <select onChange={(e)=> setSubCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Topwear">{t("Topwear")}</option>
            <option value="Bottomwear">{t("Bottomwear")}</option>
            <option value="Winterwear">{t("Winterwear")}</option>
          </select>
        </div>

        <div>
          <p className="mb-2">{t("Product Price")}</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="25"
            onChange={(e)=> setPrice(e.target.value)}
          />
        </div>
      </div>

      <div>
        <p className="mb-2">{t("Product Sizes")}</p>
        <div className="flex gap-3">
          <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter(item => item!== "S") : [...prev , "S"])} >
            <p className={`${sizes.includes("S") ? 'bg-pink-100' : 'bg-slate-200' } px-3 py-1 cursor-pointer `}>S</p>
          </div>

          <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter(item => item!== "M") : [...prev , "M"])}>
            <p className={` px-3 py-1 cursor-pointer ${sizes.includes('M') ? 'bg-pink-100' : 'bg-slate-200' }`}>M</p>
          </div>

          <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter(item => item!== "L") : [...prev , "L"])}>
            <p className={` px-3 py-1 cursor-pointer ${sizes.includes('L') ? 'bg-pink-100' : 'bg-slate-200' }`}>L</p>
          </div>

          <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter(item => item!== "XL") : [...prev , "XL"])}>
            <p className={` px-3 py-1 cursor-pointer ${sizes.includes('XL') ? 'bg-pink-100' : 'bg-slate-200' }`}>XL</p>
          </div>

          <div onClick={()=> setSizes(prev => prev.includes("XXL") ? prev.filter(item => item!== "XXL") : [...prev , "XXL"])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('XXL') ? 'bg-pink-100' : 'bg-slate-200' }`}>XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer " htmlFor="bestseller"> {t("Add to bestseller")} </label>
      </div>

      <button type="submit" className="w-28 cursor-pointer py-3 mt-4 bg-black text-white"> {t("ADD")} </button>
    </form>
  );
};

export default Add;