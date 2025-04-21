import React, { useContext } from 'react'
import Nav from '../components/Nav'
import { Categories } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Home = () => {
  let {cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  function filter(category){
    if(category==="All"){
      setCate(food_items)
    }else{
      let newList = food_items.filter((item)=>(item.food_category === category))
      setCate(newList)
    }
  }
  let items = useSelector(state=>state.cart)
  let subtotal=items.reduce((total, item)=>total + item.qty * item.price, 0)
  let deliveryFee=20;
  let taxes = subtotal *0.5/100;
  let total = Math.floor(subtotal + deliveryFee + taxes)

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
          
          {cate.length>1?cate.map((item)=>(
            <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id}/>
          )):<div className='text-center text-green-500 text-2xl font-semibold pt-5'>
              No Dish Found
            </div>
            }
          
        </div>
      <div className={`w-full md:w-[50vh] h-[100%] bg-white p-5 shadow-5 fixed top-0 right-0 transaction-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center text-green-500'>
          <span>Order Itmes</span>
          <RxCross2 className='w-[25px] h-[25px] font-semibold' onClick={()=>setShowCart(false)}/>
          </header>
          {items.length>0?  <>
          <div className='w-full mt-9 flex flex-col gap-8'>
            {items.map((item)=>(
              <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
            ))}
          </div>
          <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7">
              <div className='w-full flex justify-between items-center'>
                <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
                <span className="text-green-400 font-semibold text-lg">Rs{subtotal}</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className="text-lg text-gray-600 font-semibold">Delivery Fee</span>
                <span className="text-green-400 font-semibold text-lg">Rs{deliveryFee}</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className="text-lg text-gray-600 font-semibold">Taxes</span>
                <span className="text-green-400 font-semibold text-lg">Rs{taxes}</span>
              </div>
          </div>
            <div className='w-full flex justify-between items-center p-9'>
                <span className="text-lg text-gray-600 font-semibold">Total</span>
                <span className="text-green-400 font-semibold text-lg">Rs{total}</span>
            </div>
              <button className="w-[80%] bg-green-700 text-white font-bold text-lg rounded-lg hover:bg-green-400 transaction-all cursor-pointer" onClick={()=>{
                toast.success("Order Placed..")
              }}>Place Order</button>
            </>:
            <div className='text-center text-green-500 text-2xl font-semibold pt-5'>
              Empty Card.........
              </div>}
        
      </div>
    </div>
  )
}

export default Home