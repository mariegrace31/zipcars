import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h2 className='font-bold text-3xl md:text-6xl'>Find Your Perfect Ride in Minutes</h2>
        <p className='text-gray-500 py-2 md:text-2xl md:py-8'>Discover the freedom of seamless car rentals. Choose from a variety of vehicles,
          enjoy competitive rates, and hit the road with confidence.</p>
        <button className='bg-green-700 flex gap-2 items-center p-2 rounded-md text-white md:p-3 md:text-xl md:my-8'>Explore Cars <FaArrowRight />  </button>
             <div></div>
      </div>
      
      <div>
        <Image src='/HomePImage.jpeg'
        alt='Hero'
        width={400}
        height={500}
        className='border-green-700 py-4 object-cover md:w-5/6 md:mx-20 md:h-96' />
      </div>
    </div>
  )
}

export default Hero;
