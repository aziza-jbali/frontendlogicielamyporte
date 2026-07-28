import { Bell, Rocket, User, DoorOpen, Library, LogOut } from "lucide-react";
import { useState } from "react";
import Pagination from "./Pagination";
import Popup1 from "./Popup1";
import { frameData } from "framer-motion";
export default function Invoicestep({
  setactiveform,
  activeform,
  client,
  invoice,
  setdatafinal,
  datafinal,
}) {
  console.log("invoiceyht", invoice);
  console.log("client client", client);
  // const [rows, setRows] = useState([1]);
  const [payant, setpayant] = useState(0);
  const [typepaiement, settypedepaiment] = useState("");
  const [acompte,setacompte]=useState(null)
  console.log("payanthhhh", payant);
  const [rows, setRows] = useState([
    {
      produit: "",
      hauteur: "",
      largeur: "",
      quantite: "",
      prixUnitaire: "",
      montant: "",
    },
  ]);
  // formdata.montant
  // formdata.prixUnitaire
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  // console.log("here",selected)
  // console.log("voila le client ",client)
  // console.log("regarder
  // ,",invoice)
  // console.log("regarderid,",invoice._id)

  console.log("hellllllloooobgjhhx225323");
  // function addRow() {
  //   setRows([...rows, rows.length + 1]);
  // }
  const [formdata, setformdata] = useState({});
  console.log("bitches", formdata);
  function addRow() {
    setRows([
      ...rows,
      {
        produit: "",
        hauteur: "",
        largeur: "",
        quantite: "",

        prixUnitaire: "",
        montant: "",
      },
    ]);
  }
  console.log("rowwwww", rows);

  function updateRow(index, field, value) {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  }

  function removeRow(index) {
    setRows(rows.filter((_, i) => i !== index));
  }

  return (
    <div className="w-80 relative bg-white   md:w-[300px] lg:w-[900px]       rounded-3xl  overflow-hidden   ">
      <div className="relative overflow-hidden h-70  bg-[#3B2414]        ">
        <div className="absolute w-72 h-72 rounded-full bg-[#6b4224] opacity-90 -top-25 -right-19 "></div>
        <div className=" text-[#ffc186] bg-[#996e47] absolute right-12 rounded-2xl text-sm h-8 top-19 w-26 p-1 text-center border-1 font-bold border-[#ffcea0] ">
          date
          {/* <select
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
          </select> */}
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
          <h3 className="text-white">{invoice.date.split("T")[0] || " "}</h3></div>
          
       </div>
      </div>
      {/* <div className="absolute  top-56  md:w-[300px] lg:w-[800px]  w-80       px-3 ">
          <div className="    m-auto  lg:w-[150px]  md:w-[90px] rounded-4xl bg-white p-7 shadow-2xl ">helo</div>
        </div> */}
      <div className="absolute top-57 w-80 md:w-[300px] lg:w-[900px] px-3 flex justify-center h-25  ">
        <div className=" rounded-3xl bg-white p-4 lg:w-[780px] md:w-[270px] flex justify-between shadow-2xl text-[#b39376] ">
          <div className=" w-1/2 px-2">
            <p>FACTURE A : </p>
            <p className="font-bold text-xl text-black">{client.nom}</p>
          </div>
          <div className=" w-1/2 px-2  ">
            <p className="">Contact :</p>
            <p className="font-bold text-xl text-black"> {client.numero}</p>
          </div>
        </div>
      </div>
      <div className="mt-15 flex justify-center    ">
        <div className="w-full max-w-4xl  p-4 rounded-xl">
          {/* Header */}
          <div className="grid grid-cols-7 font-bold text-center  pb-3">
            <h1 className="  ">Produit</h1>
            <h1 className="  ">Hauteur</h1>
            <h1 className="  ">Largeur</h1>
            <h1>Quantité</h1>
            <h1 className="  ">P.Unitaire</h1>

            <h1 className="  ">Montant</h1>
            <div className="  ">
              <button
                onClick={() => {
                  addRow();
                }}
              >
                {" "}
                <i class="fa-solid fa-square-plus"></i>
              </button>
            </div>
          </div>

          {rows.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-7 gap-4 items-center mt-4"
            >
              {/* Produit */}
              <select
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
              </select>

              {/* Hauteur */}
              <input
                type="number"
                placeholder="cm"
                className="border rounded-full px-3 py-2"
                value={item.hauteur}
                onChange={(e) => updateRow(index, "hauteur", e.target.value)}
              />

              {/* Largeur */}
              <input
                type="number"
                placeholder="cm"
                className="border rounded-full px-3 py-2"
                value={item.largeur}
                onChange={(e) => updateRow(index, "largeur", e.target.value)}
              />

              {/* Quantité */}
              <input
                type="number"
                className="border rounded-full px-3 py-2"
                value={item.quantite}
                onChange={(e) => updateRow(index, "quantite", e.target.value)}
              />

              {/* Prix */}
              <div className="text-center text-gray-500">
                {item.prixUnitaire || "......."}
              </div>
              {/* Montant */}
              <div className="text-center text-gray-500">
                {item.montant || "........"}
              </div>

              {/* Actions */}
              <div className="flex justify-evenly">
                <button onClick={() => removeRow(index)}>
                  <i className="fa-solid fa-trash"></i>
                </button>

                <button>
                  <i className="fa-solid fa-pen"></i>
                </button>

                <button
                  onClick={() => {
                    setOpen(true);
                    setactiveform(item.produit);
                    setSelectedRow(index);
                    console.log("selectedRow", selectedRow);
                    let a = index;
                    console.log("aaaa", a);
                    // console.log("item",item);
                    console.log("ahwa", rows[index]);
                    setformdata(rows[selectedRow]);
                  }}
                >
                  <i className="fa-solid fa-gear"></i>
                </button>
              </div>
              <Popup1
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
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-[#3B2414] flex justify-center      w-[90%] rounded-3xl p-5  m-auto mb-4 ">
        <div className="   shadow-2xl flex flex-col text-[#b39376] font-bold gap-2 ">
          <h1 className="mb-2">{`Totale :  ${payant}`}</h1>
          <div className="grid     grid-cols-2   gap-2 ">
            <h1
              className="mb-2  self-center font-bold  "
            >
              type de paiement :
            </h1>

            <select
              className="  rounded-full border border-gray-300 px-2 py-2 bg-gray-50"
              value={typepaiement}
              // onChange={(e) =>
              //  settypedepaiment (
              //     (e)=> e.target.value,
              //   )
              // }
              onChange={(e) => settypedepaiment(e.target.value)}
            >
              <option value="">Choisir...</option>
              <option value="acompte">Acompte</option>
              <option value="paiement total">Paiement total</option>
            </select>
          </div>
             {typepaiement==="acompte" && <div className=" flex flex-col"><div className="gap-2  grid grid-cols-2"><h1 className="self-center">L'acompte est : </h1>
              <input
                type="number"
                placeholder="Dinar"
                className="border bg-white rounded-full px-3 py-2"
                value={acompte}
                onChange={(e) => setacompte(e.target.value)}
              /></div>
              <h1>{` le Reste est : ${payant -acompte}` }</h1>
             </div> }
             
        </div>
      </div>
      {/* <div className="bg-white px-5">
              <div className="grid grid-cols-3 content-between">
                 <div className=""><h1 className="font-bold mb-1.5">SHOWROOM :</h1>
                 <h3>Mjez le Beb Deriere Bank BNA</h3>
                 <h3>165,Rue Khaled Ibn Walid Douar Hicher,Manouba</h3>
                 <h3>Riadh,ZounefRue Mateur</h3></div>
                 <div><h1 className="  font-bold mb-1.5">CONTACT :</h1>
                 <h3>98 588 585</h3>
                 <h3>98 626 396</h3>
                 <h3> 51 075 024</h3>
                 <h3>58 277 351</h3>
                
                 </div>
                 <div className=""><h1 className="font-bold mb-1.5">AMY PORTE INVOICE :</h1>
                 <h3>Logiciel de facturation est developper par AZIZA JABLI</h3>
                 </div>
              </div>
      </div> */}
      <div className="bg-white px-13 py-6 border-t border-gray-100">
  {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600"> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm text-gray-600">
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

   
  </div>
   <div className="mt-2">
     
      <h1 className="leading-relaxed text-center">
        Logiciel de facturation développé par Aziza Jabli
      </h1>
    </div>
  
</div>
    </div>
  );
}
// bg-[#854F0B]
