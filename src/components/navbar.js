import React from 'react'
import { Logo } from './basic_components'
import { Link } from 'react-router-dom'


function Navbar(){
    return(
        <div className="navbar bg-white shadow-md flex justify-between md:justify-evenly px-4 sm:px-8 md:px-0 lg:px-7 py-4 items-center font-body">
            <Link to="/"><Logo/></Link>
            <ul className="hidden md:flex  text-xs font-semibold tracking-widest ">
                <Link to="/stories"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">STORIES</a></li></Link>
                <Link to="/features"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">FEATURES</a></li></Link>
                <Link to="/pricing"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">PRICING</a></li></Link>
            </ul>
            <button className="hidden md:flex get_invite px-7 bg-black text-white text-xs font-semibold py-2.5 tracking-widest hover:bg-gray-200 hover:text-black duration-500">GET AN INVITE</button>
            <div className="md:hidden flex flex-col justify-around items-center h-3 my-auto">
                <div className="border-t-2 border-black w-6 m-0"></div>
                <div className="border-t-2 border-black w-6 m-0"></div>
            </div>
        </div>
    )
}
export default Navbar