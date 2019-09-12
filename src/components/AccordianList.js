import React, { Component } from 'react'
import Accordian from './Accordian'
export default class AccordianList extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.items.map((value,index)=>{
                    return <Accordian key={index} title={value.title} description={value.description} />
                })}
            </div>
        )
    }
}
