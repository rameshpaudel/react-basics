import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.title}
                </div>
                {this.props.children}
            </div>
        )
    }
}
