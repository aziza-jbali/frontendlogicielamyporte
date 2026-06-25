import { UserCheckIcon } from "@animateicons/react/lucide";
import { FolderOpenIcon } from "@animateicons/react/lucide";
import { DownloadIcon } from "@animateicons/react/lucide";

export default function Pagination({ nb = 3 }) {
  const arraypag = [
    { icon: UserCheckIcon, iscompleted: true },
    { icon: FolderOpenIcon, iscompleted: true },
    { icon: DownloadIcon, iscompleted: true },
  ];
  return (
    <div>
      <div className="py-2">
        <nav>
          <ul className="flex   pl-0 rounded list-none flex-wrap justify-between items-center "   style={{border:"1px green solid"}} >
            {arraypag.map((iconn, index) => {
              const islast = arraypag.length;
              console.log(islast);
              return (
                <li>
                  <div className="flex   ">
                    
                              <div className="first:ml-0 text-xl font-semibold flex w-15 h-15 p-0 items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                                      <iconn.icon size={60} duration={1} color="black" />
                            </div>
                    
                     {index !== 2 && (
                      <div
                        className="h-1 w-46 bg-black self-center mx-2 min-w-fit"
                      ></div>
                    )} 
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
