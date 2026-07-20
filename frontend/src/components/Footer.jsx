import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-16 pt-16 pb-8'>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
                    <div>
                        <Link to='/'><img src={assets.logo} className='w-36 mb-5' alt="Logo" /></Link>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            Discover the latest trends in fashion with our curated collection of clothing and accessories for everyone.
                        </p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 font-medium mb-4'>Company</h4>
                        <ul className='text-gray-600 text-sm space-y-2'>
                            <li><Link to='/' className='hover:text-black transition-colors'>Home</Link></li>
                            <li><Link to='/collection' className='hover:text-black transition-colors'>Shop</Link></li>
                            <li><Link to='/about' className='hover:text-black transition-colors'>About</Link></li>
                            <li><Link to='/contact' className='hover:text-black transition-colors'>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-gray-800 font-medium mb-4'>Support</h4>
                        <ul className='text-gray-600 text-sm space-y-2'>
                            <li><Link to='#' className='hover:text-black transition-colors'>FAQs</Link></li>
                            <li><Link to='#' className='hover:text-black transition-colors'>Shipping & Returns</Link></li>
                            <li><Link to='#' className='hover:text-black transition-colors'>Privacy Policy</Link></li>
                            <li><Link to='#' className='hover:text-black transition-colors'>Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-gray-800 font-medium mb-4'>Get in Touch</h4>
                        <p className='text-gray-600 text-sm mb-3'>+1 (123) 456-7890</p>
                        <p className='text-gray-600 text-sm'>contact@shop.com</p>
                    </div>
                </div>
                <div className='border-t border-gray-300 pt-8 text-center'>
                    <p className='text-gray-600 text-sm'>
                        © 2025 Shop. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
