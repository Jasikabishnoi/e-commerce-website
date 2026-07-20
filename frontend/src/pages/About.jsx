import React from 'react'
import { assets } from '../assets/assets'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <div className='py-10'>
                <div className='flex flex-col lg:flex-row gap-10 items-center'>
                    <div className='lg:w-1/2'>
                        <img src={assets.about_img} alt='About Us' className='w-full rounded-xl object-cover' />
                    </div>
                    <div className='lg:w-1/2 space-y-6'>
                        <h1 className='text-3xl sm:text-4xl font-medium text-gray-800'>About Us</h1>
                        <p className='text-gray-600 leading-relaxed'>
                            Welcome to our store! We are dedicated to bringing you the best quality products at affordable prices. Our journey began with a passion for fashion and a commitment to customer satisfaction.
                        </p>
                        <p className='text-gray-600 leading-relaxed'>
                            We carefully curate our collection to ensure that every product meets our high standards. From trendy apparel to timeless classics, we have something for everyone.
                        </p>
                        <p className='text-gray-600 leading-relaxed'>
                            Our mission is to make online shopping easy, enjoyable, and accessible to all. We believe in providing excellent customer service and a seamless shopping experience.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
