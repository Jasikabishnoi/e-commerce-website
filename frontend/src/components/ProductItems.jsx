import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, image, name, price }) => {
    const { currency } = useContext(shopContext);
    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden rounded-lg'>
                <img className='hover:scale-110 transition ease-in-out duration-300 w-full aspect-square object-cover' src={image[0]} alt={name} />
            </div>
            <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}

export default ProductItems
