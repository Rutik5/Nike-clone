import '../App.css';
import basketball from '../Resources/Images/NikeBasketball.jpg'
import football from '../Resources//Images/NikeGolf.jpg'
import golf from '../Resources/Images/NikeTennis.jpg'
import trail from '../Resources/Images/NikeTrail.jpg'
import tennis from '../Resources/Images/NikeFootball.jpg'
import React from 'react';
// Import Swiper React components

const ShopBySport = () => {

  return (
   <div className=' mx-10 mb-10 '>
    <h2 className='text-xl pb-5 '> Shop by Sport</h2>
    <div className="swiper-container overflow-x-auto whitespace-nowrap ">
        
    <div className="swiper-wrapper mb-10">
    <div className="swiper-slide ">
          <img src={basketball} alt="" />
          <h2 className='pt-2 text-lg'> Nike Basketball</h2>
          <p className='pt-2 text-[15px]  mb-5'>Styles made for your game.</p>
          <h2 className='text-sm font-semibold hover:text-gray-500 underline hover:cursor-pointer w-10 mb-10'>Shop</h2>
        </div>
        <div className="swiper-slide">      
          <img src={golf} alt="" />
          <h2 className='pt-2 text-lg'>Nike Golf</h2>
          <p className='pt-2 text-[15px] mb-5'> Conquer any course in style.</p>
          <h2 className='text-sm font-semibold hover:text-gray-500 underline hover:cursor-pointer w-10'>Shop</h2>
        </div>
        <div className="swiper-slide">
          <img src={tennis} alt=""/>
          <h2 className='pt-2 text-lg'>Nike Tennis</h2>
          <p className='pt-2 text-[15px] mb-5'>Serve up in style.</p>
          <h2 className='text-sm font-semibold hover:text-gray-500 underline hover:cursor-pointer w-10'>Shop</h2>
        </div>
        <div className="swiper-slide">
          <img src={trail} alt="" />
          <h2 className='pt-2 text-lg'>Nike Trail</h2>
          <p className='pt-2 text-[15px] mb-5'>Gear that leads to wild places.</p>
          <h2 className='text-sm font-semibold hover:text-gray-500 underline hover:cursor-pointer w-10'>Shop</h2>
        </div>
        <div className="swiper-slide">
          <img src={football} alt="" />
          <h2 className='pt-2 text-lg'>Nike Football</h2>
          <p className='pt-2 text-[15px] mb-5 '>Bring mad style to the  pitch with the latest gear.</p>
          <h2 className='text-sm font-semibold hover:text-gray-500 underline hover:cursor-pointer w-10'>Shop</h2>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ShopBySport
