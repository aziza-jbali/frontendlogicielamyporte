import { Bell, Rocket, User, DoorOpen, Library, LogOut } from "lucide-react";
import { useState } from "react";
import Pagination from "./Pagination";
import Popup1 from "./Popup1";
import { frameData } from "framer-motion";
export default function Invoicestep({setactiveform ,activeform,client,invoice}) {
  console.log("invoiceyht",invoice)
  const [rows, setRows] = useState([1]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  console.log("here",selected)
  // console.log("voila le client ",client)
  // console.log("regarderbbbb,",invoice)
  // console.log("regarderid,",invoice._id)

  console.log("hellllllloooobgjhhx225323")
  function addRow() {
    setRows([...rows, rows.length + 1]);
  }
  
  const [formdata, setformdata] = useState({
      produit: "",
      largeur:"",
      hauteur:"",
      quantite:"",
      
    });
  

    
    console.log("votre produit",formdata.produit)
    console.log("la quantité",formdata.quantite)
    console.log("hauteur",formdata.hauteur)
    console.log(" largeur",formdata.largeur)
    console.log("regarderid,",invoice._id)
    console.log(" factureId",formdata.factureId)



  return (
      
      <div className="w-80 relative bg-white   md:w-[300px] lg:w-[900px] fff      ">
        <div className="relative overflow-hidden h-70  bg-[#3B2414]    ">
          <div className="absolute w-72 h-72 rounded-full bg-[#6b4224] opacity-90 -top-25 -right-19 "></div>
          <div className=" text-[#ffc186] bg-[#996e47] absolute right-12 rounded-2xl text-sm h-8 top-19 w-26 p-1 text-center border-1 font-bold border-[#ffcea0]">
            hello
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
        </div>
        {/* <div className="absolute  top-56  md:w-[300px] lg:w-[800px]  w-80       px-3 ">
          <div className="    m-auto  lg:w-[150px]  md:w-[90px] rounded-4xl bg-white p-7 shadow-2xl ">helo</div>
        </div> */}
        <div className="absolute top-56 w-80 md:w-[300px] lg:w-[900px] px-3 flex justify-center   ">
          <div className=" rounded-3xl bg-white p-4 lg:w-[780px] md:w-[270px] flex justify-between shadow-2xl text-[#b39376] ">
            <div className=" w-1/2 px-2">
              <p>FACTURE A : </p>
              <p className="font-bold text-xl text-black">lorem </p>
            </div>
            <div className=" w-1/2 px-2  ">
              <p className="">Contact :</p>
              <p className="font-bold text-xl text-black"> lorem</p>
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

            {/* Row */}
            {rows.map((item) => (
              <div
                className="grid grid-cols-7 gap-4 items-center mt-4 "
                key={item}
              >
                <select
                  className="border rounded-full px-3 py-2 text-sm   "
                  // value={selected}
                  value={formdata.produit}
                  onChange={(e) => {
                    setformdata({...formdata,produit:e.target.value})
                   }}

                >
                  <option value="Monobloc">Monobloc</option>
                  <option value="Portealuminium">Porte aluminium</option>
                  
                  <option value="fenetre aluminium">Fenetre aluminium</option>

                  <option value="ferforgie">Fer forgé</option>
                  <option value="Rouleauxrideaux">Rouleaux rideaux</option>
                  <option value="Moustiquaire">Moustiquaire</option>
                  <option value="Caisson">Caisson</option>
                </select>

                <input
                  type="number"
                  className="border rounded-full px-3 py-2   "
                  placeholder="cm"
                  value={formdata.hauteur}
                  onChange={(e)=>{setformdata({...formdata,hauteur:e.target.value})}}
                />

                <input
                  type="number"
                  className="border rounded-full px-3 py-2   "
                  placeholder="cm"
                  value={formdata.largeur}
                  onChange={(e)=>{setformdata({...formdata,largeur:e.target.value})}}
                />
                  <input  value={formdata.quantite } type="number" className="border rounded-full px-3 py-2" onChange={(e)=>setformdata({...formdata,quantite:e.target.value})} />
                <div className="text-center    text-gray-500">..........</div>

                <div className="text-center    text-gray-500">........</div>
                <div className="   flex justify-evenly ">
                  {" "}
                  <button >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button>
                    {" "}
                    <i class="fa-solid fa-pen"></i>
                  </button>
                  <button onClick={() => {setOpen(!open);
                      console.log("formaproduit",formdata.produit);

                       setactiveform(formdata.produit)
                  console.log("produggggg1222");
                                      
                  }}><i class="fa-solid fa-gear"></i></button>
                </div>
              </div>
            ))}
            <Popup1 open={open} setOpen={setOpen}  selected={selected} setSelected={setSelected} formdata={formdata} setformdata={setformdata} activeform={activeform} invoice={invoice}/>
          </div>
        </div>
      </div>
    
  );
}
// bg-[#854F0B]
