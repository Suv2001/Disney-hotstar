import React from 'react'
import logo from './../assets/images/Logo.png'
import user from './../assets/images/user.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle } from 'react-icons/hi2'
import { FaTv } from "react-icons/fa";
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItems from "./HeaderItems.jsx";
export default function Header() {
    const navItems = [
        {
            name: 'Home',
            icon: <HiHome className={'w-6 h-6'}/>
        },
        {
            name: 'Search',
            icon: <HiMagnifyingGlass className={'w-6 h-6'}/>
        },
        {
            name: 'Watchlist',
            icon: <HiPlus className={'w-6 h-6'}/>
        },
        {
            name: 'Originals',
            icon: <HiStar className={'w-6 h-6'}/>
        },
        {
            name: 'Movies',
            icon: <HiPlayCircle  className={'w-6 h-6'}/>
        },
        {
            name: 'Series',
            icon: <FaTv  className={'w-6 h-6'}/>
        }
    ]
  return (
    <div className={'flex items-center justify-between px-4 py-4'}>
        <div className={'flex items-center gap-8'}>
            <img src={logo} className={'w-[60px] md:w-[70px] object-cover '}/>
            {
                navItems.map((item) => (
                    <HeaderItems name={item.name} icon={item.icon}/>
                ))
            }
        </div>
        <img src={user} alt="" className={'w-[40px] h-[40px] rounded-full'}/>
    </div>
  )
}
