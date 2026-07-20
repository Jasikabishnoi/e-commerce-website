import React, { useContext, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'
import Footer from '../components/Footer'

const Collection = () => {
    const { products } = useContext(shopContext)
    const [category, setCategory] = useState('All')
    const [sortBy, setSortBy] = useState('default')

    // Get unique categories
    const categories = ['All', ...new Set(products.map(product => product.category))]

    // Filter and sort products
    const getFilteredProducts = () => {
        let filtered = category === 'All'
            ? [...products]
            : products.filter(product => product.category === category)

        // Sort products
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price)
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price)
        }
        return filtered
    }

    const filteredProducts = getFilteredProducts()

    return (
        <div>
            <div className='py-10'>
                <div className='text-center mb-8'>
                    <Title text1={'OUR'} text2={'COLLECTION'} />
                    <p className='text-gray-600 text-sm sm:text-base'>Browse our complete collection of products</p>
                </div>
                {/* filters */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
                    {/* category filter */}
                    <div className='flex gap-2 overflow-x-auto pb-2 sm:pb-0'>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${category === cat ? 'bg-gray-800 text-white' : 'border border-gray-300 text-gray-700 hover:border-gray-800'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    {/* sort filter */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className='border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none focus:border-gray-800'
                    >
                        <option value='default'>Sort by: Default</option>
                        <option value='price-low'>Price: Low to High</option>
                        <option value='price-high'>Price: High to Low</option>
                    </select>
                </div>
                {/* products grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {filteredProducts.map((item, index) => (
                        <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
                {filteredProducts.length === 0 && (
                    <div className='text-center py-20 text-gray-600'>No products found</div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Collection
