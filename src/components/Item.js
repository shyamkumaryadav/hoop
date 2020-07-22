import React, { Component } from 'react'
var change = (e) => {
    console.log("Click item name", this.props.name);
};
export default class Item extends Component {

    render() {
        return (
            <div>
                <h1 onClick={change}>hello {this.props.name} {this.props.isdone}!!!</h1>
            </div>
        )
    }
}
