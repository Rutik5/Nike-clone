import React from 'react'

import img from '../Resources/Images/AirJorden1.jpg'
import img1 from '../Resources/Images/AirMax1.jpg'
import img2 from '../Resources/Images/Dunk.jpg'
import img3 from '../Resources/Images/NikeBlazer.jpg'
import img4 from '../Resources/Images/Metcon.jpg'
import img5 from '../Resources/Images/PegasusRunning.jpg'

const AlwaysIconic = () => {
  return (
    <div className="mx-10 mb-10 ">
      <h1 className="text-2xl font-normal mb-10 ">Always Iconic</h1>
      <div className="swiper-container overflow-x-auto whitespace-nowrap ">
        <div className="swiper-wrapper mb-10 ">
          <div className="swiper-slide ">
            <img src={img} alt="" />
            <h2>Air Jorden 1</h2>
          </div>
          <div className="swiper-slide">
            <img src={img1} alt="" />
            <h2>Air Max 1</h2>
          </div>
          <div className="swiper-slide">
            <img src={img2} alt="" />
            <h2>Dunk</h2>
          </div>
          <div className="swiper-slide">
            <img src={img3} alt="" />
            <h2>Nike Blazer</h2>
          </div>
          <div className="swiper-slide">
            <img src={img4} alt="" />
            <h2>Metcon</h2>
          </div>
          <div className="swiper-slide">
            <img src={img5} alt="" />
            <h2>Pegasus Running Shoe</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlwaysIconic