// import { UserCheckIcon } from "@animateicons/react/lucide";
// import { FolderOpenIcon } from "@animateicons/react/lucide";
// import { DownloadIcon } from "@animateicons/react/lucide";

// export default function Pagination({ nb = 3 }) {
//   const arraypag = [
//     { icon: UserCheckIcon, iscompleted: true },
//     { icon: FolderOpenIcon, iscompleted: true },
//     { icon: DownloadIcon, iscompleted: true },
//   ];
//   return (
//     <div>
//       <div className="py-2">
//         <nav>
//           <ul className="flex   pl-0 rounded list-none flex-wrap justify-between items-center "   style={{border:"1px green solid"}} >
//             {arraypag.map((iconn, index) => {
//               const islast = arraypag.length;
//               console.log(islast);
//               return (
//                 <li>
//                   <div className="flex   ">
                    
//                               <div className="first:ml-0 text-xl font-semibold flex w-15 h-15 p-0 items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
//                                       <iconn.icon size={60} duration={1} color="black" />
//                             </div>
                    
//                      {index !== 2 && (
//                       <div
//                         className="h-1 w-46 bg-black self-center mx-2 min-w-fit"
//                       ></div>
//                     )} 
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }



import { UserCheckIcon, FolderOpenIcon, DownloadIcon } from "@animateicons/react/lucide";

export default function Pagination({ nb = 1 }) {
  // Define steps with their icons and matching labels
  const steps = [
    { icon: UserCheckIcon, label: "Client" },
    { icon: FolderOpenIcon, label: "Facture" },
    { icon: DownloadIcon, label: "Télécharger" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto py-5 px-4 fff">
      <nav aria-label="Progress">
        <ul className="flex items-center w-full">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < nb;
            const isActive = stepNumber === nb;

            return (
              <li 
                key={index} 
                className={`relative flex items-center ${
                  index !== steps.length - 1 ? "flex-1" : "flex-none"
                }`}
              >
                {/* Step Circle & Label Group */}
                <div className="flex flex-col items-center relative z-10 min-w-[5rem]">
                  {/* The Icon Wrapper Circle */}
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 shadow-sm
                      ${isActive 
                        ? "bg-[#5c3d2e] border-[#5c3d2e] text-white ring-4 ring-[#5c3d2e]/10" 
                        : isCompleted 
                        ? "bg-[#e8dec9] border-[#5c3d2e] text-[#5c3d2e]" 
                        : "bg-white border-stone-200 text-stone-400"
                      }`}
                  >
                    <step.icon 
                      size={24} 
                      duration={1} 
                      color={isActive ? "#ffffff" : isCompleted ? "#5c3d2e" : "#a8a29e"} 
                    />
                  </div>
                  
                  {/* The Text Label beneath the icon */}
                  <span 
                    className={`mt-2 text-xs tracking-wide transition-colors duration-300 whitespace-nowrap
                      ${isActive ? "text-[#5c3d2e] font-bold" : "text-stone-500 font-medium"}`}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connecting Line (Hidden after the last step) */}
                {/* {index !== steps.length - 1 && (
                  <div className="absolute top-7 left-[50%] right-[-50%] h-[2px] -translate-y-1/2 z-0 px-6 fff">
                    <div 
                      className={`h-full w-full transition-all duration-500 rounded
                        ${stepNumber < nb ? "bg-[#5c3d2e]" : "bg-stone-200"}`}
                    />
                  </div>
                )} */}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}