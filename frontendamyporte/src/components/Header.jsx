
import {Link,useLocation} from "react-router-dom";
import {useContext,useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {HiMenu,HiX} from "react-icons/hi";
import {Bell,Rocket,User,DoorOpen} from "lucide-react";

import "../index.css"
 function Header() {
     const location=useLocation();
     
     const navLinks=[
         {name:"Home",path:"/"},
         {name:"Invoices",path:"/invoices"},
         {name:"Customers",path:"/customers"},
         {name:"Reports",path:"reports"},
         {name:"Notifications",path:"/notifications"},
        {name:"Products",path:"/products"},

     ]
  return ( 
    <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}}transition={{duration:0.6}} className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#f8f6f1] border-b border-neutral-300 shadow-md    ">
        <div className=' fff max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
           
            <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className='flex items-center gap-2 font-bold text-xl text-eutral-900'>   <DoorOpen className=" fff w-10 h-10 text-yellow-950"></DoorOpen>
          <span className='fff'>Amy porte</span>
          </motion.div>
         {/* Desktop menu */}
         <div className=' hidden md:flex items-center gap-6'>
          {navLinks.map((link)=>(<motion.div key={link.path} whileHover={{scale:1.1}}>
            <Link to={link.path} className={`relative text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? "text-yellow-950":"text-neutral-700 hover:text-yellow-950"}`}>
            {Link.name}
            {location.pathname === link.path && (<motion.span layoutId='underline' className='absolute-bottom-1 left-0 w-full h-0.5 bg-yellow-900 rounded-full'/>)}
            </Link>

          </motion.div>))}
         </div>
        </div>

    </motion.div>
  )
}
export default Header;

