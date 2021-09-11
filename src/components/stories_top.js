import React from 'react'
import styled from 'styled-components'
import { Heading, GetInvite, Text } from './basic_components'
import { Stories_Preview, Stories_Preview_Container, Stories_Photographer, Stories_Heading } from './stories_preview'
import { CgArrowLongRight } from "react-icons/cg";
import { stories_data } from './data.js'

const Stories_top = styled.div`
    background-image: url('https://github.com/zuolizhu/photosnap_frontendmentor/blob/master/static/images/stories/desktop/moon-of-appalacia.jpg?raw=true');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export let Stories_Top = () => {
    return(
        <>
        <Stories_top className="w-full h-md sm:h-xl bg-blue-300 flex overflow-x-hidden">
            <div className="hidden sm:flex flex-col sm:px-16 lg:px-36 gap-6 justify-center">
                <GetInvite text={"LAST MONTH'S FEATURED STORY"}/>
                <Heading heading={'HAZY FULL MOON OF APPALACHIA'}/>
                <div className="flex w-72 items-center">
                    <Stories_Photographer text={'March 2nd 2020'}/>
                    <Stories_Photographer text={'by John Appleseed'}/>
                </div>
                <Text text={'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'}/>
                <GetInvite text={'READ THE STORY'}/>
            </div>
            
        </Stories_top>
            <div className="flex sm:hidden flex-col px-8 sm:px-16 lg:px-36 gap-6 justify-center bg-black w-full py-12">
                <GetInvite text={"LAST MONTH'S FEATURED STORY"}/>
                <Heading heading={'HAZY FULL MOON OF APPALACHIA'}/>
                <div className="flex flex-col sm:flex-row w-64 items-center overflow-x-hidden">
                    <Stories_Photographer text={'March 2nd 2020'}/>
                    <Stories_Photographer text={'by John Appleseed'}/>
                </div>
                <Text text={'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'}/>
                <GetInvite text={'READ THE STORY'}/>
            </div>
        </>
    )
}

export const StoriesMain = () => {
    return (
        <div className="stories_preview_container grid grid-cols-1 sm:grid-cols-2 py-20 xl:grid-cols-4">
            {stories_data.map(element =>{
                return (
                    <Stories_Preview image={element.image} heading={'The Mountains'} text={element.photographer} heading={element.heading} date={element.date}/>
                )
            })}

        </div>
    )
}
