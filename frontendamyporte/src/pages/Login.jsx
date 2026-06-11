import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'

export default function Login() {
    const navigate=useNavigate()
    const [error,setError]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            await Login(email,password)
            navigate("/")
        } catch (err) {
            setError(err.response?.data?.message || "login failed" )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        }                                                                                                                                                                                               
    }
  return (                                                                                                                                              

    <div className="min-h-screen bg-linear-to-b from-[#faf6ef] to-[#f0e5d2] items-center justify-center p-6">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transitions={{duration:0.7}}>

      </motion.div>


    </div>                                                                                                                                                                                          
  )                                                                                                                                                                 
}


