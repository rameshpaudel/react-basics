import React, { Component } from 'react'

export default function Tasks(props) {
    return (
        <div>
            <li>{props.title}</li>
            <li>{props.createdAt}</li>
            <li>
                <button onClick={props.toggleStatus}>{props.status ? 'Hide' : "Show"}</button>
                <button onClick={props.toggleDelete}>Delete</button>
            </li>
        </div>
    )
}
