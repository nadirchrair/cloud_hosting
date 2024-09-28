"use client"
import React from 'react'
import Link from 'next/link'
interface Errorhandle{
    error:Error;
    reset:()=>void;
}
const ErrorPage = ({error,reset}:Errorhandle) => {
  return (
    <>
<h1>
    Something went Wrong
</h1>
<h2>{error.message}</h2>
<button className='btn bg-blue-500 text-white' onClick={()=>reset()}>try a gain</button>
<Link href='/'>Go to home </Link>
    </>
  )
}

export default ErrorPage