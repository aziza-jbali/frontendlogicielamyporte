
import React from "react";
import { useState } from "react";
import {costwind} from "../../services/apiGestionligne.js"

export default function FenetreForm({formdata,setformdata,invoice}) {
  // console.log("fregardejjj",formdata)
  console.log("this is the invoice twa",invoice)
  console.log("this is the id of invoice",invoice._id)
    const [fenetredata, setfenetredata] = useState({
      // produit: formdata.produit,
      // largeur:formdata.largeur,
      // hauteur:formdata.hauteur,
      // couleur: "",
      // positionFenetre: "",
      // choix:"",
      // quantite:formdata.quantite,
      // cas:"",
      // factureId :formdata.factureId
       produit: "",
      largeur:"",
       hauteur:"",
       couleur: "",
       positionFenetre: "",
      choix:"",
      quantite:"formdata.quantite,",
      // cas:"",
      // factureId :formdata.factureId

    });
    const datafen={
      ...fenetredata,
       produit: "formdata.produit",
      largeur:"formdata.largeur",
       hauteur:"formdata.hauteur",
      
       positionFenetre: "",
      choix:"",
      quantite:"",
      factureId:invoice._id
    }
    console.log("data fen",datafen)
  //   console.log("MOUNT Buttonmultistep225441");

  //   console.log('hellllllllll')
  // console.log("chouf",fenetredata.quantite);
  // console.log("choix",fenetredata.choix);
  // console.log("position",fenetredata.positionFenetre);
  //  console.log("couleur",fenetredata.couleur);
  //     console.log("idclient1245",fenetredata._idClient);
  //           console.log("quantite2",fenetredata.quantite);


  const handlesubmit=async()=>{
        try {
          const response=await costwind(datafen)
          console.log(response)
        } catch (error) {
          console.error("❌", error);
        }
      }
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#614c38] mb-8 border-b pb-3">
        Configuration - Fenêtre Aluminium
      </h2>
   
      {/* Form */}
      <div className="grid grid-cols-2 gap-6">
        {/* Choix */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Choix :
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]" value={fenetredata.choix} onChange={(e)=>setfenetredata({...fenetredata,choix:e.target.value})}>
            <option value="1">Choix 1</option>
            <option value="2">Choix 2</option>
            <option value="3">Choix 3</option>
          </select>
        </div>

        {/* Couleur */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Couleur :
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]" value={fenetredata.couleur} onChange={(e)=>setfenetredata({...fenetredata,couleur:e.target.value})}>
            <option value="blanc">Blanc</option>
            <option value="noir">Noir</option>
            <option value="gris">Gris</option>
            <option value="marron">Marron</option>
          </select>
        </div>

        {/* Position */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Position Fenetre :
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]" value={fenetredata.positionFenetre} onChange={(e)=>setfenetredata({...fenetredata,positionFenetre:e.target.value})}>
            <option value="poignet">Poignet</option>
            <option value="collision">Collision</option>
          </select>
        </div>

        {/* Type vitrage */}
        {/* <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Type de vitrage
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]">
            <option>Simple</option>
            <option>Double</option>
            <option>Triple</option>
          </select>
        </div> */}

        {/* Hauteur */}
        {/* <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Hauteur (cm)
          </label>
          <input
            type="number"
            placeholder="Ex : 120"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
          />
        </div> */}

        {/* Largeur */}
        {/* <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Largeur (cm)
          </label>
          <input
            type="number"
            placeholder="Ex : 80"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
          />
        </div> */}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-10">
        <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          Annuler
        </button>

        <button className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition" onClick={()=>handlesubmit()}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}