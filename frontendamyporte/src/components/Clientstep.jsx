import { Search } from 'lucide-react';
import { useState } from 'react';
export default function Clientstep() {
    const [query,setquery]=useState(" ")
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
   hello world
 </div>
</div>
 
       
    </div>
  )
}




// المتصفح يسأل:

// "من هو الأب الذي عنده position: relative لكي أتموضع بالنسبة له؟