import React from "react";
import { MoveLeftIcon, MoveRightIcon  } from "@animateicons/react/lucide";
import {createinvoi} from "../services/apiGestioninvoice.js"
export default function Buttonmultistep({ Myposition ,setMyposition }) {
   console.log(Myposition)
   const createinvoice=async()=>{
    if(Myposition === 1){
      
    }
   }
  return (
    <div>
      <div className="  flex justify-end gap-10 mt-10 fff">
        { Myposition != 1 && (<button  onClick={()=>{setMyposition(Myposition-1)}}  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          <MoveLeftIcon size={20} duration={1} color="#ffffff" className="" />
        </button>)}

        <button className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition " onClick={()=>{setMyposition(Myposition+1)}} >
          <MoveRightIcon size={20} duration={1} color="#ffffff" />
        </button>
      </div>
    </div>
  );
}
