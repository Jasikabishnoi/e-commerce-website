import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { shopContext } from '../context/shopContext'
import Footer from '../components/footer'

const Placeorder = () => {
    const { cartItems, products, currency, delivery_fee, getTotalAmount } = useContext(shopContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Order placed successfully!')
    }

    const totalAmount = getTotalAmount()

    return (
        <div>
            <div className='py-10'>
                <h1 className='text-3xl sm:text-4xl font-medium text-gray-800 mb-8'>Place Order</h1>
                <div className='flex flex-col lg:flex-row gap-10'>
                    {/* shipping form */}
                    <div className='lg:w-2/3'>
                        <h2 className='text-xl font-medium text-gray-800 mb-6'>Shipping Details</h2>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2 text-sm'>Full Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                        placeholder='Your full name'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2 text-sm'>Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                        placeholder='Your email'
                                    />
                                </div>
                            </div>
                            <div>
                                <label className='block text-gray-700 font-medium mb-2 text-sm'>Phone</label>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                    placeholder='Your phone number'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700 font-medium mb-2 text-sm'>Address</label>
                                <input
                                    type='text'
                                    name='address'
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                    placeholder='Your address'
                                />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2 text-sm'>City</label>
                                    <input
                                        type='text'
                                        name='city'
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                        placeholder='Your city'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2 text-sm'>Zip Code</label>
                                    <input
                                        type='text'
                                        name='zip'
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                        placeholder='Your zip code'
                                    />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors'
                            >
                                Place Order
                            </button>
                        </form>
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
                        <Link to='/cart' className='block text-center text-gray-600 text-sm hover:underline'>
                            Back to Cart
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Placeorder
