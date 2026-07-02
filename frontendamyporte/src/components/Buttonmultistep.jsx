import React from 'react'
import { MoveLeftIcon,MoveRightIcon } from "@animateicons/react/lucide";
export default function Buttonmultistep() {
  return (
    <div>
       <div className="  flex justify-end gap-4 mt-10 fff">
        <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          <MoveLeftIcon
  size={20}
  duration={1}
  color="#ffffff"
/>
        </button>

        <button className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition">
          <MoveRightIcon
  size={20}
  duration={1}
  color="#ffffff"
/>
        </button>
      </div>
    </div>
  )
}


