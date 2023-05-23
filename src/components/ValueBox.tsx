import React from 'react';
import Input from './Input';
import Button from './Button';

export default function ValueBox() {
  return (
    <div className="mx-auto mt-1 max-w-2xl py-20 sm:pb-48 lg:pb-56">
<div className="text-center">
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    URL Shortener
  </h1>
  <p className="mt-6 text-3xl leading-8 text-gray-600">
    Login
  </p>
  <Input  inpType="text" placeholder="Login" id="inpLogin" inpClName=" w-60 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-md shadow-gray-300 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
divClName="mt-5 flex items-center justify-center gap-x-6" />
  <Input  inpType="password" placeholder="Password"  id="inpPassword" inpClName=" w-60 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-md shadow-gray-300 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
divClName="mt-5 flex items-center justify-center gap-x-6" />
  <Button text="Login" url="/login" divClName='mt-10 flex items-center justify-center gap-x-6' btnClName='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' />
  <Button  text="Sign Up" url="/register" divClName='mt-2 flex items-center justify-center gap-x-6' btnClName=" text-1xl leading-8 text-gray-600" />
</div>
</div>
  )
}
