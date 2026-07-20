import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Footer from '../components/Footer'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div>
            <div className='py-10'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='lg:w-1/2'>
                        <img src={assets.contact_img} alt='Contact' className='w-full rounded-xl object-cover' />
                    </div>
                    <div className='lg:w-1/2 space-y-6'>
                        <h1 className='text-3xl sm:text-4xl font-medium text-gray-800'>Contact Us</h1>
                        <p className='text-gray-600'>
                            We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
                        </p>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label className='block text-gray-700 font-medium mb-2 text-sm'>Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                    placeholder='Your name'
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
                            <div>
                                <label className='block text-gray-700 font-medium mb-2 text-sm'>Message</label>
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                    placeholder='Your message'
                                />
                            </div>
                            <button
                                type='submit'
                                className='bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
