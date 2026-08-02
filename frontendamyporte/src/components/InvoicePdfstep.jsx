import React, { useState,useEffect } from 'react'
import{getalllignesoffacture} from  "../services/apiGestioninvoice.js"
 import { notification } from "./toastService.js";

import { Bell, Rocket, User, DoorOpen, Library, LogOut } from "lucide-react";

export default function InvoicePdfstep({invoice,datapaiment,client,handlePrint,ref}) {
  const[datainvoice,setdatainvoice]=useState([])
  console.log("ddd1477",datainvoice)
  console.log("datapaiment",datapaiment);
    useEffect(() => {
    const fetchinvoice = async () => {
      const idfa=invoice._id
      console.log("I work do not worry")
      try {
        const response = await getalllignesoffacture(idfa);
        console.log(response);
        const newarray = response.data
        // console.log(newarray);
        setdatainvoice(newarray);
        // console.log("i am working");
      } catch (error) {
        console.error("❌ Erreur lors de la récupération de facture :", error);
        notification.error("Impossible de charger la facture demandé.");

      }
    };
    fetchinvoice();
  }, []);
  return (
    <>
         <div className="flex justify-end mb-4 print:hidden">
      <button
        onClick={handlePrint}
        className="bg-[#3B2414] hover:bg-[#5a3924] text-white px-5 py-2 rounded-lg shadow-md"
      >
        🖨️ Imprimer la facture
      </button>
    </div>

     <div className="w-80 relative bg-white   md:w-[300px] lg:w-[900px]       rounded-3xl  overflow-hidden   ">
      <div className="relative overflow-hidden h-70  bg-[#3B2414]        ">
        <div className="absolute w-72 h-72 rounded-full bg-[#6b4224] opacity-90 -top-25 -right-19 "></div>
        <div className=" text-[#ffc186] bg-[#996e47] absolute right-12 rounded-2xl text-sm h-8 top-19  p-1 text-center border-1 font-bold border-[#ffcea0] ">
          <h1>Facture Passager</h1>
        
        </div>
        <div className=" flex    w-1/3 gap-2 mt-8 ml-6">
          <div className=" font-bold">
            <DoorOpen className="w-15 h-15 text-[#fac28e]"></DoorOpen>
          </div>
          <div className="text-xl text-white font-bold">
            <p>STE AMY PORTE</p>
            <p>SINCE 1978</p>
          </div>
        </div>
       <div className="w-[70%] grid grid-cols-2 text-[#ffc186]    m-auto p-3 pt-12">
          <div className="flex flex-col gap-2"><h1>N° FACTURE :</h1>
          <h3 className="text-white">{invoice.invoiceNumber || " "}</h3></div>
          <div className="flex flex-col gap-2"><h1>DATE :</h1>
          <h3 className="text-white">{invoice.date?.split("T")[0]}</h3></div>
          
       </div>
      </div>
      {/* <div className="absolute  top-56  md:w-[300px] lg:w-[800px]  w-80       px-3 ">
          <div className="    m-auto  lg:w-[150px]  md:w-[90px] rounded-4xl bg-white p-7 shadow-2xl ">helo</div>
        </div> */}
  <div className="absolute top-57 w-80 md:w-[300px] lg:w-[900px] px-3 flex justify-center h-25">
  <div className="rounded-3xl bg-white p-5 lg:w-[780px] md:w-[270px] grid grid-cols-3 gap-6 shadow-2xl text-[#b39376]">

    <div>
      <p className="text-sm italic">FACTURE À :</p>
      <p className="font-bold text-xl mt-2 text-black break-words">
        {client.nom || ""}
      </p>
    </div>

    <div>
      <p className="text-sm italic">CONTACT :</p>
      <p className="font-bold text-xl mt-2 text-black break-words">
        {client.numero || ""}
      </p>
    </div>

    <div>
      <p className="text-sm italic">ADRESSE :</p>
      <p className="font-bold text-xl mt-2 text-black break-words">
        {client.adresse || ""}
      </p>
    </div>

  </div>
</div>
      <div className="mt-15 flex justify-center    ">
        <div className="w-full max-w-4xl  p-4 rounded-xl">
          {/* Header */}
          <div className="grid grid-cols-4 font-bold text-center  pb-3">
            <h1 className="  ">Quantité</h1>
            <h1 className="  ">Description</h1>
          
            <h1 className="  ">P.Unitaire</h1>

            <h1 className="  "> Total</h1>
            <div className="  ">
              {/* <button
                onClick={() => {
                  addRow();
                }}
              >
                {" "}
                <i class="fa-solid fa-square-plus"></i>
              </button> */}
            </div>
          </div>

          {datainvoice.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 items-center mt-4"
            >
              {/* Produit */}
              {/* <select
                className="border rounded-full px-3 py-2 text-sm"
                value={item.produit}
                onChange={(e) => updateRow(index, "produit", e.target.value)}
              >
                <option value="">Choisir...</option>
                <option value="Monobloc">Monobloc</option>
                <option value="Porte aluminium">Porte aluminium</option>
                <option value="fenetre aluminium">Fenetre aluminium</option>
                <option value="Fer forgé">Fer forgé</option>
                <option value="Rouleaux rideaux">Rouleaux rideaux</option>
                <option value="Moustiquaire">Moustiquaire</option>
                <option value="Caisson">Caisson</option>
              </select> */}

              {/* Hauteur */}
              {/* <input
                type="number"
                placeholder="cm"
                className="border rounded-full px-3 py-2"
                value={item.hauteur}
                onChange={(e) => updateRow(index, "hauteur", e.target.value)}
              /> */}

              {/* Largeur */}
              {/* <input
                type="number"
                placeholder="cm"
                className="border rounded-full px-3 py-2"
                value={item.largeur}
                onChange={(e) => updateRow(index, "largeur", e.target.value)}
              /> */}

              {/* Quantité */}
              {/* <input
                type="number"
                className="border rounded-full px-3 py-2"
                value={item.quantite}
                onChange={(e) => updateRow(index, "quantite", e.target.value)}
              /> */}
               {/* description */}
               <div className="text-center text-gray-500">
                {item.quantite|| "........"}
              </div>
                {/* Quantité */}

              <div className="text-center text-gray-500">
                {item.designation || "........"}
              </div>
              {/* Prix */}
              <div className="text-center text-gray-500">
                {item.unitPrice|| "......."}
              </div>
              {/* Montant */}
              <div className="text-center text-gray-500">
                {item.totalLine || "........"}
              </div>

              {/* Actions */}
              
              {/* <Popup1
                open={open}
                setOpen={setOpen}
                formdata={formdata}
                setformdata={setformdata}
                activeform={activeform}
                invoice={invoice}
                setdatafinal={setdatafinal}
                setRows={setRows}
                Target={rows[index]}
                index={index}
                selectedRow={selectedRow}
                setpayant={setpayant}
                updateRow={updateRow}
                typepaiement={typepaiement}
              /> */}
            </div>
          ))}
        </div>
      </div>
      {/* <div className=" bg-[#3B2414] flex justify-center      w-[90%] rounded-3xl p-5  m-auto mb-4 ">
        <div className="   shadow-2xl flex flex-col text-[#b39376] font-bold gap-2 ">
          <div className="grid     grid-cols-2    ">
            <h1
              className="mb-2  self-center font-bold  "
            >
              type de paiement :
            </h1>
            <h1>{datapaiment.typepaiement || ""}</h1>

          </div>
           {datapaiment.typepaiement ==="acompte" && <div className="grid     grid-cols-2   ">
            <h1
              className="mb-2  self-center font-bold  "
            >
               {`L'Acompte: ${datapaiment.montantapayer - datapaiment.reste}` } 
            </h1>
            <h1>{`la reste: ${ datapaiment.reste} `} </h1>
            </div>}
             <div className="grid     grid-cols-2   gap-2 ">
            <h1
              className="mb-2  self-center font-bold  "
            >
              Montant a payer :
            </h1>
            <h1>{datapaiment.montantapayer || ""}</h1>

          </div>
            
         
             
        </div>
      </div> */}


      
      <div className="w-[90%] mx-auto mb-4 rounded-3xl bg-[#3B2414] p-6 shadow-xl">
  <div className="space-y-4 text-[#d2b49c]">

    <div className="grid grid-cols-2 border-b border-[#6b4a35] pb-3">
      <span className="font-bold">Type de paiement :</span>
      <span className="text-right font-bold text-xl ">{datapaiment.typepaiement || "-"}</span>
    </div>

    {datapaiment.typepaiement === "acompte" && (
      <div className="grid grid-cols-2 gap-y-2 border-b border-[#6b4a35] pb-3">
        <span className="font-bold ">Acompte :</span>
        <span className="text-right">
          {datapaiment.montantapayer - datapaiment.reste} DT
        </span>

        <span className="font-bold">Reste :</span>
        <span className="text-right">
          {datapaiment.reste} DT
        </span>
      </div>
    )}

    <div className="grid grid-cols-2">
      <span className="font-bold text-lg">Montant à payer :</span>
      <span className="text-right text-lg font-bold text-white">
        {datapaiment.montantapayer || 0} DT
      </span>
    </div>

  </div>
