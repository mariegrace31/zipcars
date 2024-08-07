import { UserButton } from '@clerk/nextjs';
import React from 'react';

function NavBar() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
      <h1 className='font-bold text-2xl font-serif italic'>Zip<span className=' text-green-700'>Cars</span></h1>
      <div className='hidden md:flex gap-8'>
        <h2 className='hover:text-green-700 font-light text-lg cursor-pointer'>Home</h2>
        <h2 className='hover:text-green-700 font-light text-lg cursor-pointer'>History</h2>
        <h2 className='hover:text-green-700 font-light text-lg cursor-pointer'>Contact Us</h2>
      </div>
      <UserButton />
    </div>
  )
}

export default NavBar;
