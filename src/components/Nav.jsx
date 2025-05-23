import React, { useContext, useEffect } from 'react';
import { IoFastFoodSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';



const Nav = () => {
  let {input, setInput, setCate, setShowCart} = useContext(dataContext)
  useEffect(()=>{
   let newlist=  food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
   setCate(newlist)
  },[input])
  let items = useSelector(state=>state.cart)
  console.log(items)
  return (
    <div className='w-full h-[100px] flex justify-between text-center px-5 md:px-8 py-3'>
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodSharp className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <div className="bg-white w-[50%] h-[60px] md:w-[40%] flex items-center px-5 gap-5 rounded-md shadow-xl">
        <IoSearch className='text-green-500 w-[20px] h-[20px]'/>
            <form action="" className='w-[100%] md:w-[40%]' onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder='Search your dishes......' className='outline-none text-[16px] md:text-[20px] relative w-full' onChange={(e)=>setInput(e.target.value)} value={input}/>
            </form>
        </div>
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer" onClick={()=>setShowCart(true)}>
          <span className="absolute top-3 right-10 text-green-500">{items.length}</span>
          <LuShoppingBag className='w-[30px] h-[30px] text-green-500'/>
        </div>
    </div>
  )
}

export default Nav