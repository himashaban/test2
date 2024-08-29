import axios from 'axios'
import {  useFormik } from 'formik/dist/formik.cjs.production.min'
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import style from '../template/register.module.css'
 

export default function Register() {
let navigate=useNavigate();
async function handleRigester(formValues){
  let{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formValues);
  console.log(data);
  
  if(data.message === 'success'){
    navigate('/home')
  }
}
function myValidation(value){
let Errors={};
if(!value.name){
  Errors.name='Name is required'
}
else if(!/^[A-Z][a-z]{3,5}$/.test(value.name)){
  Errors.name='Name should start with uppercase and contain 4 to 6 characters'
}

if(!value.phone){
  Errors.phone='Phone is required'
}

else if(!/^\+[0-9]{1,3}\s[0-9]{10}$/.test(value.phone)){
  Errors.phone='Invalid phone number'
}

if(!value.email){
  Errors.email='Email is required'
}

else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)){
  Errors.email='Invalid email'
}
return Errors;
}

  let formik=useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassowrd:''

    },validate:myValidation,
    onSubmit:handleRigester
  })
  return <>
  <div className="py-7 max-w-xl mx-auto">
    <h2 className='text-3xl font-serif mb-6 text-green-600'>register now</h2>
<form onSubmit={formik.handleSubmit} className="mx-auto ">

  <div className="relative z-0 w-full mb-5 group">
      <input id='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your name </label>
  </div>
  {formik.errors.name?<div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  {formik.errors.name}
</div>:''}
    <div className="relative z-0 w-full mb-5 group">
      <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="text" name="email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your Email address</label>
  </div>
   <div className="relative z-0 w-full mb-5 group">
      <input id='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="number" name="phone"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your phone number</label>
  </div>
   <div className="relative z-0 w-full mb-5 group">
      <input id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">enter your password</label>
  </div>
     <div className="relative z-0 w-full mb-5 group">
      <input id='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" name="rePassword"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">confirm your password</label>
  </div>
  
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

 </form>
  </div>
  
  
  
  </>
}
