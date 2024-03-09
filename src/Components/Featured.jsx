import React from 'react'
import img3 from '../Resources/Images/NikeInvincible3.png'
import img4 from '../Resources/Images/NikeOneTop.png'
import img5 from '../Resources/Images/NikeACG.jpeg'

const Featured = () => {
  return (
    <div className='mb-20'>
      <h1 className='text-left pl-10 text-2xl mt-4 '>Featured</h1>
      <div className=' flex items-center justify-center gap-5 mx-10 mt-5'>
        <div className='relative'>
          <img src={img3} alt=""/>
          <h2 className='absolute bottom-28 font-semibold text-xl left-12 text-white'>Nike Invincible3</h2>
          <button className='absolute bottom-12 left-12 bg-white w-20 h-8 rounded-2xl hover:bg-gray-400'>Shop</button>
        </div>
        
        <div className='relative'>

           <img src={img4} alt="" />
           <h2 className='absolute bottom-28 font-semibold text-xl left-12 text-white'>Nike on Top</h2>
           <button className='absolute bottom-12 left-12 bg-white w-20 h-8 rounded-2xl hover:bg-gray-400'>Shop</button>
        </div>
       

       <div  className='relative'>
          <img src={img5} alt="" />
          <h2 className='absolute bottom-28 font-semibold text-xl left-12 text-white'>Nike ACG</h2>
          <button className='absolute bottom-12 left-12 bg-white w-20 h-8 rounded-2xl hover:bg-gray-400 '>Shop</button>
       </div>
        
      </div>
    </div>
  )
}

export default Featured