import React from 'react'
import { Logo } from './basic_components'

function Navbar(){
    return(
        <div className="navbar bg-white shadow-md flex justify-between md:justify-evenly px-4 sm:px-8 md:px-0 lg:px-7 py-4 align-center font-body">
            <Logo/>
            <ul className="hidden md:flex  text-xs font-semibold tracking-widest ">
                <li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">STORIES</a></li>
                <li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">FEATURES</a></li>
                <li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">PRICING</a></li>
            </ul>
            <button className="hidden md:flex get_invite px-7 bg-black text-white text-sm font-semibold py-2.5 tracking-widest hover:bg-gray-200 hover:text-black duration-500">GET AN INVITE</button>
            <div className="md:hidden flex flex-col justify-around items-center h-3 my-auto">
                <div className="border-t-2 border-black w-6 m-0"></div>
                <div className="border-t-2 border-black w-6 m-0"></div>
            </div>
        </div>
    )
}
export default Navbar