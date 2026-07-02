// import React from 'react'

// export default function FenetreForm() {
//   return (
//     <div className='w-[90%] flex fff gap-4 p-7 text-white'>
//       <div className='flex flex-col'>
//         <label className='mb-2'>Choix</label>
//         <select className='bg-[#614c38] rounded-2xl'>
//         <option value=" ">choix 1</option>
//         <option value=" ">choix 2</option>
//         <option value=" ">choix 3</option>

//       </select></div>
//       <div className='flex flex-col'>
//         <label className='mb-2'>Couleur</label>
//         <select>
//         <option value=" ">blanc</option>
//         <option value=" ">noir</option>
//         <option value=" ">gris</option>
//         <option value="marron">marron</option>


//       </select>
//       </div>
//       <div className='flex flex-col'>
//             <label className='mb-2'>PositionFenetre</label>
//         <select>
//         <option value="poignet">Poignet</option>
//         <option value="collision">Collision</option>
        
//         </select>
//       </div>
//       <div></div>
//       <div></div>
//     </div>
//   )
// }





// //   const {
// //     produit,
// //     choix,
// //     cas,
// //     hauteur,
// //     largeur,
// //     couleur,
// //     positionFenetre,
// //     quantite,factureId
// //   } = req.body;


import React from "react";

export default function FenetreForm() {
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
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]">
            <option>Choix 1</option>
            <option>Choix 2</option>
            <option>Choix 3</option>
          </select>
        </div>

        {/* Couleur */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Couleur :
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]">
            <option>Blanc</option>
            <option>Noir</option>
            <option>Gris</option>
            <option>Marron</option>
          </select>
        </div>

        {/* Position */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Position Fenetre :
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]">
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

        <button className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition">
          Enregistrer
        </button>
      </div>
    </div>
  );
}