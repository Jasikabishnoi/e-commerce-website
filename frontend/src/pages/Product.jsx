import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/shopContext'
import Footer from '../components/Footer'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'

const Product = () => {
    const { productId } = useParams()
    const { products, currency, addToCart } = useContext(shopContext)
    const [imageIndex, setImageIndex] = useState(0)
    const [selectedSize, setSelectedSize] = useState('')
    const product = products.find(item => item._id === productId)
    const relatedProducts = products.filter(item => item.category === product?.category && item._id !== productId).slice(0, 4)

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size!')
            return
        }
        addToCart(product._id, selectedSize)
        alert('Product added to cart!')
    }

    if (!product) return <div className='text-center py-20 text-gray-600'>Product not found</div>

    return (
        <div>
            <div className='flex flex-col sm:flex-row gap-10 py-10'>
                {/* product images */}
                <div className='flex flex-col-reverse sm:flex-row gap-3 sm:w-1/2'>
                    <div className='flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto'>
                        {product.image.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Product ${index + 1}`}
                                className={`w-20 h-20 sm:w-24 sm:h-24 object-cover cursor-pointer rounded-lg ${imageIndex === index ? 'border-2 border-gray-800' : 'border border-gray-200'}`}
                                onClick={() => setImageIndex(index)}
                            />
                        ))}
                    </div>
                    <div className='flex-1'>
                        <img
                            src={product.image[imageIndex]}
                            alt={product.name}
                            className='w-full aspect-square object-cover rounded-xl'
                        />
                    </div>
                </div>
                {/* product details */}
                <div className='sm:w-1/2 flex flex-col gap-6'>
                    <h1 className='text-2xl sm:text-3xl font-medium text-gray-800'>{product.name}</h1>
                    <p className='text-xl font-semibold text-gray-800'>{currency}{product.price}</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-gray-600 font-medium'>Select Size:</p>
                        <div className='flex gap-3'>
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${selectedSize === size ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-300 text-gray-700 hover:border-gray-800'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className='bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors'
                    >
                        Add to Cart
                    </button>
                    <div className='pt-4 border-t border-gray-200'>
                        <h3 className='font-medium text-gray-800 mb-2'>Description</h3>
                        <p className='text-gray-600 leading-relaxed'>{product.description}</p>
                    </div>
                </div>
            </div>
            {/* related products */}
            {relatedProducts.length > 0 && (
                <div className='my-10'>
                    <div className='text-center py-4'>
                        <Title text1={'RELATED'} text2={'PRODUCTS'} />
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                        {relatedProducts.map((item, index) => (
                            <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Product
