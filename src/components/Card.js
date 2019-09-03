import React from 'react'

function Card(props) {
    return (<div className="cardItem">
        {props.image ? (<img src={props.image}/>) : <p>No image found</p>}
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">{props.linkText}</a>
        </div>
    </div>)
}
export default Card;

