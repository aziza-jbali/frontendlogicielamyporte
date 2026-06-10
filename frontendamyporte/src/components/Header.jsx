
import {Link,useLocation} from "react-router-dom";
import {useContext,useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {HiMenu,HiX} from "react-icons/hi";
import {Bell,Rocket,User,DoorOpen, Library, LogOut} from "lucide-react";

import "../index.css"
 function Header() {
     const location=useLocation();
     const user=5;
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
         <div className='  md:flex items-center gap-6'>
          {navLinks.map((link)=>(<motion.div key={link.path} whileHover={{scale:1.1}}>
            <Link to={link.path} className={`relative text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? "text-yellow-950":"text-neutral-700 hover:text-yellow-950"}`}>
            {Link.name}
            {location.pathname === link.path && (<motion.span layoutId='underline' className='absolute-bottom-1 left-0 w-full h-0.5 bg-yellow-900 rounded-full'/>)}
            </Link>

          </motion.div>))}
          { user ? (<div className="flex items-center gap-4">
            {/* Notifications Icon */}
            <Link to="/notifications">
            <motion.div whileHover={{scale:1.2,rotate:10}} className="relative cursor-pointer">
              <Bell size={22} className="text-yellow-950"/>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"/>
            </motion.div>
            </Link>
            {/* Profil Icon */}
           <Link>
            <motion.div whileHover={{scale:1.1}} className="relative cursor-pointr">
              <User size={22} className="text-yellow-950"/>
            </motion.div>
           </Link>
           {/* logout button */}
           <button onClick={LogOut} className="ml-2 bg-linear-to-r from-yellow-900 to-orange-950 px-4 py-1.5 rounded-full font-medium text-white hover:shadow-lg hover:shadow-yellow-300/40 transition-all">
           Logout</button>
          </div>
          ):(<div className="flex items-center gap-4">
            <Link to="/login" className="text-neutral-700 hover:text-yellow-950 transition-all font-medium">
            sign in</Link>
            <Link to="/register" className="ml-2 bg-linear-to-r   from-yellow-400 to-orange-500 px-4 py-1.5 rounded-full font-medium  text-white hover:shadow-lg hover:shadow-yellow-300/40 transition-all">
            sign up</Link>

          </div>)}
         </div>
        </div>

    </motion.div>
  )
}
export default Header;