</div>
      <div className="bg-white px-13 py-6 border-t border-gray-100">
  {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600"> */}
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm text-gray-600">
    <div>
      <h4 className="font-bold text-[#3B2414] mb-2 tracking-wide">
        SHOWROOM
      </h4>
      <address className="not-italic leading-relaxed space-y-0.5">
        <p>*Mjez le Beb, Derrière Bank BNA*</p>
        <p>*165, Rue Khaled Ibn Walid</p>
        <p>Douar Hicher, Manouba*</p>
        <p>*Riadh Zouhour, Rue Mateur*</p>
      </address>
    </div>

    <div>
      <h4 className="font-bold text-[#3B2414] mb-2 tracking-wide">
        CONTACT
      </h4>
      <ul className="leading-relaxed space-y-0.5">
        <li>98 588 585</li>
        <li>98 626 396</li>
        <li>51 075 024</li>
        <li>58 277 351</li>
      </ul>
    </div>

   
  </div> */}
  <div className="grid grid-cols-3 gap-8 text-sm text-gray-600">
  {/* Showroom */}
  <div>
    <h4 className="font-bold text-[#3B2414] mb-2">SHOWROOM</h4>
    <address className="not-italic leading-relaxed space-y-0.5">
      <p>Mjez le Beb, Derrière Bank BNA</p>
      <p>165, Rue Khaled Ibn Walid</p>
      <p>Douar Hicher, Manouba</p>
      <p>Riadh Zouhour, Rue Mateur</p>
    </address>
  </div>

  {/* Contact */}
  <div>
    <h4 className="font-bold text-[#3B2414] mb-2">CONTACT</h4>
    <ul className="leading-relaxed space-y-0.5">
    <li>51 075 024</li>
      <li>98 588 585</li>
      <li>98 626 396</li>
      
      <li>58 277 351</li>
    </ul>
  </div>

  {/* Signature */}
  <div>
    <h4 className="font-bold text-[#3B2414] mb-2">SIGNATURE</h4>
    <div className="h-24 border border-gray-400 rounded-md"></div>
  </div>
</div>
   <div className="mt-4">
     
      <h1 className="leading-relaxed text-center">
        Logiciel de facturation développé par Aziza Jabli
      </h1>
    </div>
  
</div>
    </div>
    </>
  )
}
