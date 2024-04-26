import React from "react";

import img1 from "../Resources/Images/AirMax90.jpg";
import img2 from "../Resources/Images/AirMax-1.jpg";
import img3 from "../Resources/Images/AirMaxPlus.jpg";
import img4 from "../Resources/Images/AirMaxPulse.jpg";

const BodyCarausal = () => {
  return (
    <div className="mx-10 mb-10">
      <h1 className="text-2xl font-normal mb-10 ">Icons of Air</h1>
      <div className="swiper-container overflow-x-auto whitespace-nowrap ">
        <div className="swiper-wrapper mb-10">
          <div className="swiper-slide ">
            <img src={img1} alt="" />
            <h2>Air Max 90</h2>
          </div>
          <div className="swiper-slide">
            <img src={img2} alt="" />
            <h2>Air Max 1</h2>
          </div>
          <div className="swiper-slide">
            <img src={img3} alt="" />
            <h2>Air Max Plus</h2>
          </div>
          <div className="swiper-slide">
            <img src={img4} alt="" />
            <h2>Air Max Pulse</h2>
          </div>
          {/* <div className="swiper-slide">
            <img src={img5} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BodyCarausal;
