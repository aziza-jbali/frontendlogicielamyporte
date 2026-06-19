
import {Link,useLocation} from "react-router-dom";
import {useContext,useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {HiMenu,HiX} from "react-icons/hi";
import {Bell,Rocket,User,DoorOpen, Library, LogOut} from "lucide-react";

import "../index.css"
 function Header() {
     const location=useLocation();
     const [isMobileMenuOpen,setisMobileMenuOpen]=useState(false);                                                                                                                                          
     const user=0;
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
        <div className=' hideen max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
           
            <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className='flex items-center gap-2 font-bold text-xl text-eutral-900'>   <DoorOpen className=" w-10 h-10 text-yellow-950" ></DoorOpen>
          <span className='text-xl'>Amy porte</span>
          </motion.div>
         {/* Desktop menu */}
         <div className=' hidden md:flex items-center gap-6'>
          {navLinks.map((link)=>(<motion.div key={link.path} whileHover={{scale:1.1}}>
            <Link to={link.path} className={`relative text-base font-medium transition-all duration-300 ${location.pathname === link.path ? "text-yellow-950":"text-neutral-700 hover:text-yellow-950"}`}>
            {link.name}
            {location.pathname === link.path && (<motion.span layoutId='underline' className='absolute-bottom-1 left-0 w-full h-0.5 bg-yellow-900 rounded-full'/>)}
            </Link>

          </motion.div>))}
          { user ? (<div className=" flex items-center gap-4">
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
           <button onClick={LogOut} className="ml-2 bg-linear-to-r from-yellow-900 to-orange-950 px-4 py-1.5 rounded-full font-medium text-white hover:shadow-lg hover:shadow-yellow-700/40 transition-all">
           Logout</button>
          </div>
          ):(<div className="flex items-center gap-4">
            <Link to="/login" className="text-neutral-700 hover:text-yellow-950 transition-all font-medium">
            تسجيل الدخول</Link>
            <Link to="/register" className="ml-2 bg-linear-to-r   from-yellow-700 to-orange-900 px-4 py-1.5 rounded-full font-medium  text-white hover:shadow-lg hover:shadow-yellow-700/40 transition-all">
             إنشاء حساب</Link>

          </div>)}
         </div>
         {/* Mobile Menu */}
         <div className="md:hidden flex items-center gap-3">
          <button onClick={()=> setisMobileMenuOpen((prev)=> !prev)} className="text-neutral-900 text-2xl focus:outlineine-none">
            {isMobileMenuOpen ? <HiX/> :<HiMenu/>}

          </button>
         </div>

        </div>
        <AnimatePresence>
          {isMobileMenuOpen &&(<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.3}} className="md:hidden bg-[#f8f6f1] border-t border-neutral-300 overflow-hidden">
            <div className="flex flex-col px-6 py-4 gap-4 text-neutral-900">
              {navLinks.map((link)=>(<Link key={link.path} to={link.path} onClick={()=> setisMobileMenuOpen(false)} className={`text-sm font-medium transition-all duration-300 hover:text-yellow-900 ${location.pathname=== link.path ? "text-yellow-900":"text-neutral-700"}`}>
              {link.name}</Link>)
              )
              }
              {user ? ( <div className=" flex items-center gap-4 mt-2">
              <Bell size={22} className="text-yellow-900"/>
              <User size={22} className="text-yellow-900"/>
              <button onClick={()=>{LogOut()                                        
                setisMobileMenuOpen(false)
              }} className="bg-linear-to-r from-yellow-900 to-orange-950 px-4 py-1.5 rounded-full font-medium text-white hover:shadow-lg hover:shadow-yellow-700/40 transition all">logout</button>
              </div>):(                                                                                                                 
                <div className="flex flex-col gap-2 mt-2">
                  <Link to="/login" onClick={()=>setisMobileMenuOpen(false)} className="text-neutral-700 hover:text-yellow-950 transition-all font-medium">
            تسجيل الدخول</Link>
            <Link to="/register" onClick={()=>setisMobileMenuOpen(false)} className="ml-2 bg-linear-to-r   from-yellow-700 to-orange-900 px-4 py-1.5 rounded-full font-medium  text-white hover:shadow-lg hover:shadow-yellow-700/40 transition-all">
             إنشاء حساب</Link>
                </div>
              )

              }
            </div>
          </motion.div>)}
        </AnimatePresence>

    </motion.div>
  )
}
export default Header;

