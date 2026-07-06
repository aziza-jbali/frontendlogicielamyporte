import React, { useState } from "react";
import { MoveLeftIcon, MoveRightIcon } from "@animateicons/react/lucide";
import { createinvoi } from "../services/apiGestioninvoice.js";
export default function Buttonmultistep({ Myposition, setMyposition, client }) {
console.log("idn",client._id)
//   console.log ("look",client._id)
//   const [datainvoice,setdatainvoice]=useState({
//     idClient:client._id,
//     date:new Date().toISOString()
//   });
//   console.log(datainvoice.idClient)
//  console.log("id111",client._id)
// console.log("MOUNT Buttonmultistep");
// console.log("client",client)
// const initialInvoice = {
//   idClient: client.nom,
//   date: new Date().toISOString()
// };

// console.log("before state:", initialInvoice);

// const [datainvoice, setdatainvoice] = useState({
//   idClient:"",
//    date:new Date().toISOString()
// });

// console.log("state:", datainvoice);  
  console.log("my position",Myposition);
  
  const createinvoice = async () => {
  const datainvoice = {
    idClient: client._id,
    date: new Date().toISOString(),
   };
  // await  setdatainvoice({...datainvoice,idClient:client._id})


    try {
      if (Myposition === 1) {
      
        const response = await createinvoi(
         datainvoice
        );
        console.log("regarde", response);
      }
    } catch (error) {
      console.error("❌ ", error);
    }
  };
    // console.log("state2:", datainvoice);  

  return (
    <div>
      <div className="  flex justify-end gap-10 mt-10 fff">
        {Myposition != 1 && (
          <button
            onClick={() => {
              setMyposition(Myposition - 1);
            }}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            <MoveLeftIcon size={20} duration={1} color="#ffffff" className="" />
          </button>
        )}

        <button
          className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition "
          onClick={() => {
            setMyposition(Myposition + 1);
            createinvoice();
          }}
        >
          <MoveRightIcon size={20} duration={1} color="#ffffff" />
        </button>
      </div>
    </div>
  );
}
