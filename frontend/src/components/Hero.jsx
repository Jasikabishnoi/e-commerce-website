import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-200 rounded-xl overflow-hidden'>
      {/* hero left side  */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4 sm:px-8'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141] '></p>
            <p className='font-medium text-sm md:text-base'>Our Bestseller</p>
          </div>
          <h1 className='font-serif text-3xl sm:text-4xl lg:text-5xl leading-relaxed my-3'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'>
            <Link to='/collection' className='font-semibold text-sm md:text-base hover:text-black transition-colors'>Shop Now</Link>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141] '></p>
          </div>
        </div>
      </div>
      {/* hero right side */}
      <img className='w-full sm:w-1/2 object-cover' src={assets.hero_img} alt="Hero" />
    </div>
  )
}

export default Hero;
