import React from 'react'
// import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ({name,price,type,image}) => {
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt="" className='object-cover' />
        </div>

        <div className='text-2xl font-semibold'>
        {name}
        </div>    


        <div className='w-full flex justify-between items-center'>
            <div className='text-lg font-bold text-green-500'>{price}</div>
            <div className='flex justify-around item-center text-green-500 text-lg text-semibold gap-2'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>
        </div>
        <button className='bg-green-700 text-white font-bold text-lg rounded-lg hover:bg-green-400 transaction-all cursor-pointer'>Add to Dish</button>
    </div>
  )
}

export default Card