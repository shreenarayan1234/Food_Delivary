import React from 'react'
// import image1 from '../assets/image1.avif'
import { RiDeleteBin5Line } from "react-icons/ri";
import { RemoveItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Card2 = ({name,id, price, image, qty}) => {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
        <div className="w-[70%] h-full flex gap-3 ">
            <div className="w-[60%] h-full overflow-hidden rounded-lg">
                <img src={image} alt="" className='object-cover'/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-3'>
                <div className="text-lg text-gray-600 font-semibold">{name} </div>
                <div className="w-[90px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400">
                    <button className="w-[30%] text-green-500 h-full bg-white flex justify-center items-center hover:bg-gray-200">
                        -
                    </button>
                    <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center">{qty} </span>
                    <button className="w-[30%] text-green-500 h-full bg-white flex justify-center items-center hover:bg-gray-200">
                        +
                    </button>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-start items-end gap-5">
                <span className='text-green-400 font-semibold'>Rs.{price} </span>
                <RiDeleteBin5Line className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
    </div>
  )
}

export default Card2