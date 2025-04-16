import React from 'react';
import { IoFastFoodSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";



const Nav = () => {
  return (
    <div className='w-full h-[100px] flex justify-between text-center px-5 md:px-8 py-3'>
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodSharp className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <div className="bg-white w-[500px] h-[60px] flex items-center px-5 gap-5 rounded-md shadow-xl">
        <IoSearch className='text-green-500 w-[20px] h-[20px]'/>
            <form action="" className='w-[70%] md:w-[40%]'>
                <input type="text" placeholder='Search your dishes......' className='outline-none text-[16px] md:text-[20xp] relative '/>
            </form>
        </div>
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
          <span className="absolute top-3 right-10 text-green-500">0</span>
          <LuShoppingBag className='w-[30px] h-[30px] text-green-500'/>
        </div>
    </div>
  )
}

export default Nav