import React, { useState } from 'react'
import Footer from '../components/Footer'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(isLogin ? 'Login successful!' : 'Signup successful!')
        setFormData({ name: '', email: '', password: '' })
    }

    return (
        <div>
            <div className='py-10 max-w-md mx-auto'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl sm:text-4xl font-medium text-gray-800'>
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {!isLogin && (
                        <div>
                            <label className='block text-gray-700 font-medium mb-2 text-sm'>Name</label>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required={!isLogin}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                                placeholder='Your name'
                            />
                        </div>
                    )}
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
                        <label className='block text-gray-700 font-medium mb-2 text-sm'>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800'
                            placeholder='Your password'
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors'
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <div className='text-center mt-6'>
                    <p className='text-gray-600 text-sm'>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className='text-gray-800 font-medium hover:underline'
                        >
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
