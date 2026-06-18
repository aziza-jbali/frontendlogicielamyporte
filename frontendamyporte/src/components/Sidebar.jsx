// import React from 'react'
// import {motion} from "framer-motion";
// import {Bell,Rocket,User,DoorOpen, Library, LogOut} from "lucide-react";
// import hero from "../assets/hero.png"
// export default function Sidebar() {
//   return (
//     <div className='transition pb-5 pl-8 fff duration-300 ease-in-out bg-white/80 dark:bg-state-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10 fff'>
//       {/* logo */}
//       <div className=' fff py-6'>
        
//             <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className='flex items-center gap-2 font-bold text-xl text-eutral-900'>   <DoorOpen className=" w-10 h-10 text-yellow-950 fff" ></DoorOpen>
//           <span className='text-xl'>Amy porte</span>
//           </motion.div>
//       </div>
//       {/* Navigation */}
//       <div className='flex-1 space-y-2 overflow-y-auto fff'>
//         <h1>Lorem, ipsum dolor sit a</h1>
//       </div>
//       {/* user profile */}
//       <div className='flex fff'>
//         <img 
//         src={hero} 
//         alt="user"
//        className='w-10 h-10 rounded-full ring-2 ring-yellow-950'/>
//        <div className='flex-1  flex-col fff min-w-0'>
//         <div className='text-sm font-meduim  text-sale-800 dark:text-white truncate'> <p>Aziza</p></div>
//        <div> <p>Administrator</p></div>
         

//        </div>

//       </div>
//     </div>
//   )
// }






import { motion } from "framer-motion";
import {
  DoorOpen,
  LayoutDashboard,
  Calendar,
  User,
  ChevronDown,
  Bell,
  LogOut,
} from "lucide-react";

import hero from "../assets/hero.png";
import { useState } from "react";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      subItems: ["Statistics", "Analytics"],
    },
    {
      title: "Calendar",
      icon: <Calendar size={20} />,
      subItems: ["Events", "Meetings"],
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      subItems: ["My Profile", "Settings"],
    },
  ];

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="w-72 min-h-screen bg-white border-r flex flex-col px-6 py-4">

      {/* Logo */}
      <div className="py-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <DoorOpen className="w-10 h-10 text-yellow-950" />
          <span className="font-bold text-xl">Amy Porte</span>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">

        <p className="text-xs uppercase text-gray-400 mb-4">
          Menu
        </p>

        {menuItems.map((item, index) => (
          <div key={index} className="mb-2">

            {/* Main Item */}
            <button
              onClick={() => toggleMenu(index)}
              className="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 transition"
            >
              {item.icon}

              <span className="ml-3">
                {item.title}
              </span>

              <ChevronDown
                className={`ml-auto transition-transform ${
                  openMenu === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Sub Menu */}
            {openMenu === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                className="overflow-hidden ml-8 mt-2"
              >
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer"
                  >
                    {subItem}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="border-t pt-4 space-y-2">

        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
          <Bell size={20} />
          Notifications
        </button>

        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 text-red-500 w-full">
          <LogOut size={20} />
          Logout
        </button>

        {/* User */}
        <div className="flex items-center gap-3 pt-4">
          <img
            src={hero}
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-yellow-950"
          />

          <div>
            <p className="font-medium">Aziza</p>
            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}