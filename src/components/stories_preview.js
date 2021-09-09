import React from 'react'
import styled  from 'styled-components'
import { GetInvite } from './basic_components'

const Stories = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4),
  rgba(0, 0, 0, 0.4)), url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.4s;

    &:hover{
        transform: translateY(-1rem);
    }
`

export let Stories_Preview_Container = () =>{
    return(
        <div className="stories_preview_container grid grid-cols-1 sm:grid-cols-2 py-20 xl:grid-cols-4">
            
            <Stories_Preview image={'https://github.com/KrishnaDhingra/photosnap_frontendmentor/blob/master/static/images/stories/desktop/mountains.jpg?raw=true'} heading={'The Mountains'} text={'by John Appleseed'}/>

            <Stories_Preview image={'https://github.com/KrishnaDhingra/photosnap_frontendmentor/blob/master/static/images/stories/desktop/cityscapes.jpg?raw=true'} heading={'Sunset Cityscapes'} text={'by Benjamin Cruz'}/>

            <Stories_Preview image={'https://github.com/KrishnaDhingra/photosnap_frontendmentor/blob/master/static/images/stories/desktop/18-days-voyage.jpg?raw=true'} heading={'18 Days Voyage'} text={'by Alexie Borodin'}/>

            <Stories_Preview image={'https://github.com/KrishnaDhingra/photosnap_frontendmentor/blob/master/static/images/stories/desktop/architecturals.jpg?raw=true'} heading={'Architecturals'} text={'by Samantha Brooke'}/>

        </div>
    )

}
export let Stories_Preview = (props) =>{
    return(
        <Stories className="stories_preview1 bg-blue-200 h-lg flex flex-col p-10 justify-end" image={props.image}>
            <Stories_Heading heading={props.heading}/>
            <Stories_Photographer text={props.text}/>
            <Divider/>
            <GetInvite className="">READ MORE</GetInvite>
        </Stories>
    )

}

export let Stories_Heading = (props) =>{
    return <h1 className="text-xl md:text-xl leading-snug font-bold tracking-normal text-white w-full md:w-96">{props.heading}</h1>
    
}
export let Stories_Photographer = (props) =>{
    return  <p className="text-white font-normal text-sm leading-6 w-full md:w-96 tracking-wide">{props.text}</p>

}
export let Divider = () =>{
    return <div className="w-full border-t-2 opacity-40 border-gray-300 m-3 ml-0"></div>
}

