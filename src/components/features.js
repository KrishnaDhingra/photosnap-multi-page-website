import React from 'react'
import { TextDark } from './basic_components.js'
import { preview_features_data } from './data.js'

export const FeaturesContainer = () => {
    return(
        <div className="flex flex-col-3 flex-wrap gap-10 mx-auto justify-center items-center px-2 sm:px-10 m-20 mb-32">
            {preview_features_data.map(element =>{
                return (

                    <Features image={'image'} heading={element.heading} text={element.description} />
                )
            })}
        </div>
    )

}
export const Features = (props) => {
    return(
        <div className="flex flex-col gap-4 justify-center items-center mt-12">
            <p className="font-semi-bold text-lg text-center mb-6">{props.image}</p>
            <p className="font-bold text-xl text-black tracking-wider text-center">{props.heading}</p>
            <p className="text-gray-500 font-normal text-base w-full sm:w-3/4 md:w-96 tracking-wide text-center leading-6">{props.text}</p>
        </div>
    )
}