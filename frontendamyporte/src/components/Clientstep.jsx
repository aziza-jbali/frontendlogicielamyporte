import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getallclients } from "../services/apiGestionclient.js";
import { div } from "framer-motion/client";
import { filter } from "framer-motion/m";
import { UserPlusIcon } from "@animateicons/react/lucide";
import Pagination from "./Pagination.jsx";
import Popup1 from "./Popup1.jsx";
export default function Clientstep({client,setclient,setactiveform ,activeform}) {
  const [query, setquery] = useState(" ");
  const [clients, setclients] = useState([]);
  // const [wantedclient,setwantedclient]=useState({})
  
   const [open,setOpen]=useState(false)
 
  useEffect(() => {
    const fetchclient = async () => {
      try {
        const response = await getallclients();
        console.log(response);
        const newarray = response.data.filter((client) =>
          Object.values(client).includes(query),
        );
        console.log(newarray);
        setclients(newarray);
        console.log("i am working");
      } catch (error) {
        console.error("❌ Erreur lors de la récupération du client :", error);
      }
    };
    fetchclient();
  }, [query]);
  return (
  
       
      <div className="flex flex-col relative gap-10 w-52 h-96 md:w-96 md:h-[300px] lg:w-[600px] lg:h-[300px]    mt-2 ">
        {/* <div>
          <Pagination /> 
        </div> */}

        <div className="  relative  flex flex-col gap-1 ">
          <div className="absolute   top-2.5 text-2xl left-0.5">
            <i class="fa-solid fa-magnifying-glass    "></i>
          </div>
          <input
            onChange={(e) => setquery(e.target.value)}
            type="search"
            className=" bg-orange-100 text-black   p-3 rounded-2xl  pl-8"
          />
          {console.log(query)}
          {/* Search seggestion  */}

          <div className="rounded-xl overflow-hidden  absolute top-13 z-10 cursor-pointer">
            {clients
              ? clients.map((client,index) => (
                  <div className=" bg-amber-50 p-2 fff  " key={client._id}  onClick={()=>{setclient(client)}}>
                    {" "}
                    <div className="ml-1 ">
                      <i class="fa-solid fa-magnifying-glass pr-4.5 "></i>
                      <span >{client.nom}</span>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
        {/* <div className=" flex  items-center justify-center fff">
           <UserPlusIcon size={64} duration={1} color="black" /> 
          <i class="fa-solid fa-people-group text-8xl text-orange-900"></i>

        </div> */}
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-orange-100 flex items-center justify-center">
            <i className="fa-solid fa-people-group text-5xl text-orange-900"></i>
          </div>
        </div>
        <div className=" flex items-center justify-center ">
           <div className="transition-all duration-300 ease-in-out fff hover:bg-[#8C5A3C] hover:p-5 hover:rounded-2xl hover:shadow-2xl" onClick={() => {
  setOpen(!open);
  setactiveform("client");
                    console.log("produgggggb");

}}>  <p> + Ajouter un client </p></div>
        </div>
        <Popup1 open={open} setOpen={setOpen} setclient={setclient} activeform={activeform}></Popup1>
      </div>
   
  );
}
            // <Link to="/register" className="ml-2 bg-linear-to-r   from-yellow-700 to-orange-900 px-4 py-1.5 rounded-full font-medium  text-white hover:shadow-lg hover:shadow-yellow-700/40 transition-all">
