import React from 'react'
import Footer from '../components/Footer'

const Orders = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-3xl sm:text-4xl font-medium text-gray-800 mb-8'>Your Orders</h1>
                <div className='text-center py-20'>
                    <p className='text-gray-600 mb-4'>No orders yet</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Orders
