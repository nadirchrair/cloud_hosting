"use client"
import React,{useState} from 'react'
import {  toast } from 'react-toastify';

const RegisterForm = () => {
    const [usename,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        if(usename ==="" && email === "" && password==="") return toast.error("please entre data");
        else {
            toast.done("be succesufl");

        }

    }
  return (
    <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
        <input  placeholder='entre votre email' type='email' value={usename} onChange={(e)=>setUsername(e.target.value)} />
        <input  placeholder='entre votre email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input  placeholder='entre votre mot de passe' type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>

        </form>

    </div>
  )
}

export default RegisterForm