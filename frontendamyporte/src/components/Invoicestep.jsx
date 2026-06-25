import { Bell, Rocket, User, DoorOpen, Library, LogOut } from "lucide-react";

export default function Invoicestep() {
  return (
    <div className="flex   justify-center items-center bg-linear-to-b from-[#faf6ef] to-[#f0e5d2]   min-h-screen ">
      <div className="w-80 relative bg-white  md:w-[300px] lg:w-[800px]     ">
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
        <div className="absolute top-56 w-80 md:w-[300px] lg:w-[800px] px-3 flex justify-center">
  <div className=" rounded-3xl bg-white p-4 lg:w-[680px] md:w-[270px] flex justify-between shadow-2xl text-[#b39376] ">
    <div className="   w-1/2 px-2"><p>FACTURE A : </p>
    <p className="font-bold text-xl text-black">lorem </p></div>
    <div className="   w-1/2 px-2  "><p className="">Contact :</p>
    <p className="font-bold text-xl text-black"> lorem</p></div>
  </div>
</div>
          <div className="mt-12">helo again</div>
      </div>
    
    </div>
  );
}
// bg-[#854F0B]
