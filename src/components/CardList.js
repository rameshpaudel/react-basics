import React from 'react'
import Card from './Card'

function CardList (props){

    if(props.items.length){
        return (
            <div className="cardList">
                {props.items.map((value,index)=>{
                    return (
                        <Card 
                            title={value.title}
                            description={value.description}
                            image={value.image}
                            linkText="Click Here"
                            />
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            <h1>No data in the card </h1>
        </div>
    )
}

export default CardList;