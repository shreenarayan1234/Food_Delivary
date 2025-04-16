import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { TbSoupOff } from "react-icons/tb";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

export const Categories = [
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className='h-[60px] w-[60px] text-green-600'/>
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdFreeBreakfast className='h-[60px] w-[60px] text-green-600'/>
    },
    {
        id:3,
        name:"soups",
        icon:<LuSoup className='h-[60px] w-[60px] text-green-600'/>
    },
    {
        id:4,
        name:"pasta",
        icon:<TbSoupOff className='h-[60px] w-[60px] text-green-600'/>
    },
    {
        id:5,
        name:"main_course",
        icon:<MdOutlineFoodBank className='h-[60px] w-[60px] text-green-600'/>
    },
    {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className='h-[60px] w-[60px] text-green-600'/>
    },
    {
        id:7,
        name:"burger",
        icon:<GiHamburger className='h-[60px] w-[60px] text-green-600'/>
    },  
]