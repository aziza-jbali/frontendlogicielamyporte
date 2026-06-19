import { UserCheckIcon } from "@animateicons/react/lucide";
import { FolderOpenIcon } from "@animateicons/react/lucide";
import { DownloadIcon } from "@animateicons/react/lucide";





export default function Pagination({nb=3,}) {
  const arraypag=[{icon:UserCheckIcon,iscompleted:true},{icon:FolderOpenIcon,iscompleted:true},{icon:DownloadIcon,iscompleted:true}]
  return (
    <div>
      <div className="py-2">
  <nav >
    <ul className="flex  gap-8 pl-0 rounded list-none flex-wrap">
    {arraypag.map((iconn,index)=>{ 
      const islast=arraypag.length
      console.log(islast)
      return (<li >
          <div className="flex" >
        <div className="first:ml-0 text-xl font-semibold flex w-25 h-25 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500"><iconn.icon
  size={60}
  duration={1}
  color="black"
/></div>
       {(index !== 2)&& (      <div className="h-1 w-20 bg-black"></div>
)}
      </div>
      </li>)
})}
    
    </ul>
   
      
      
    
  </nav>
</div>
    </div>
  )
}



