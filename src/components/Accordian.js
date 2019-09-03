import React, { Component } from 'react'

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggleHandler = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        return (
            <div>
                <div className="accordian-row" onClick={this.toggleHandler}>
                    <h3>{this.props.title}</h3>
                    <button onClick={this.toggleHandler}> {this.state.active ? 'Hide' : 'Show'} </button>
                </div>
                <p className={this.state.active ? 'accordian-content active' : 'accordian-content inactive'}>
                    {this.state.active ? this.props.description : null}
                </p>

            </div>
        )
    }
}

