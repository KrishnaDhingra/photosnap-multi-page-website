import React from 'react'
import { Heading, GetInvite } from './basic_components.js'
import { CgArrowLongRight } from "react-icons/cg";

export let Features_Invite = () => {
    return (
        <div className="bg-blue-300 features_invite_main_container min-h-82 h-auto">
            <div className="flex flex-col md:flex-row max-w-screen-xl py-20 justify-between items-left md:items-center mx-auto px-8 gap-6 md:gap-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug font-semibold sm:font-bold tracking-widest text-white w-full md:w-96">WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
                <div className="flex gap-4">
                    <GetInvite text={"GET AN INVITE"}/>
                    <CgArrowLongRight  className="arrow"/>
                </div>
            </div>
        </div>
    )
}