import React, { Component } from 'react'

export default class Item extends Component {

    render() {
        return (
            <div>
                <h1>hell j{this.props.name}</h1>
            </div>
        )
    }
}
