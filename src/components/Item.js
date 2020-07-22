import React, { Component } from 'react'
var change = (e) => {
    console.log("Click item name", e.target.id);
};
export default class Item extends Component {

    render() {
        return (
            <div>
                <h1 onClick={change} id={this.props.id}>hello {this.props.name} {this.props.isdone}!!!</h1>
            </div>
        )
    }
}
