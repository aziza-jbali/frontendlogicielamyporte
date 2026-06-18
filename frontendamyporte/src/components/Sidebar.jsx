import React from 'react'
import {motion} from "framer-motion";
import {Bell,Rocket,User,DoorOpen, Library, LogOut} from "lucide-react";

export default function Sidebar() {
  return (
    <div className='transition duration-300 ease-in-out bg-white/80 dark:bg-state-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10 fff'>
      {/* logo */}
      <div className='p-10 pt-3'>
        
            <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className='flex items-center gap-2 font-bold text-xl text-eutral-900'>   <DoorOpen className=" w-10 h-10 text-yellow-950 fff" ></DoorOpen>
          <span className='text-xl'>Amy porte</span>
          </motion.div>
      </div>
    </div>
  )
}
