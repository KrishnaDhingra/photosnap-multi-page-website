import React from 'react'
import { GetInvite } from './basic_components.js'

export let PricingChartContainer = () => {
    return (
        <div className="px-3 sm:px-8 max-w-screen-xl items-center flex flex-col xl:flex-row gap-8 justify-center mx-auto m-40">
            <PricingGray text={'Includes basic usage of our platform. Recommended for new and aspiring photographers.'} heading={'Basic'} price={'$19.00'}/>

            <PricingBlack text={'More advanced features available. Recommended for photography veterans and professionals.'} heading={'Pro'} price={'$39.00'}/>

            <PricingGray text={'Additional features available such as more detailed metrics. Recommended for business owners.'} heading={'Basic'} price={'$19.00'}/>
            
        </div>

    )
}
export let PricingBlack = (props) => {
    return (
        <div className="relative flex bg-black flex-col gap-4 md:items-left xl:items-center justify-center px-8 py-8 sm:py-16 box-border flex-shrink xl:w-full lg:w-3/4 md:w-full">
            <PricingChartHeadingLight heading={props.heading}/>
            <Text text={props.text}/>  
            <div className="flex flex-col md:absolute xl:relative top-0 right-0">       
                <PriceLight price={props.price}/>   
                <PermonthLight text={'per month'}/>    
            </div>    
            <PricingButtonLight/>    
        </div>
    )
}
export let PricingGray = (props) => {
    return (
        <div className="relative flex bg-gray-100 flex-col gap-4 md:items-left xl:items-center justify-center px-8 py-8 sm:py-16 box-border flex-shrink xl:w-full lg:w-3/4 md:w-full">
            <PricingChartHeadingDark heading={props.heading}/>
            <TextDark text={props.text}/>   
            <div className="flex flex-col md:absolute xl:relative top-0 right-0">
                <PriceDark price={props.price}/>          
                <PermonthDark text={'per month'}/>            
            </div>         
            <PricingButtonDark/>        
        </div>
    )
}
export let PricingChartHeadingLight = (props) => {
    return  <span className="text-white text-2xl font-extrabold my-auto tracking-wide text-center md:text-left xl:text-center">{props.heading}</span>
}
export let PricingChartHeadingDark = (props) => {
    return  <span className="text-black text-2xl font-extrabold my-auto tracking-wide text-center md:text-left xl:text-center">{props.heading}</span>
}
export let PriceDark = (props) => {
    return <span className="text-black text-4xl sm:text-5xl font-extrabold tracking-wide mt-3 text-center">{props.price}</span>
}
export let PriceLight = (props) => {
    return <span className="text-white text-4xl sm:text-5xl font-extrabold tracking-wide mt-3 text-center">{props.price}</span>
}
export let PricingButtonDark = (props) => {
    return <button className="md:w-80 xl:w-full inline-block text-center get_invite px-7 bg-black text-white text-xs font-semibold py-3 tracking-widest hover:bg-gray-200 hover:text-black duration-500 mt-6">PICK A PLAN</button>
}
export let PricingButtonLight = (props) => {
    return <button className="md:w-80 xl:w-full inline-block text-center get_invite px-7 bg-white text-black text-xs font-semibold py-3 tracking-widest hover:bg-gray-200 hover:text-black duration-500 mt-6">PICK A PLAN</button>
}
export let Text = (props) => {
    return <p className="md:w-80 xl:w-full text-gray-400 font-normal text-xs sm:text-base w-full tracking-wide text-center md:text-left xl:text-center leading-6">{props.text}</p>
} 
export let TextDark = (props) => {
    return <p className="md:w-80 xl:w-full text-gray-600 font-normal text-xs sm:text-base w-full tracking-wide text-center md:text-left xl:text-center leading-6">{props.text}</p>
} 
export let PermonthLight = (props) => {
    return <p className="text-gray-400 font-normal text-base w-full tracking-wide text-center md:text-left xl:text-center leading-6">{props.text}</p>
} 
export let PermonthDark = (props) => {
    return <p className="text-gray-600 font-normal text-base w-full tracking-wide text-center md:text-left xl:text-center leading-6">{props.text}</p>
} 
