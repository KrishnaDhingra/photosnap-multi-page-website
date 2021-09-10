import React from 'react'

export const Text = (props) =>{
    return <p className="text-gray-400 font-normal text-sm sm:text-base leading-6 w-full md:w-96 tracking-wide">{props.text}</p>
}
export const Heading = (props) =>{
    return <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug font-semibold sm:font-bold tracking-widest text-white w-full md:w-96">{props.heading}</h1>
}
export const TextDark = (props) =>{
    return <p className="text-gray-600 font-normal text-sm sm:text-base leading-6 w-full md:w-96 tracking-wide">{props.text}</p>
}
export const HeadingDark = (props) =>{
    return <h1 className="text-4xl md:text-5xl leading-snug font-bold tracking-widest text-black w-full md:w-96">{props.heading}</h1>
}
export const Logo = () =>{
    return <span className="logo text-xl font-extrabold my-auto tracking-wide">PHOTOSNAP</span>
}
export const GetInvite = (props) =>{
    return <p className="invite_text text-white text-sm font-semibold tracking-wider mt-2 hover:underline">{props.text}</p>
}
export const GetInviteDark = (props) =>{
    return <p className="invite_text text-black text-sm font-semibold tracking-wider mt-2 hover:underline">{props.text}</p>
}

