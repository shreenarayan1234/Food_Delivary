import React from 'react'
import Nav from '../components/Nav'
import { Categories } from '../Category'

const Home = () => {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Categories.map((item)=>{
           return <div className='w-[140px] h-[140px] bg-white flex  flex-wrap text-start gap-5 p-5 text-[20px] font-bold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'>
              
              {item.icon}
              {item.name}

            </div>
          })}
        </div>
    </div>
  )
}

export default Home