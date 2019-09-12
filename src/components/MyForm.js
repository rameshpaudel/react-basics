import React, { Component } from 'react'

export default class MyForm extends Component {

    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef()
        this.lastNameRef = React.createRef()
        this.state = {
            firstName: '',
            lastName: ''
        }
    }
    onFirstNameHandler = (event) => {
        var convertedValue;
        if (event.target.value.length < 5) {
            convertedValue = event.target.value.split(" ").join('--')
        } else {
            convertedValue = event.target.value.substring(0, 5)
        }
        if(convertedValue.length === 5){
            console.log(this.lastNameRef.current.focus())
        }

        this.setState({
            firstName: convertedValue
        })
    }

    onLastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        First Name:
                    <input 
                    ref={this.firstNameRef}
                    type="text" name="fName" value={this.state.firstName} onChange={this.onFirstNameHandler} />
                    </label>
                    <label>
                        Last Name:
                    <input
                        ref={this.lastNameRef}
                    type="text" name="lName" value={this.state.lastName} onChange={this.onLastNameHandler} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
