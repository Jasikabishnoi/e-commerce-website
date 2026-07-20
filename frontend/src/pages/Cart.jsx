import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shopContext } from '../context/shopContext'
import { assets } from '../assets/assets'
import Footer from '../components/Footer'

const Cart = () => {
    const { cartItems, products, currency, delivery_fee, addToCart, removeFromCart, getTotalAmount, getCartCount } = useContext(shopContext)
    const totalAmount = getTotalAmount()

    // Get cart items array with product details
    const getCartItemsArray = () => {
        const items = []
        for (const productId in cartItems) {
            const product = products.find(p => p._id === productId)
            if (product) {
                for (const size in cartItems[productId]) {
                    items.push({
                        id: `${productId}-${size}`,
                        product,
                        size,
                        quantity: cartItems[productId][size]
                    })
                }
            }
        }
        return items
    }

    const cartItemsArray = getCartItemsArray()

    return (
        <div>
            <div className='py-10'>
                <h1 className='text-2xl sm:text-3xl font-medium text-gray-800 mb-8'>Your Cart</h1>
                {cartItemsArray.length === 0 ? (
                    <div className='text-center py-20'>
                        <p className='text-gray-600 mb-4'>Your cart is empty</p>
                        <Link to='/collection' className='inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors'>
                            Shop Now
                        </Link>
                    </div>
                ) : (
                    <div className='flex flex-col lg:flex-row gap-10'>
                        {/* cart items */}
                        <div className='lg:w-2/3'>
                            {cartItemsArray.map(item => (
                                <div key={item.id} className='flex gap-4 py-6 border-b border-gray-200'>
                                    <img src={item.product.image[0]} alt={item.product.name} className='w-24 h-24 object-cover rounded-lg' />
                                    <div className='flex-1'>
                                        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3'>
                                            <Link to={`/product/${item.product._id}`} className='font-medium text-gray-800 hover:underline'>
                                                {item.product.name}
                                            </Link>
                                            <p className='font-semibold text-gray-800'>{currency}{item.product.price * item.quantity}</p>
                                        </div>
                                        <p className='text-gray-600 text-sm mb-3'>Size: {item.size}</p>
                                        <div className='flex items-center gap-3'>
                                            <button
                                                onClick={() => removeFromCart(item.product._id, item.size)}
                                                className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-gray-800 transition-colors'
                                            >
                                                -
                                            </button>
                                            <span className='text-gray-800 font-medium'>{item.quantity}</span>
                                            <button
                                                onClick={() => addToCart(item.product._id, item.size)}
                                                className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-gray-800 transition-colors'
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => {
                                                    // Remove all quantity
                                                    for (let i = 0; i < item.quantity; i++) {
                                                        removeFromCart(item.product._id, item.size)
                                                    }
                                                }}
                                                className='ml-4 text-gray-500 hover:text-red-600 transition-colors'
                                            >
                                                <img src={assets.bin_icon} alt='Remove' className='w-5' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* order summary */}
                        <div className='lg:w-1/3 bg-gray-100 rounded-xl p-6 h-fit'>
                            <h2 className='text-xl font-medium text-gray-800 mb-6'>Order Summary</h2>
                            <div className='space-y-4 mb-6'>
                                <div className='flex justify-between'>
                                    <p className='text-gray-600'>Subtotal</p>
                                    <p className='text-gray-800'>{currency}{totalAmount}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-gray-600'>Shipping</p>
                                    <p className='text-gray-800'>{currency}{delivery_fee}</p>
                                </div>
                                <div className='border-t border-gray-300 pt-4 flex justify-between'>
                                    <p className='text-gray-800 font-medium'>Total</p>
                                    <p className='text-gray-800 font-semibold'>{currency}{totalAmount + delivery_fee}</p>
                                </div>
                            </div>
                            <Link to='/placeorder' className='block w-full bg-gray-800 text-white text-center px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors'>
                                Place Order
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Cart
