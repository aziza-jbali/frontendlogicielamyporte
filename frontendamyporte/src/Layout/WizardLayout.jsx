import React from 'react'
import Pagination from '../components/Pagination'
import Buttonmultistep from '../components/Buttonmultistep'
import Clientstep from '../components/Clientstep'
import Invoicestep from '../components/Invoicestep'
export default function WizardLayout() {
  return (
    <div className='flex flex-col  min-h-screen  items-center justify-center    bg-linear-to-b from-[#faf6ef] to-[#f0e5d2] fff gap-2'>
      <Pagination/>
      {/* <Clientstep/> */}
      <Invoicestep/>
      <Buttonmultistep/>
    </div>
  )
}
