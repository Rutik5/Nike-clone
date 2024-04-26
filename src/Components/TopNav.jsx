import React from 'react'
import Jumpman from '../Resources/Images/Jumpman.svg'
export default function TopNav() {
  return (
    <div className="TopNav-Container h-10 bg-[#F5F5F5] flex justify-between items-center">
        <div className="logo w-5 ml-12" >
            <img src={Jumpman} alt="logo" />
        </div>
        <div className='mr-10 text-xs font-bold'>
            <ul className='TopNav-options flex justify-center items-center gap-4 '>
                <li>Find a Store</li>|
                <li>Help</li>|
                <li>Join Us</li>|
                <li>Sign In</li>
            </ul>
        </div>
    </div>
  )
}
