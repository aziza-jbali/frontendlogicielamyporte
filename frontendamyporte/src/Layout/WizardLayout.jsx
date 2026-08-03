// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import React, { useState } from 'react'
// import Pagination from '../components/Pagination'
// import Buttonmultistep from '../components/Buttonmultistep'
// import Clientstep from '../components/Clientstep'
// import Invoicestep from '../components/Invoicestep'
// import InvoicePdfstep from '../components/InvoicePdfstep'

// export default function WizardLayout() {
//   const invoiceRef = useRef(null);
//   const [activeform,setactiveform]=useState("")
//   const [invoice,setinvoice]=useState({})
//   const [client,setclient]=useState({});
//   const [datafinal,setdatafinal]=useState({})
//   const [datapaiment,setdatapaiment]=useState({})
//   console.log("voila le client",client)
//   const [Myposition,setMyposition]=useState(1)
//   const handlePrint = useReactToPrint({
//   contentRef: invoiceRef,
//   documentTitle: "Facture",
// });
//   return (
//     <div ref={invoiceRef} className='flex flex-col  min-h-screen  items-center justify-center    bg-linear-to-b from-[#faf6ef] to-[#f0e5d2]  gap-2'>
//       <Pagination/>
//       {/* <Clientstep/> */}
//       {/* <Invoicestep/> */}
//       {Myposition  ===1  &&(<Clientstep client={client} setclient={setclient} setactiveform={setactiveform} activeform={activeform}/>)}
//       {Myposition  ===2  &&(<Invoicestep setactiveform={setactiveform} activeform={activeform} setdatapaiment={setdatapaiment} client={client} invoice={invoice}  setdatafinal={setdatafinal} datafinal={datafinal}/>)}
//       {Myposition ===3 && (<InvoicePdfstep invoice={invoice}    handlePrint={handlePrint} client={client} datapaiment={datapaiment}/>)}
//       <Buttonmultistep Myposition={Myposition} setMyposition={setMyposition} client={client} invoice={invoice} setinvoice={setinvoice} datapaiment={datapaiment} client={client} />
//     </div>
//   )
// }

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import React, { useState } from "react";

import Pagination from "../components/Pagination";
import Buttonmultistep from "../components/Buttonmultistep";
import Clientstep from "../components/Clientstep";
import Invoicestep from "../components/Invoicestep";
import InvoicePdfstep from "../components/InvoicePdfstep";
import InvoicePrint from "../components/InvoicePrint";


export default function WizardLayout() {

  const invoiceRef = useRef(null);

  const [activeform, setactiveform] = useState("");
  const [invoice, setinvoice] = useState({});
  const [client, setclient] = useState({});
  const [datafinal, setdatafinal] = useState({});
  const [datapaiment, setdatapaiment] = useState({});
  const [Myposition, setMyposition] = useState(1);
const [datainvoice,setdatainvoice] = useState([]);


  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: "Facture",
  });



  return (
    <div
      className="
        flex flex-col
        min-h-screen
        items-center
        justify-center
        bg-linear-to-b
        from-[#faf6ef]
        to-[#f0e5d2]
        gap-2
      "
    >

      <Pagination />


      {/* STEP 1 */}
      {Myposition === 1 && (
        <Clientstep
          client={client}
          setclient={setclient}
          setactiveform={setactiveform}
          activeform={activeform}
        />
      )}



      {/* STEP 2 */}
      {Myposition === 2 && (
        <Invoicestep
          setactiveform={setactiveform}
          activeform={activeform}
          setdatapaiment={setdatapaiment}
          client={client}
          invoice={invoice}
          setdatafinal={setdatafinal}
          datafinal={datafinal}
        />
      )}




      {/* STEP 3 - SCREEN VERSION */}
      {Myposition === 3 && (
        <InvoicePdfstep
          invoice={invoice}
          handlePrint={handlePrint}
          client={client}
          datapaiment={datapaiment}
          datainvoice={datainvoice} setdatainvoice={setdatainvoice}
        />
      )}





      {/* PRINT VERSION ONLY */}
      <div   style={{
    position: "absolute",
    left: "-9999px",
    top: "0"
  }}>

        <InvoicePrint
          ref={invoiceRef}
          invoice={invoice}
          client={client}
          datapaiment={datapaiment}
          datainvoice={datainvoice}
        />

      </div>





      <Buttonmultistep
        Myposition={Myposition}
        setMyposition={setMyposition}
        client={client}
        invoice={invoice}
        setinvoice={setinvoice}
        datapaiment={datapaiment}
      />


    </div>
  );
}