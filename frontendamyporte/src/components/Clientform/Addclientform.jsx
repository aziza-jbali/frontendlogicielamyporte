import React, { useState } from 'react'
export default function Addclientform() {
   
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className='text-2xl font-bold text-[#614c38] mb-8 border-b pb-3'>
            Configuration - Client
        </h1>
        <div className='flex flex-col gap-2 font-bold text-xl'>

         <div className='flex flex-col  gap-2 font-bold text-xl'>
            <label>Nom Complet :</label>
            <input type="text" className='rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]' />

        </div>
          <div className='flex flex-col font-bold text-xl'>
            <label>Numéro :</label>
            <input type="text" className='rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]' />

        </div>
        <div className='flex flex-col font-bold text-xl '>
            <label>Adresse :</label>
            <input type="text" className='rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]'/>

        </div>
        </div>

    </div>
  )
}
