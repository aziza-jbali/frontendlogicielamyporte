import React, { useState } from 'react'

export default function Popup({open,setOpen}) {

    
     console.log(open)

  return (
    
    <div>
      

      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h1>Hello 👋</h1>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-500 text-white px-3 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
   
  
}

