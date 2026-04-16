import React, { useContext, useEffect } from 'react'
import { Datacontext } from '../context/Datacontext'

const Carousel = () => {

  const { data, fetchAllProducts } = useContext(Datacontext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Products</h1>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {data?.map((item) => (
          <div key={item.id} className='border p-2 rounded shadow'>
            <img src={item.thumbnail} alt="" className='h-32 w-full object-cover' />
            <h2 className='font-semibold'>{item.title}</h2>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel