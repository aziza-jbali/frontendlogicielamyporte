import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import {getallclients} from "../services/apiGestionclient.js"
import { div } from 'framer-motion/client';
import { filter } from 'framer-motion/m';
export default function Clientstep() {
    const [query,setquery]=useState(" ")
    const [clients,setclients]=useState([])
    useEffect(()=>{
      const fetchclient= async()=>{
        try {
          const response=await getallclients()
          console.log(response)
          const newarray=response.data.filter((client)=>  Object.values(client).includes(query))
          console.log(newarray)
          setclients(newarray);
          console.log("i am working")
        } catch (error) {
          console.error("❌ Erreur lors de la récupération du client :", error);
        }
      }
      fetchclient()
    },[query])
  return (
    <div className='flex flex-col  min-h-screen  items-center justify-center    bg-linear-to-b from-[#faf6ef] to-[#f0e5d2] '>
      <div className='flex flex-col relative gap-10 w-72 h-96 md:w-96 md:h-[500px] lg:w-[600px] lg:h-[700px] fff'>

    <div className='  relative  flex flex-col gap-1 '> 
    <div className='absolute   top-2.5 text-2xl left-0.5'><i class="fa-solid fa-magnifying-glass    "></i></div>
     <input  onChange={(e)=>setquery(e.target.value)}  type="search"  className='bg-pink-100 text-black   p-3 rounded-2xl  pl-8'/>
     {console.log(query)}
      {/* Search seggestion  */}

 <div className='rounded-xl overflow-hidden '>
   {clients ?(clients.map((client)=>(
    <div className=' bg-amber-50 p-2  '>     <div  className='ml-1 '><i class="fa-solid fa-magnifying-glass pr-4.5 "></i><span key={client._id}>{client.nom}</span></div>

   </div>
    
      
   ))):""}
 </div>
     </div>
<div className='flex-1'></div>
 <div className='fff'><p >Ajouter un client </p></div>
  
</div>
 
       
    </div>
  )
}

