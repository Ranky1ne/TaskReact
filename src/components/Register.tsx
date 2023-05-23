import React from 'react'
import Button from "./Button";
import Input from "./Input";
import axios from 'axios';

export default function Register() {
  
  const user = async () => {
    let email = (document.getElementById("reg-login") as HTMLInputElement).value;
    let password = (document.getElementById("reg-password") as HTMLInputElement).value;
    const res = await axios.post("http://localhost:3001/register",{ email, password })
    .then((res) =>{
    console.log(res)
    if (res.status === 400){
      alert("That email already exist")
    }}).catch((error) => {
      console.log(error);
      alert('Something go wrong, try later')
    })
 
  };

  return (
    <div className="bg-white">
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div
className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
aria-hidden="true"
>
<div
  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
  style={{
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  }}
/>
</div> 
<div className="mx-auto mt-1 max-w-2xl py-20 sm:pb-48 lg:pb-56">
<div className="text-center">
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    URL Shortener
  </h1>
  <p className="mt-6 text-3xl leading-8 text-gray-600">
    Registration
  </p>
  <Input  inpType="text" placeholder="Login" id="reg-login" inpClName=" w-60 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-md shadow-gray-300 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
divClName="mt-5 flex items-center justify-center gap-x-6" />
  <Input  inpType="password" placeholder="Password"  id="reg-password" inpClName=" w-60 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-md shadow-gray-300 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
divClName="mt-5 flex items-center justify-center gap-x-6" />
  <Button text="Register" func={user} divClName='mt-10 flex items-center justify-center gap-x-6' btnClName='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' />
  <Button  text="Go Back to Login" url="/" divClName='mt-2 flex items-center justify-center gap-x-6' btnClName=" text-1xl leading-8 text-gray-600" />
</div>
</div>
<div
className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
aria-hidden="true"
>
<div
  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
  style={{
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  }}
/>
</div>
</div>
</div>

  )
}