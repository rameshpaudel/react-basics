import React from 'react'

function Card(props) {
    return (<div className="cardItem">
        <img src={props.image}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">{props.linkText}</a>
        </div>
    </div>)
}
export default Card;

