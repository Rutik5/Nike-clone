import React from 'react';

import memberdays from '../Resources/Images/MemberDays.png'
import memberproduct from '../Resources/Images/MemberProduct.jpg'
import memberreward from '../Resources/Images/MemberRewards.jpg'
import sportapps from '../Resources/Images/SportsAndWellness.jpg'
import snkrs from '../Resources/Images/Snkrs.jpg'
import nikebyyou from  '../Resources/Images/NikeByYou.png'

const MemberBenefits = () => {
  return (
    <div className=' mx-10 mb-10 '>
       <h2 className='text-xl pb-12 '> Member Benefits</h2>
       <div className="swiper-container  whitespace-nowrap ">
       <div className="swiper-wrapper  mb-10  flex w-max  ">
        <div className="swiper-slide relative ">
              <img src={memberdays} alt="" />
             <h2 className='absolute bottom-36 font-semibold text-xl left-12 text-white'>Member Product</h2>
              <h2 className='absolute bottom-28 left-12 text-white '>Your Exclusive Access</h2>
              <button className='absolute bottom-12 left-12 bg-white w-24 h-9 rounded-2xl hover:bg-gray-400 '>Explore</button> 
          </div>
        <div className="swiper-slide relative ">
            <img src={memberproduct} alt="" />
            <h2 className='absolute bottom-36 font-semibold text-xl left-12 text-white'>Nike By You</h2>
              <h2 className='absolute bottom-28 left-12 text-white'>Your Customization Service</h2>
              <button className='absolute bottom-12 left-12 bg-white w-20 h-9 rounded-2xl hover:bg-gray-400 '>Shop</button> 
          </div>
        <div className="swiper-slide relative ">
            <img src={memberreward} alt="" />
            <h2 className='absolute bottom-36 font-semibold text-xl left-12 text-white'>Member Rewards</h2>
              <h2 className='absolute bottom-28 left-12 text-white'>How We Say Thank You</h2>
              <button className='absolute bottom-12 left-12 bg-white w-28 h-9 rounded-2xl hover:bg-gray-400'>Customize</button>
          </div>
        <div className="swiper-slide relative">
            <img src={nikebyyou} alt="" />
            <h2 className='absolute bottom-36 font-semibold text-xl left-12 text-white'>Member Days</h2>
              <h2 className='absolute bottom-28 left-12 text-white'>A Celebration Of You</h2>
              <button className='absolute bottom-12 left-12 bg-white w-28 h-9 rounded-2xl hover:bg-gray-400'>Celebrate</button>
          </div>
        <div className="swiper-slide relative">
            <img src={snkrs} alt="" />
            <h2 className='absolute bottom-36 font-semibold text-xl left-12 text-white'>Sport & Wellness Apps</h2>
              <h2 className='absolute bottom-28 left-12 text-white'>Movement Where You Are</h2>
              <button className='absolute bottom-12 left-12 bg-white w-32 h-9 rounded-2xl hover:bg-gray-400'>Learn More</button>
          </div>
        <div className="swiper-slide relative">
            <img src={sportapps} alt="" />
            <h2 className='absolute bottom-36 font-semibold text-xl left-12 text-white'>SNKRS</h2>
              <h2 className='absolute bottom-28 left-12 text-white'>Your Ultimate Speaker</h2>
              <button className='absolute bottom-12 left-12 bg-white w-20 h-9 rounded-2xl hover:bg-gray-400 '>Move</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default MemberBenefits