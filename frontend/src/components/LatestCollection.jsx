import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import shopContextProvider from '../context/shopcontext'

const  LatestCollection = () => {
    const { products } = useContext(shopContext);
    const [latestproducts,setlatestproducts] = useState([]);
    useEffect(() =>{
      setlatestproducts(products.slice(0,10)); 
    },[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <title text1 = {'LATEST'} text2 = {'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio, nulla doloremque quis iste quasi modi neque odit! Blanditiis, dolores.
        </p>
      </div>
      {/* rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {
          latestproducts.map((items,index)=>(
            <productitems key={index} id = {items.id} image = {items.image}  name = {items.name} price = {items.price} />
          ))
        }

      </div>
      
    </div>
  )
}

export default LatestCollection;
