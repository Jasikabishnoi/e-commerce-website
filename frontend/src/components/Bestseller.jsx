import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const Bestseller = () => {
    const { products } = useContext(shopContext);
    const [bestsellers, setBestsellers] = useState([]);
    useEffect(() => {
        const bestproduct = products.filter((item) => item.bestseller);
        setBestsellers(bestproduct.slice(0, 5));
    }, [products])
    return (
        <div className='my-10'>
            <div className='text-center py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, omnis?</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestsellers.map((item, index) => (
                        <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default Bestseller
