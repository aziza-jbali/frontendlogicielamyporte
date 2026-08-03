import React, { useEffect, useState, forwardRef } from "react";
import { DoorOpen } from "lucide-react";
import { getalllignesoffacture } from "../services/apiGestioninvoice.js";
import { notification } from "./toastService.js";

const InvoicePrint = forwardRef(
  ({ invoice, datapaiment, client,datainvoice }, ref) => {

  console.log("datahhhhhh",datainvoice)


    return (
      <div
        ref={ref}
        style={{
          width: "210mm",
          minHeight: "297mm",
          background: "white",
          padding: "12mm",
          boxSizing: "border-box",
        }}
        className="text-sm"
      >

        {/* HEADER */}
        <div className="relative overflow-hidden h-[250px] bg-[#3B2414] rounded-t-3xl">

          <div className="
            absolute w-72 h-72 rounded-full 
            bg-[#6b4224] opacity-90 
            -top-24 -right-20
          "></div>


          <div className="
            absolute right-12 top-16
            rounded-2xl text-sm
            p-2 text-center
            font-bold
            border
            bg-[#996e47]
            text-[#ffc186]
            border-[#ffcea0]
          ">
            Facture Passager
          </div>



          <div className="flex gap-3 mt-8 ml-8">

            <DoorOpen 
              className="w-14 h-14 text-[#fac28e]"
            />

            <div className="text-xl text-white font-bold">
              <p>STE AMY PORTE</p>
              <p>SINCE 1978</p>
            </div>

          </div>



          <div className="
              w-[70%] 
              grid grid-cols-2
              text-[#ffc186]
              m-auto
              p-3
              pt-10
          ">

            <div>
              <h1>N° FACTURE :</h1>
              <h3 className="text-white">
                {invoice.invoiceNumber || ""}
              </h3>
            </div>


            <div>
              <h1>DATE :</h1>
              <h3 className="text-white">
                {invoice.date?.split("T")[0]}
              </h3>
            </div>

          </div>

        </div>



        {/* CLIENT CARD */}
        <div className="
          -mt-2
          flex
          justify-center
        ">

          <div className="
            w-[90%]
            bg-white
            rounded-3xl
            p-5
            grid
            grid-cols-3
            gap-6
            shadow-xl
            text-[#b39376]
          ">


            <div>
              <p className="italic text-sm">
                FACTURE À :
              </p>

              <p className="font-bold text-xl text-black">
                {client.nom || ""}
              </p>
            </div>



            <div>
              <p className="italic text-sm">
                CONTACT :
              </p>

              <p className="font-bold text-xl text-black">
                {client.numero || ""}
              </p>
            </div>



            <div>
              <p className="italic text-sm">
                ADRESSE :
              </p>

              <p className="font-bold text-xl text-black">
                {client.adresse || ""}
              </p>
            </div>


          </div>

        </div>




        {/* PRODUCTS TABLE */}

        <div className="mt-10 px-5">

          <div className="
            grid 
            grid-cols-4
            font-bold
            text-center
            pb-3
          ">

            <h1>Quantité</h1>
            <h1>Description</h1>
            <h1>P.Unitaire</h1>
            <h1>Total</h1>

          </div>



          {
            datainvoice.map((item,index)=>(

              <div
                key={index}
                className="
                grid 
                grid-cols-4
                mt-4
                text-center
                text-gray-500
                "
              >

                <div>
                  {item.quantite || "........"}
                </div>


                <div>
                  {item.designation || "........"}
                </div>


                <div>
                  {item.unitPrice || "......."}
                </div>


                <div>
                  {item.totalLine || "........"}
                </div>


              </div>

            ))
          }


        </div>





        {/* PAYMENT */}

        {/* <div className="
          w-[90%]
          mx-auto
          mt-8
          rounded-3xl
          bg-[#3B2414]
          p-6
        ">


          <div className="text-[#d2b49c] space-y-4">
            <div className="grid grid-cols-2">

              <span className="
                font-bold
                text-lg
              ">
                Montant à payer :
              </span>


              <span className="
                text-right
                text-lg
                text-white
                font-bold
              ">

                {datapaiment.montantapayer || 0} DT

              </span>


            </div>


            <div className="
              grid grid-cols-2
              border-b
              border-[#6b4a35]
              pb-3
            ">

              <span className="font-bold">
                Type de paiement :
              </span>

              <span className="
                text-right
                text-xl
                font-bold
              ">
                {datapaiment.typepaiement || "-"}
              </span>

            </div>



            {
              datapaiment.typepaiement==="acompte" &&

              <div className="
              grid grid-cols-2
              border-b
              border-[#6b4a35]
              pb-3
              ">

                <span>
                  Acompte :
                </span>

                <span className="text-right">
                  {
                  datapaiment.montantapayer -
                  datapaiment.reste
                  } DT
                </span>


                <span>
                  Reste :
                </span>


                <span className="text-right">
                  {datapaiment.reste} DT
                </span>


              </div>

            }



            



          </div>


        </div> */}
        <div
  className="
    w-[90%]
    mx-auto
    mt-8
    rounded-3xl
    bg-[#3B2414]
    p-6
    shadow-xl
  "
>

  <div className="text-[#d2b49c] space-y-4">


    {/* Montant + Type paiement */}
    <div
      className="
        grid 
        grid-cols-2
        border-b
        border-[#6b4a35]
        pb-3
        gap-4
      "
    >

      <div className="font-bold text-lg">
        Montant à payer :
      </div>

      <div className="
        text-right
        text-lg
        font-bold
        text-white
      ">
        {datapaiment.montantapayer || 0} DT
      </div>



      <div className="font-bold text-lg">
        Type de paiement :
      </div>

      <div className="
        text-right
        text-xl
        font-bold
        text-white
      ">
        {datapaiment.typepaiement || "-"}
      </div>


    </div>




    {/* Acompte */}
    {
      datapaiment.typepaiement === "acompte" && (

        <div
          className="
            grid
            grid-cols-2
            gap-y-2
            border-b
            border-[#6b4a35]
            pb-3
          "
        >

          <div className="font-bold text-lg">
            Acompte :
          </div>

          <div className="text-right text-lg
        font-bold
        text-white">
            {
              datapaiment.montantapayer -
              datapaiment.reste
            } DT
          </div>



          <div className="font-bold text-lg">
            Reste :
          </div>

          <div className="text-right text-lg text-white">
            {datapaiment.reste} DT
          </div>


        </div>

      )
    }


  </div>

</div>






        {/* FOOTER */}

        <div className="
          mt-10
          grid
          grid-cols-3
          gap-8
          text-gray-600
        ">


          <div>

            <h4 className="
              font-bold
              text-[#3B2414]
              mb-2
            ">
              SHOWROOM
            </h4>


            <p>Mjez le Beb, Derrière Bank BNA</p>
            <p>165, Rue Khaled Ibn Walid</p>
            <p>Douar Hicher, Manouba</p>
            <p>Riadh Zouhour, Rue Mateur</p>


          </div>



          <div>

            <h4 className="
            font-bold
            text-[#3B2414]
            mb-2
            ">
              CONTACT
            </h4>


            <p>51 075 024</p>
            <p>98 588 585</p>
            <p>98 626 396</p>
            <p>58 277 351</p>


          </div>




          <div>

            <h4 className="
            font-bold
            text-[#3B2414]
            mb-2
            ">
              SIGNATURE
            </h4>


            <div className="
              h-24
              border
              border-gray-400
              rounded-md
            "></div>


          </div>


        </div>



        <div className="
          mt-5
          text-center
        ">
          Logiciel de facturation développé par Aziza Jabli
        </div>



      </div>
    );
  }
);


export default InvoicePrint;