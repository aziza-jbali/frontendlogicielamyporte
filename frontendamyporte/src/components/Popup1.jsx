import React, { useState } from "react";
import FenetreForm from "./Productsform/FenetreForm";
import Addclientform from "./Clientform/Addclientform";
import { XIcon } from "@animateicons/react/lucide";

export default function Popup({ open, setOpen, setSelected, selected ,setclient,formdata ,setformdata}) {
  console.log(open);

  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10">
          <div className="bg-[#614c38] p-6 rounded-lg     flex justify-center">
             <FenetreForm  formdata={formdata} setformdata={setformdata}/> 
             {/* <Addclientform setclient={setclient}/>  */}
            <div
              onClick={() => {
                setOpen(false);
              }}
              className=" text-black px-3 py-2 self-start    "
            >
              <XIcon size={20} duration={1} color="black" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
