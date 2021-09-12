import React from 'react'
import { Text, Heading, TextDark, HeadingDark, GetInvite, GetInviteDark } from './basic_components'
import { Features, Features_Container } from './features.js'
import { features_data } from './data.js'

export let Features_Top = (props) =>{
    return(
        <div className="footer_top h-lg bg-blue-100 flex font-body flex-col-reverse sm:flex-row">
            
            <div className=" py-10 home1_left w-full sm:w-3/5 xl:w-2/5 h-full bg-black flex flex-col gap-7 justify-center pl-4 md:pl-20 2xl:pl-32">

                <Heading heading={props.heading}/>

                <p className="text-gray-400 font-normal text-sm sm:text-base leading-6 w-full md:w-96 tracking-wider">{props.text}</p>

            </div>

            <div className="features_right w-full sm:w-2/5 xl:w-3/5 h-full bg-green-200 overflow-y-hidden"></div>
        </div>
    )
}
export let Main_Features_Container = () => {
    return(
        <div className="flex flex-col-3 flex-wrap gap-10 mx-auto max-w-screen-2xl justify-center items-center px-2 sm:px-10 m-24 mb-32">
            {features_data.map(element =>{
                return (

                    <Features image={'image'} heading={element.heading} text={element.description} />
                )
            })}
        </div>
    )
}
