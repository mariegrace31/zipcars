import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h2>Find Your Perfect Ride in Minutes</h2>
        <p>Discover the freedom of seamless car rentals. Choose from a variety of vehicles,
          enjoy competitive rates, and hit the road with confidence.</p>
          <button>Explore Cars <FaArrowRight /> </button>
      </div>
      <div>
        <Image src='/HomePImage.jpeg'
        alt='Hero'
        width={400}
        height={500}
        className='border-green-700' />
      </div>
    </div>
  )
}

export default Hero;
