import React from 'react'
import nikeimage from '../Resources/Images/AirMax90LV8.jpg'
const MainCarousel = () => {
  return (
    <div className='MainCarousel-Container mx-10'>
        <div className='Carousel-img '>
            <img src={nikeimage}  alt="carousel-img" className='w-screen' />
        </div>
        <div className='carousel-content h-80 w-full'>
            <div className='text-center'>
                <h2 className='mt-10 font-semibold text-lg'>Air Max 90 LV8</h2>
                <h1 className='font-bold  text-center text-7xl mt-3 sans'>STYLE UP, STANDS OUT</h1>
                <p className='  text-center text-[18px] mt-5'>
                    Meant for the spotlight. Double stacked Air Units turns a classic silhouette into a modern icon. 
                    Make a bold statement in the 
                    <span>new Air Max 90 LVB,<br /> styled by NewJeans.</span> 
                </p>
            </div>
            <div>
            <div className='text-center p-10 space-x-2'>
              <button className='w-[100px] h-[40px] bg-black text-white rounded-full font-semibold text-lg '>Shop</button>
              <button className='w-[150px] h-[40px] bg-black text-white rounded-full font-semibold text-lg'>Learn More</button>

            </div>
          </div>
        </div>
    </div>
  )
}
export default MainCarousel
