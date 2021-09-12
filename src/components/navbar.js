import React, { useState } from 'react'
import styled from 'styled-components'
import { Logo } from './basic_components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.div`
    position: relative;

    
    .active{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 0;
        top: 100%;
        width: 100vw;
        height: 250px;
        background-color: white;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        gap: 1rem;
    }
    @media (max-width: 768px){
        .active_button{
            width: 80vw;
            text-align: center;
            display: inline-block;
            padding: 0.85rem 0rem;
        }
    }
    @media (min-width: 768px){
        .active{
            display: none;
        }
    }

    .active_ul{
        flex-direction: column;
        margin-top: 1rem;
        width: 80vw;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        gap: 1.2rem;
        padding: 1.3rem 0rem;
    }
    .active_ul li a{
        font-size: 0.85rem;
        text-align: center;
    }
    .active_ul li{
        text-align: center;
    }
`


function Navbar(){

    const [isActive, setActive] = useState(false)
    return(
        <NavbarContainer className="navbar bg-white flex justify-between md:justify-evenly px-4 sm:px-8 md:px-0 lg:px-7 py-4 items-center font-body">

            <Link to="/"><Logo/></Link>
            <ul className="hidden md:flex text-xs font-semibold tracking-widest">
                <Link to="/stories"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">STORIES</a></li></Link>
                <Link to="/features"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">FEATURES</a></li></Link>
                <Link to="/pricing"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">PRICING</a></li></Link>
            </ul>
            <div className={isActive ? "active flex md:hidden" : "hidden md:hidden"}>
                <ul className={isActive ? "active_ul flex text-xs font-semibold tracking-widest" : "flex text-xs font-semibold tracking-widest"}>
                    <Link to="/stories"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">STORIES</a></li></Link>
                    <Link to="/features"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">FEATURES</a></li></Link>
                    <Link to="/pricing"><li className="mx-6 my-auto hover:text-gray-400 duration-300"><a href="">PRICING</a></li></Link>
                </ul>
                <button className="active_button flex md:hidden get_invite px-7 bg-black text-white text-xs font-semibold py-2.5 tracking-widest hover:bg-gray-200 hover:text-black duration-500">GET AN INVITE</button>
            </div>
            <button className="hidden md:flex get_invite px-7 bg-black text-white text-xs font-semibold py-2.5 tracking-widest hover:bg-gray-200 hover:text-black duration-500">GET AN INVITE</button>
            <div className="md:hidden flex flex-col justify-around items-center h-3 my-auto" onClick={() => setActive(!isActive)}>
                <div className="border-t-2 border-black w-6 m-0"></div>
                <div className="border-t-2 border-black w-6 m-0"></div>
            </div>
        </NavbarContainer>
    )
}
export default Navbar