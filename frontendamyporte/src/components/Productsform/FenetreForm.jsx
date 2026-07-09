// import React from "react";
// import { useState } from "react";
// import { costwind } from "../../services/apiGestionligne.js";

// export default function FenetreForm({ formdata, setformdata, invoice,setdatafinal }) {
//   // console.log("fregardejjj",formdata)
//   console.log("this is the invoice twa", invoice);
//   console.log("this is the id of invoice", invoice._id);
//   const [fenetredata, setfenetredata] = useState({
   
//     couleur: "",
//     positionFenetre: "",
    
//     // quantite: formdata.quantite,
//   });
//   const datafen = {
//     ...fenetredata,
//     produit: formdata.produit,
//     largeur: Number(formdata.largeur),
//     hauteur: Number(formdata.hauteur),

//     positionFenetre: fenetredata.positionFenetre,
//     choix: fenetredata.choix,
//     quantite:formdata.quantite,
//     factureId: invoice._id,
//   };
//   console.log(typeof datafen.largeur);
//   console.log("data fen", datafen);

//   const handlesubmit = async () => {
//     try {
//       const response = await costwind(datafen);
//       console.log(response);
//       setdatafinal(response.data)
//        console.log("response.data",response.data);
//     } catch (error) {
//       console.error("❌", error);
//     }
//   };
//   return (
//     <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
//       {/* Title */}
//       <h2 className="text-2xl font-bold text-[#614c38] mb-8 border-b pb-3">
//         Configuration - Fenêtre Aluminium
//       </h2>

//       {/* Form */}
//       <div className="grid grid-cols-2 gap-6">
//         {/* Choix */}
//         <div className="flex flex-col">
//           <label className="mb-2 text-sm font-semibold text-gray-700">
//             Choix :
//           </label>
//           <select
//             className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
//             value={fenetredata.choix}
//             onChange={(e) =>
//               setfenetredata({ ...fenetredata, choix: e.target.value })
//             }
//           >
//             <option value="1">Choix 1</option>
//             <option value="2">Choix 2</option>
//             <option value="3">Choix 3</option>
//           </select>
//         </div>

//         {/* Couleur */}
//         <div className="flex flex-col">
//           <label className="mb-2 text-sm font-semibold text-gray-700">
//             Couleur :
//           </label>
//           <select
//             className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
//             value={fenetredata.couleur}
//             onChange={(e) =>
//               setfenetredata({ ...fenetredata, couleur: e.target.value })
//             }
//           >
//             <option value="blanc">Blanc</option>
//             <option value="noir">Noir</option>
//             <option value="gris">Gris</option>
//             <option value="marron">Marron</option>
//           </select>
//         </div>

//         {/* Position */}
//         <div className="flex flex-col">
//           <label className="mb-2 text-sm font-semibold text-gray-700">
//             Position Fenetre :
//           </label>
//           <select
//             className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
//             value={fenetredata.positionFenetre}
//           onChange={(e) =>
//   setfenetredata({
//     ...fenetredata,
//     positionFenetre: e.target.value,
//   })
// }
//           >
//             <option value="poignet">Poignet</option>
//             <option value="collision">Collision</option>
//           <option value="compas">Compas</option>

//           </select>
//         </div>
//         {/* extention */}
//         <div></div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-end gap-4 mt-10">
//         <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
//           Annuler
//         </button>

//         <button
//           className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition"
//           onClick={() => handlesubmit()}
//         >
//           Enregistrer
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { costwind } from "../../services/apiGestionligne.js";

export default function FenetreForm({
  formdata,
  setformdata,
  invoice,
  setOpen,
}) {
  if (!formdata) return null;

  const [fenetredata, setfenetredata] = useState({
    choix: formdata.choix || "",
    couleur: formdata.couleur || "",
    positionFenetre: formdata.positionFenetre || "",
  });

  const handlesubmit = async () => {
    const datafen = {
      produit: formdata.produit,
      largeur: Number(formdata.largeur),
      hauteur: Number(formdata.hauteur),
      quantite: Number(formdata.quantite),

      choix: fenetredata.choix,
      couleur: fenetredata.couleur,
      positionFenetre: fenetredata.positionFenetre,

      factureId: invoice._id,
    };
  console.log("data fen", datafen);

    try {
      const response = await costwind(datafen);

      setformdata({
        ...formdata,

        choix: fenetredata.choix,
        couleur: fenetredata.couleur,
        positionFenetre: fenetredata.positionFenetre,

        prixUnitaire: response.data.prixUnitaire,
        montant: response.data.prixtotale,
      });

      setOpen(false);
    } catch (error) {
      console.error("❌", error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#614c38] mb-8 border-b pb-3">
        Configuration - Fenêtre Aluminium
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Choix */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Choix :
          </label>

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
            value={fenetredata.choix}
            onChange={(e) =>
              setfenetredata({
                ...fenetredata,
                choix: e.target.value,
              })
            }
          >
            <option value="">Choisir...</option>
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

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
            value={fenetredata.couleur}
            onChange={(e) =>
              setfenetredata({
                ...fenetredata,
                couleur: e.target.value,
              })
            }
          >
            <option value="">Choisir...</option>
            <option value="blanc">Blanc</option>
            <option value="noir">Noir</option>
            <option value="gris">Gris</option>
            <option value="marron">Marron</option>
          </select>
        </div>

        {/* Position */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Position Fenêtre :
          </label>

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
            value={fenetredata.positionFenetre}
            onChange={(e) =>
              setfenetredata({
                ...fenetredata,
                positionFenetre: e.target.value,
              })
            }
          >
            <option value="">Choisir...</option>
            <option value="poignet">Poignet</option>
            <option value="collision">Collision</option>
            <option value="compas">Compas</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <button
          onClick={() => setOpen(false)}
          className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Annuler
        </button>

        <button
          onClick={handlesubmit}
          className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}