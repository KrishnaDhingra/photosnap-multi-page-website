import React from 'react'
import { Text, Heading, TextDark, HeadingDark, GetInvite, GetInviteDark } from './basic_components'

export let Home1 = () =>{
    return(
        <div className="home1 h-xl bg-blue-100 flex font-body flex-col-reverse sm:flex-row">
            
            <div className=" py-10 home1_left w-full sm:w-3/5 xl:w-2/5 h-full bg-black flex flex-col gap-7 justify-center pl-8 md:pl-20 2xl:pl-32">

                <Heading heading={'CREATE AND SHARE YOUR PHOTO STORIES.'}/>

                <Text text={'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'}/>

                <GetInvite/>

            </div>

            <div className="home1_right w-full sm:w-2/5 xl:w-3/5 h-full bg-green-200 overflow-y-hidden"></div>
        </div>
    )
}


export let Home2 = () =>{
    return(
        <div className="home2 h-xl bg-blue-100 flex font-body flex-col-reverse sm:flex-row-reverse">
            
            <div className=" py-10 home1_left w-full sm:w-3/5 xl:w-2/5 h-full bg-white flex flex-col gap-7 justify-center pl-8 md:pl-20 2xl:pl-32">

                <HeadingDark heading={'BEAUTIFUL STORIES EVERY TIME'}/>

                <TextDark text={'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'}/>

                <GetInviteDark/>

            </div>

            <div className="home2_right w-full sm:w-2/5 xl:w-3/5 h-full bg-green-200 overflow-y-hidden"></div>
        </div>
    )
}


export let Home3 = () =>{
    return(
        <div className="home3 h-xl bg-blue-100 flex font-body flex-col-reverse sm:flex-row">
            
            <div className=" py-10 home1_left w-full sm:w-3/5 xl:w-2/5 h-full bg-white flex flex-col gap-7 justify-center pl-8 md:pl-20 2xl:pl-32">

                <HeadingDark heading={'DESIGNED FOR EVERYONE'}/>

                <TextDark text={'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.'}/>

                <GetInviteDark/>

            </div>

            <div className="home3_right w-full sm:w-2/5 xl:w-3/5 h-full bg-green-200 overflow-y-hidden"></div>
        </div>
    )
}

{/* <img className="home1_image w-full h-full" src='https://raw.githubusercontent.com/zuolizhu/photosnap_frontendmentor/master/static/images/home/desktop/create-and-share.jpg' alt="" />

<img className="home2_image w-full h-full" src='https://raw.githubusercontent.com/zuolizhu/photosnap_frontendmentor/master/static/images/home/desktop/beautiful-stories.jpg' alt="" />


<img className="home3_image w-full h-full" src='https://raw.githubusercontent.com/zuolizhu/photosnap_frontendmentor/master/static/images/home/desktop/designed-for-everyone.jpg' alt="" /> */}

