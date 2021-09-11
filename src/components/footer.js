import React from 'react'
import { Logo, GetInvite, Text, LogoLight } from './basic_components.js'
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { CgArrowLongRight } from "react-icons/cg";

export let Footer = () => {
    return (
        <div className="sm:h-80 lg:h-76 bg-black py-16">
            <div className="w-full flex-col sm:flex-row xl:w-84 mx-auto flex justify-between items-center h-full px-10 gap-14 sm:gap-0">

                <div className="flex flex-col sm:flex-row sm:h-full sm:gap-32">
                    <div className="flex flex-col gap-3 sm:gap-0 sm:justify-between footer_left_logo_container">
                        <>
                            <LogoLight/>
                            <ul className="hidden sm:flex lg:hidden text-xs font-semibold tracking-widest items-evenly gap-4">
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">HOME</a></li>
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">STORIES</a></li>
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">FEATURES</a></li>
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">PRICING</a></li>
                        </ul>
                        </>
                        <div className="flex gap-4 items-center mt-2 sm:mt-0">
                            <span className="text-white text-xl sm:text-2xl"><FaFacebookSquare/></span>
                            <span className="text-white text-xl sm:text-2xl"><IoLogoYoutube/></span>
                            <span className="text-white text-xl sm:text-2xl"><FaTwitter/></span>
                            <span className="text-white text-xl sm:text-2xl"><FaInstagram/></span>
                            <span className="text-white text-xl sm:text-2xl"><AiOutlineWhatsApp/></span>
                        </div>
                    </div>
                    <ul className="footer_ul flex sm:hidden lg:flex flex-col items-left text-xs font-semibold tracking-widest justify-evenly mt-7 sm:mt-0">
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">HOME</a></li>
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">STORIES</a></li>
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">FEATURES</a></li>
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">PRICING</a></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-between self-stretch gap-4 sm:gap-0 ">
                    <div className="flex items-center justify-center gap-4 sm:justify-end">
                        <p className="text-white text-sm font-semibold tracking-wider mt-2 hover:underline text-center sm:text-right">GET INVITE
                        </p>     
                        <CgArrowLongRight className="arrow" />
                    </div>
                    <p className="text-gray-400 text-md font-semibold tracking-wide mt-2 text-center sm:text-right">Copyright 2019. All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}