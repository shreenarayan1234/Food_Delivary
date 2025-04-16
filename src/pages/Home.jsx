import React, { useContext } from 'react'
import Nav from '../components/Nav'
import { Categories } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'

const Home = () => {
  let {cate, setCate, input} = useContext(dataContext)

  function filter(category){
    if(category==="All"){
      setCate(food_items)
    }else{
      let newList = food_items.filter((item)=>(item.food_category === category))
      setCate(newList)
    }
  }
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
        <Nav/>

        {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Categories.map((item)=>{
           return <div className='w-[140px] h-[140px] bg-white flex  flex-wrap text-start gap-5 p-5 text-[20px] font-bold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
              
              {item.icon}
              {item.name}

            </div>
          })}
        </div>:null}

      
        <div className="flex flex-wrap w-full justify-center items-center pt-8 pb-8 gap-4 ">
          {cate.map((item)=>(
            <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id}/>
          ))}
        </div>

    </div>
  )
}

export default Home