import React from 'react'

export const Text = (props) =>{
    return <p className="text-gray-400 font-normal text-md leading-6 w-full md:w-96 tracking-wide">{props.text}</p>
}
export const Heading = (props) =>{
    return <h1 className="text-4xl md:text-5xl leading-snug font-bold tracking-widest text-white w-full md:w-96">{props.heading}</h1>
}
export const TextDark = (props) =>{
    return <p className="text-gray-700 font-normal text-md leading-6 w-full md:w-96 tracking-wide">{props.text}</p>
}
export const HeadingDark = (props) =>{
    return <h1 className="text-4xl md:text-5xl leading-snug font-bold tracking-widest text-black w-full md:w-96">{props.heading}</h1>
}
export const Logo = () =>{
    return <span className="logo text-xl font-extrabold my-auto tracking-wide">PHOTOSNAP</span>
}
export const GetInvite = () =>{
    return <p className="invite_text text-white text-sm font-semibold tracking-wider">GET AN INVITE</p>
}
export const GetInviteDark = () =>{
    return <p className="invite_text text-black text-sm font-semibold tracking-wider">GET AN INVITE</p>
}
