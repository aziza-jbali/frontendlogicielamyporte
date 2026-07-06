import React, { useState } from "react";
import { addclient } from "../../services/apiGestionclient";
import { Trophy } from "lucide-react";
export default function Addclientform( {setclient}) {
  const [clientdata, setclientdata] = useState({
    nom: "",
    numero: "",
    adresse: "",
  });

  const handlesubmit=async()=>{
    try {
         const response =await addclient(clientdata)
          console.log("client ajouté",response.data)
          console.log("here the client is",response.data.newclient)
          setclient(response.data.newclient)
         setclientdata({nom:"",numero:"",adresse:""})
        
    } catch (error) {
          console.error("❌ خطأ أثناء إضافة السيارة:", error);
      alert("حدث خطأ أثناء الإضافة.");
    }

  }
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-[#614c38] mb-8 border-b pb-3">
        Configuration - Client
      </h1>
      <div className="flex flex-col gap-2 font-bold text-xl">
        <div className="flex flex-col  gap-2 font-bold text-xl">
          <label>Nom Complet :</label>
          <input
            type="text"
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
            value={clientdata.nom}
            onChange={(e) =>
              setclientdata({
                ...clientdata,
                nom: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2 font-bold text-xl">
          <label>Numéro :</label>
          <input
            type="text"
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
              value={clientdata.numero}
            onChange={(e) =>
              setclientdata({
                ...clientdata,
                numero: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2 font-bold text-xl ">
          <label>Adresse :</label>
          <input
            type="text"
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
              value={clientdata.adresse}
            onChange={(e) =>
              setclientdata({
                ...clientdata,
                adresse: e.target.value,
              })
            }
          />
        </div>
        <div className="flex justify-center items-center pb-2">
            <button className="  duration-300  hover:bg-[#8C5A3C] hover:p-5 hover:rounded-2xl hover:shadow-2xl" onClick={()=>{handlesubmit()}}>Energistrer</button>
        </div>
      </div>
    </div>
  );
}
