import React, { Component } from 'react'

function ClickCounter({title,heading,counter,onClickHandler}) {

    var generateHeading = null;
    if(heading){
        generateHeading = <h1>{heading}</h1>
    }
    return (
        <div className="center">
            <h5>{title}</h5>
            {generateHeading}
            {counter > 3 && (<h3>{counter}</h3>)}
            <button onClick={onClickHandler}>Click Here</button>

        </div>
    )
}

export default ClickCounter;

