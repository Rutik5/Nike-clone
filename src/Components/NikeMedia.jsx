import React from 'react'

const NikeMedia = () => {
  return (
    <div className='mx-10'>
      <div className=''>
        <h2 className='text-xl' >Jordan Basketball</h2>
        <video src={require("../Resources/Video/JordenBasketballl.mp4")} autoPlay muted loop className='w-full mt-5 bg-gray-500 '>

        </video>
      </div>
      <div className='mt-20 w-[1280px] mx-auto'>
        <h2 className='text-center font-semibold'>'Alumni Blue'</h2>
        <h2 className='text-center text-6xl font-bold'>AIR JORDAN XXXVIII LOW</h2>
        <p className='text-center text-xl mt-9 '>Show ‘em how you ball with the newest Air Jordan XXXVIII Low. ‘Alumni Blue’ nods to the icons of <br />collegiate hoops history, with pops of blue across its all-black silhouette.</p>
        
        <div className='flex justify-center items-center'>
          <button className='bg-black text-white mt-4 w-24 p-3 font-bold rounded-full hover:bg-gray-600'>
            Shop
        </button>
        </div>
        
        
      </div>
    </div>
  )
}

export default NikeMedia