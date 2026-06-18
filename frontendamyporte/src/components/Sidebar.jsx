import React from 'react'
import {motion} from "framer-motion";
import {Bell,Rocket,User,DoorOpen, Library, LogOut} from "lucide-react";
import hero from "../assets/hero.png"
export default function Sidebar() {
  return (
    <div className='transition pb-5 pl-8 fff duration-300 ease-in-out bg-white/80 dark:bg-state-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10 fff'>
      {/* logo */}
      <div className=' fff py-6'>
        
            <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className='flex items-center gap-2 font-bold text-xl text-eutral-900'>   <DoorOpen className=" w-10 h-10 text-yellow-950 fff" ></DoorOpen>
          <span className='text-xl'>Amy porte</span>
          </motion.div>
      </div>
      {/* Navigation */}
      <div className='flex-1 space-y-2 overflow-y-auto fff'>
        <h1>Lorem, ipsum dolor sit a</h1>
      </div>
      {/* user profile */}
      <div className='flex fff'>
        <img 
        src={hero} 
        alt="user"
       className='w-10 h-10 rounded-full ring-2 ring-yellow-950'/>
       <div className='flex-1  flex-col fff min-w-0'>
        <div className='text-sm font-meduim  text-sale-800 dark:text-white truncate'> <p>Aziza</p></div>
       <div> <p>Administrator</p></div>
         

       </div>

      </div>
    </div>
  )
}
