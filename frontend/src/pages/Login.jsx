import { useLanguage } from '../i18n/useLanguage';
import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import axios from 'axios';
import {toast} from 'react-toastify'

const Login = () => {
  const { t } = useLanguage();

  const [currentState , setCurrentState] = useState('Login');
  const {token , setToken , navigate, backendUrl} = useContext(ShopContext)
  const [name , setName] = useState('')
  const [password , setPassword] = useState('')
  const [email , setEmail] = useState('')

  const onSubmitHandler = async (event) => {
     event.preventDefault();
     try {
      if(currentState==='Sign Up'){
          const response = await axios.post(backendUrl+'/api/user/register' , {name , email , password})
          
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token' , response.data.token)
          } else{
            toast.error(t(response.data.message))
      }
        } else{
          const response = await axios.post(backendUrl+'/api/user/login' , {email , password})
          if(response.data.success){
            setToken(response.data.token)
             localStorage.setItem('token' , response.data.token)
          } else{
            toast.error(t(response.data.message))
           }
        }
     } catch (error) {
      console.log(error);
      toast.error(t(error.message))
      
     }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' >
       <div className='inline-flex items-center gap-2 mb-2 mt10'>
          <p className='prata-regular text-3xl' > {t(currentState)}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
       </div>
       {currentState === 'Sign Up' ? (<input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder={t("Name")} required /> ) : '' }
       <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder={t("Email")} required />
       <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder={t("Password")} required />
       <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'> {t("Forgot your password?")}</p>
        {
          currentState === 'Login' ?
           <p  onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>{t("Create acount")}</p> :
           <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>{t("Login here")}</p>
        }
       </div>
       <button className= 'cursor-pointer bg-black text-white font-light px-8 py-2 mt-4'>
        {t(currentState === 'Login' ? 'Sign In' : 'Sign Up')}</button>
    </form>
  )
}

export default Login
