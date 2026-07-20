import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
            <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quae!</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto my-6 border border-gray-300 rounded-lg pl-3 overflow-hidden'>
                <input className='w-full sm:flex-1 outline-none py-4' type="email" placeholder='Enter your email' required />
                <button className='bg-black text-white text-xs sm:text-sm px-8 sm:px-10 py-4 w-full sm:w-auto' type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterBox
