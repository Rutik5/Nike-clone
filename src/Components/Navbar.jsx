import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import logo from '../Resources/Images/logo.png'


const Navbar = () => {
  return (
    <div className=' w-full h-[60px] flex justify-between items-center bg-[#FFFFFF] pl-8'>
      {/* logo */}
      <div>
        <img src={logo} alt="" className='w-14 h-5 bg-transparent' />
      </div>

        {/* navbar */}
      <div>
        <ul className='flex justify-center items-center gap-5 font-semibold'>
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>Customize</li>
          <li>Sneakers</li>
        </ul>
      </div>  

    <div className='flex justify-between items-center w-[350px] gap-5 mr-8'>
        {/* searchbar */}
        <div className='w-[180px]  h-8 flex bg-[#E5E5E5] items-center gap-2 rounded-2xl overflow-hidden pr-5 '>
        <IoSearchOutline  className='w-[100px] h-5 ml-2'/> 
        <input type="text" placeholder='search' className='w-[120px] ml-2 outline-none  border-none bg-transparent' />
      </div>

      {/* icons */}
      <div className='flex items-center gap-6 w-[80px] h-8 ml-10'>
        < FaRegHeart size={25}/>
        <IoBagOutline  size={25}/>
      </div>
    </div>
    </div>
  )
}

export default Navbar