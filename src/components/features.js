import React from 'react'
import { TextDark } from './basic_components.js'

export const FeautresContainer = () => {
    return(
        <div className="flex flex-col-3 flex-wrap gap-10 mx-auto justify-center items-center px-2 sm:px-10 mb-40">
            <Features heading={'100% Responsive'} text={'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'}/>

            <Features heading={'No Photo Upload Limit'} text={'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'}/>

            <Features heading={'Available to Embed'} text={'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and much more.'}/>
        </div>
    )

}
export const Features = (props) => {
    return(
        <div className="flex flex-col gap-4 justify-center items-center">
            <p className="font-semi-bold text-lg text-center mb-4">Image</p>
            <p className="font-bold text-xl text-black tracking-wider text-center">{props.heading}</p>
            <p className="text-gray-600 font-normal text-base leading-6 w-full sm:w-3/4 md:w-96 tracking-wide text-center">{props.text}</p>
        </div>
    )
}