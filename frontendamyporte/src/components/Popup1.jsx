// import React, { useState } from "react";
// import FenetreForm from "./Productsform/FenetreForm";
// import PorteAlmForm from "./Productsform/PorteAlmForm";
// import Addclientform from "./Clientform/Addclientform";
// import { XIcon } from "@animateicons/react/lucide";

// export default function Popup({ open, setOpen, setSelected, selected ,setclient,formdata ,setformdata,activeform,invoice,setdatafinal}) {
//   // console.log(open);
//   // console.log("activeform",activeform)
//   // console.log('mount component22222');
//   let whatactive=activeform;
//    console.log('whatactive',whatactive);

//   return (
//     <div>
//       {open && (
//         <div className="fixed  inset-0 bg-black/50 flex justify-center  items-center z-10">
//           <div className="bg-[#614c38] p-6 rounded-lg     flex justify-center">
//              {whatactive==="fenetre aluminium" && <FenetreForm  formdata={formdata} setformdata={setformdata} invoice={invoice} setdatafinal={setdatafinal}/> }
//               {whatactive==="Porte aluminium" && <PorteAlmForm formdata={formdata} setformdata={setformdata} invoice={invoice}setdatafinal={setdatafinal}/> }
//             {whatactive==="client" && <Addclientform  setclient={setclient}/>  }
//             <div
//               onClick={() => {
//                 setOpen(false);
//               }}
//               className=" text-black px-3 py-2 self-start    "
//             >
//               <XIcon size={20} duration={1} color="black" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React from "react";
import FenetreForm from "./Productsform/FenetreForm";
import PorteAlmForm from "./Productsform/PorteAlmForm";
import Addclientform from "./Clientform/Addclientform";
import { XIcon } from "@animateicons/react/lucide";

export default function Popup({
  open,
  setOpen,
  setSelected,
  selected,
  setclient,
  formdata,
  setformdata,
  activeform,
  invoice,
  setdatafinal,
  setRows,
}) {
   console.log("activform",activeform)
   console.log("formdata",formdata)
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10">
      <div className="bg-[#614c38] p-6 rounded-lg flex justify-center">

        {activeform === "fenetre aluminium" && (
          <FenetreForm
            formdata={formdata}
            setformdata={setformdata}
            invoice={invoice}
            setdatafinal={setdatafinal}
            setRows={setRows}
          />
        )}

        {activeform === "Porte aluminium" && (
          <PorteAlmForm
            formdata={formdata}
            setformdata={setformdata}
            invoice={invoice}
            setdatafinal={setdatafinal}
          />
        )}

        {activeform === "client" && (
          <Addclientform
            setclient={setclient}
          />
        )}

        <button
          onClick={() => setOpen(false)}
          className="self-start px-3 py-2"
        >
          <XIcon size={20} duration={1} color="black" />
        </button>

      </div>
    </div>
  );
}