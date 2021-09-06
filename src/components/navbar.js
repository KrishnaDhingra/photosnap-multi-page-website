import React from 'react'

function Navbar(){
    return(
        <div className="navbar bg-white shadow-md flex justify-evenly px-0 lg:px-7 py-4 align-center">
            <span className="logo text-black text-xl font-black my-auto tracking-wider">PHOTOSNAP</span>
            <ul className="flex  text-sm font-medium tracking-widest">
                <li className="mx-6 my-auto"><a href="">STORIES</a></li>
                <li className="mx-6 my-auto"><a href="">FEATURES</a></li>
                <li className="mx-6 my-auto"><a href="">PRICING</a></li>
            </ul>
            <button className="get_invite px-7 bg-black text-white text-sm font-semibold py-2.5 tracking-widest">GET AN INVITE</button>
        </div>
    )
}
export default Navbar