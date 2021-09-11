import React from 'react'
import { Logo, GetInvite, Text, LogoLight } from './basic_components.js'

export let Footer = () => {
    return (
        <div className="sm:h-80 lg:h-76 bg-black py-16">
            <div className="w-full flex-col sm:flex-row xl:w-84 mx-auto flex justify-between items-center h-full px-10 gap-14 sm:gap-0">

                <div className="flex flex-col sm:flex-row sm:h-full sm:gap-32">
                    <div className="flex flex-col gap-3 sm:gap-0 sm:justify-between items-left lg:items-center">
                        <>
                            <LogoLight/>
                            <ul className="hidden sm:flex lg:hidden text-xs font-semibold tracking-widest items-evenly gap-4">
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">HOME</a></li>
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">STORIES</a></li>
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">FEATURES</a></li>
                                <li className="hover:text-gray-400 duration-300 text-white text-xs"><a href="">PRICING</a></li>
                        </ul>
                        </>
                        <div className="flex gap-4 items-center">
                            <span className="text-white text-xl">a</span>
                            <span className="text-white text-xl">a</span>
                            <span className="text-white text-xl">a</span>
                            <span className="text-white text-xl">a</span>
                            <span className="text-white text-xl">a</span>
                        </div>
                    </div>
                    <ul className="footer_ul flex sm:hidden lg:flex flex-col items-left text-xs font-semibold tracking-widest justify-evenly">
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">HOME</a></li>
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">STORIES</a></li>
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">FEATURES</a></li>
                        <li className="hover:text-gray-400 duration-300 text-white text-sm my-2"><a href="">PRICING</a></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-between self-stretch gap-4 sm:gap-0">
                    <p className="text-white text-sm font-semibold tracking-wider mt-2 hover:underline text-center sm:text-right">GET INVITE
                    </p>                    
                    <p className="text-gray-400 text-md font-semibold tracking-wide mt-2 text-center sm:text-right">Copyright 2019. All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}