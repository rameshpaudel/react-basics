import React from 'react'

export default function TitleBar(props){
    return (
        <div>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    )
}