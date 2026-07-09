import React from "react";
import { useState } from "react";
import { costporte } from "../../services/apiGestionligne.js";

export default function FenetreForm({ formdata, setformdata, invoice }) {
  // console.log("fregardejjj",formdata)
  console.log("this is the invoice twa", invoice);
  console.log("this is the id of invoice", invoice._id);
  const [Portedata, setPortedata] = useState({
    // produit: "",
    // largeur: "",
    // hauteur: "",
    couleur: "",
    remplissage: "",

    // quantite: formdata.quantite,
  });
  //   produit,
  //   hauteur,
  //   largeur,
  //   choix,
  //   couleur,
  //   quantite,
  //   factureId,
  const datapor = {
    ...Portedata,
    produit: formdata.produit,
    largeur: Number(formdata.largeur),
    hauteur: Number(formdata.hauteur),

    remplissagePorte: Portedata.remplissage,
    choix: Portedata.choix,
    quantite: formdata.quantite,
    factureId: invoice._id,
  };
  console.log(typeof datapor.largeur);
  console.log("data fen", datapor);

  const handlesubmit = async () => {
    try {
      const response = await costporte(datapor);
      console.log(response);
      setformdata({...formdata, prixunitaire:response.data.prixUnitaire})
    } catch (error) {
      console.error("❌", error);
    }
  };
  // prixunitaire:"",
  //     montant:""
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#614c38] mb-8 border-b pb-3">
        Configuration - Porte Aluminium
      </h2>

      {/* Form */}
      <div className="grid grid-cols-2 gap-6">
        {/* Choix */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Choix :
          </label>
          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
            value={Portedata.choix}
            onChange={(e) =>
              setPortedata({ ...Portedata, choix: e.target.value })
            }
          >
            <option >-- Choisir--</option>
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
            value={Portedata.couleur}
            onChange={(e) =>
              setPortedata({ ...Portedata, couleur: e.target.value })
            }
          >
            <option >-- Choisir --</option>
            <option value="blanc">Blanc</option>
            <option value="noir">Noir</option>
            <option value="gris">Gris</option>
            <option value="marron">Marron</option>
          </select>
        </div>

        {/* Position */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Remplissage  Porte :
          </label>
          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#614c38]"
            value={Portedata.remplissage}
            onChange={(e) =>
              setPortedata({
                ...Portedata,
                remplissage: e.target.value,
              })
            }
          >
            <option value="">-- Choisir le remplissage --</option>
            <option value="Tout sbl">Tout SBL</option>
            <option value="Tout lamette">Tout Lamette</option>
            <option value="Tout Claire">Tout Claire</option>
            <option value="Haut sbl / Bas lamette">Haut SBL / Bas Lamette </option>
            <option value="Haut claire / Bas  lamette">Haut Lamette / Bas Claire</option>
            <option value="Haut claire / Bas lamette">Haut Claire / Bas Lamette</option>

          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-10">
        <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          Annuler
        </button>

        <button
          className="px-6 py-3 rounded-xl bg-[#614c38] text-white hover:bg-[#4f3d2f] transition"
          onClick={() => handlesubmit()}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
