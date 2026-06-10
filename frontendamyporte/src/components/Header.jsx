import React from 'react';
import {Link,useLocation} from "react-router-dom";
import {useContext,useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {HiMenu,HiX} from "react-icons/hi";
import {Bell,Rocket,User,DoorOpen} from "lucide-react";


 function Header() {
    // const location=useLocation();
    // // const[];
    // const navLinks=[
    //     {name:"Home",path:"/"},
    //     {name:"Invoices",path:"/invoices"},
    //     {name:"Customers",path:"/customers"},
    //     {name:"Reports",path:"reports"},
    //     {name:"Notifications",path:"/notifications"},
    //     {name:"Products",path:"/products"},

    // ]
  return ( 
    <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}}transition={{duration:0.6}} className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#f8f6f1] border-b border-neutral-300 shadow-md    ">
        <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
           
            <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className='flex items-center gap-2 font-bold text-xl text-eutral-900'></motion.div>
            <DoorOpen className="w-8 h-8 text-yellow-500"></DoorOpen>
          <span>Amy porte</span>
        </div>

    </motion.div>
  )
}
export default Header;

