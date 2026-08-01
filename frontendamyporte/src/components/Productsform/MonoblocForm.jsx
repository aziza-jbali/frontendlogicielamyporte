import React, { useState } from "react";
 import { costmonobloc } from "../../services/apiGestionligne.js";

export default function MonoblocForm({
  invoice,
  setOpen,
  Target,
  index,
  updateRow,
  selectedRow,
  setpayant,
}) {

  const [MonoblocData, setMonoblocData] = useState({
    couleur: Target.couleur || "",
    type: Target.type || "",
    extension: Target.extension || "",
  });

  const handlesubmit = async () => {
    const dataMonobloc = {
      produit: Target.produit,
      largeur: Number(Target.largeur),
      hauteur: Number(Target.hauteur),
      quantite: Number(Target.quantite),

      couleur: MonoblocData.couleur,
      type: MonoblocData.type,
      extension: MonoblocData.extension,

      factureId: invoice._id,
    };

    console.log(dataMonobloc);

    try {
      const response = await costmonobloc(dataMonobloc);

      updateRow(selectedRow, "prixUnitaire", response.data.prixUnitaire);
      updateRow(index, "montant", response.data.prixtotale);

      setpayant((prev) => prev + response.data.prixtotale);

      setOpen(false);
    } catch (error) {
      console.error("❌", error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#614c38] mb-8 border-b pb-3">
        Configuration - Rideau Monobloc
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Type */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Type :
          </label>

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
            value={MonoblocData.type}
            onChange={(e) =>
              setMonoblocData({
                ...MonoblocData,
                type: e.target.value,
              })
            }
          >
            <option value="">-- Choisir --</option>
            <option value="pvc">Pvc</option>
            <option value="lamette">Lamette</option>
          </select>
        </div>

        {/* Couleur */}
        {/* <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Couleur :
          </label>

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
            value={MonoblocData.couleur}
            onChange={(e) =>
              setMonoblocData({
                ...MonoblocData,
                couleur: e.target.value,
              })
            }
          >
            <option value="">-- Choisir --</option>
            <option value="blanc">Blanc</option>
            <option value="gris">Gris</option>
            <option value="marron">Marron</option>
            <option value="noir">Noir</option>
          </select>
        </div> */}
        <div className="flex flex-col">
  <label className="mb-2 text-sm font-semibold text-gray-700">
    Couleur :
  </label>

  <select
    className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
    value={MonoblocData.couleur}
    onChange={(e) =>
      setMonoblocData({
        ...MonoblocData,
        couleur: e.target.value,
      })
    }
  >
    <option value="">-- Choisir --</option>

    <option value="blanc">Blanc</option>

    {MonoblocData.type !== "pvc" && (
      <>
        <option value="gris">Gris</option>
        <option value="marron">Marron</option>
        <option value="noir">Noir</option>
      </>
    )}
  </select>
</div>

        {/* Extension */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Extension :
          </label>

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
            value={MonoblocData.extension}
            onChange={(e) =>
              setMonoblocData({
                ...MonoblocData,
                extension: e.target.value,
              })
            }
          >
            <option value="">-- Choisir --</option>
            <option value="moteur">Moteur</option>
            
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