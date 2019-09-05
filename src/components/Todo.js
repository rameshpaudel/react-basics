import React, { Component } from 'react'

import Task from './Tasks'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    onClickHandler =()=>{
        var task = prompt("Enter the name of the task")

        this.setState({
            tasks: [...this.state.tasks, {
                title: task,
                createdAt: Date(),
                status: true,
                deleted: false
            }]
        })
    }

    toggleStatus(index){
        var data = this.state.tasks;
        data[index].status = ! data[index].status
        this.setState({
            tasks: data
        },()=>{
            console.log(this.state.tasks[index])
        })
    }

    toggleDelete(index){
        var data = this.state.tasks;
        data[index].deleted = ! data[index].deleted
        this.setState({
            tasks: data
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>
                    Add a new Task
                </button>
                {this.state.tasks.map((value,index)=>{
                    return(
                        <Task 
                        key={index} 
                       {...value}
                        toggleStatus={this.toggleStatus.bind(this,index)} 
                        toggleDelete={this.toggleDelete.bind(this,index)}/>
                    )
                })}
            </div>
        )
    }
}
