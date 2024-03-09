import React from 'react'
import img from '../Resources/Images/NikeMetcon9.png'

const NikePhotos = () => {
  return (
    < div className='mb-10'>
    <div className='text-left ml-10 '>
        <h1>Don't Miss</h1>
    </div>

    <div className='flex justify-center gap-2 items-center mx-10'>
      <div className='' >
        <div className=' w-[720px] h-[700px] bg-gray-400 relative '>
          <video src={require('../Resources/Video/Librone.mp4')} autoPlay muted loop> </video>
          <h2 className='absolute bottom-28 font-semibold text-xl left-12 text-black'>Ja 1 EP & LeBron NXXT Gen</h2>
          <button className='absolute bottom-12 left-12 bg-black text-white px-5 font-bold h-8 rounded-2xl'>Get It First</button>
        </div>
      </div>
      <div className='m-auto  bg-red-300 relative w-[720px]' >
          <img src={img} alt="" className=' h-[700px] w-[100%]' />
          <h2 className='absolute bottom-44 font-semibold text-xl left-12 text-white'>Nike Metcon9</h2>
          <p className='absolute bottom-24 left-12 text-white text-justify font-bold'>For lifters, trainers, go getters. From deadlifts to squats, box jumps to <br />row</p>
          <button className='absolute bottom-12 left-12 bg-white text-black px-5 font-bold h-8 rounded-2xl'>Shop</button>
      </div>
    </div>
    </div>
  )
}
export default NikePhotos