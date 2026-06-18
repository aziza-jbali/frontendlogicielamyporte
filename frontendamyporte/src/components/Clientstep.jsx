import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import {getallclients} from "../services/apiGestionclient.js"
import { div } from 'framer-motion/client';
export default function Clientstep() {
    const [query,setquery]=useState(" ")
    const [clients,setclients]=useState([])
    useEffect(()=>{
      const fetchclient= async()=>{
        try {
          const response=await getallclients()
          console.log(response)
          setclients(response.data);
        } catch (error) {
          console.error("❌ Erreur lors de la récupération du client :", error);
        }
      }
      fetchclient()
    },[query])
  return (
    <div className='flex flex-col  min-h-screen  items-center justify-center fff '>
      
<div className='flex flex-col gap-1 relative fff'>
    <div className=' text-amber-50   relative fff '> 
    <div style={{ border: "1px solid green " }} className='absolute fff top-2.5 text-2xl  mr-2'><i class="fa-solid fa-magnifying-glass "></i></div>
     <input  onChange={(e)=>setquery(e.target.value)} type="search"  className='bg-pink-100 text-black fff p-3 rounded-2xl w-77 pl-8'/>
     {console.log(query)}
     </div>
 {/* Search seggestion  */}
 <div className='w-77  bg-pink-800 rounded p-3'>
   {clients.map((client)=>(
    <p key={client._id}>{client.nom}</p>
      
   ))}
 </div>
</div>
 
       
    </div>
  )
}


//  useEffect(() => {
//     const fetchClient = async () => {
//       try {
//         const response = await getallclient(); // جلب جميع العملاء
//         const allClients = response.data;
//         console.log("📋 Tous les clients:", allClients);

//         // البحث مباشرة بعد جلب البيانات (وليس بعد setState)
//         const foundClient = allClients.find(
//           (c) => String(c._id).trim() === String(id).trim()
//         );

//         console.log("🎯 Client trouvé:", foundClient);
//         setCustomer(foundClient || null);
//       } catch (error) {
//         console.error("❌ Erreur lors de la récupération du client :", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClient();
//   }, [id]);

// المتصفح يسأل:

// "من هو الأب الذي عنده position: relative لكي أتموضع بالنسبة له؟