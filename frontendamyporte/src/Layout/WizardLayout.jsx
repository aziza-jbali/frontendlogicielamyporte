import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import Buttonmultistep from '../components/Buttonmultistep'
import Clientstep from '../components/Clientstep'
import Invoicestep from '../components/Invoicestep'
export default function WizardLayout() {
  const [activeform,setactiveform]=useState("")
  const [invoice,setinvoice]=useState({})
  const [client,setclient]=useState({});
  console.log("voila le client",client)
  const [Myposition,setMyposition]=useState(1)
  return (
    <div className='flex flex-col  min-h-screen  items-center justify-center    bg-linear-to-b from-[#faf6ef] to-[#f0e5d2]  gap-2'>
      <Pagination/>
      {/* <Clientstep/> */}
      {/* <Invoicestep/> */}
      {Myposition  ===1  &&(<Clientstep client={client} setclient={setclient} setactiveform={setactiveform} activeform={activeform}/>)}
      {Myposition  ===2  &&(<Invoicestep setactiveform={setactiveform} activeform={activeform}  client={client} invoice={invoice} />)}
      <Buttonmultistep Myposition={Myposition} setMyposition={setMyposition} client={client} invoice={invoice} setinvoice={setinvoice} />
    </div>
  )
}
