import { useLanguage } from '../i18n/useLanguage';
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify';
import { currency } from '../App';


const List = ({token}) => {
  const { t, localizeProduct } = useLanguage();

  const [list , setList] = useState([]);

  const fetchList = async () => {
     try {
      const response = await axios.get(backendUrl + '/api/product/list')
       if(response.data.success) {
         setList(response.data.products);
      } else{
        toast.error(t(response.data.message))
      }
      
     } catch (error) {
      console.log(error);
      toast.error(t(error.message))
      
     }
  }

   const removeProduct = async (id) => {
     try {
      const response = await axios.post(backendUrl+'/api/product/remove' , {id} , {headers:{token}});
   
      if (response.data.success) {
        toast.success(t(response.data.message));
        await fetchList();
      } else {
        toast.error(t(response.data.message));
      }
   
    } catch (error) {
      console.log(error);
      toast.error(t(error.message))
     }
   }
  
  useEffect(()=>{
       fetchList()
  } , [])

  return (
    <>
       <p className='mb-2 '>{t("All Products List")}</p>
       <div className='flex flex-col gap-2'>
         {/* ----------List Table Title --------- */}

         <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border bg-gray-100 text-sm py-1 px-2'>
           <b>{t("Image")}</b>
           <b>{t("Name")}</b>
           <b>{t("Category")}</b>
           <b>{t("Price")}</b>
           <b className='text-center'>{t("Action")}</b>
         </div>
         
         {/* ----------Product List -------------- */}

         {
          list.map((item , index)=>(
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-2 border text-sm' key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{localizeProduct(item)}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className='text-end text-white rounded-sg bg-red-500 md:text-center text-lg cursor-pointer'>X</p>
            </div>
          ))
         }
       </div>

    </>
  )
}

export default List
