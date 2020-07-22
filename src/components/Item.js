import React, { Component, Fragment } from 'react';

export default class Item extends Component {

    change = (e) => {
        e.target.hidden = !e.target.hidden;
        console.log("Click: " + this.props.name + " item id:", e.target);
    }
    showH = (e) => {
        var h1 = document.querySelector("#" + this.props.name);
        h1.hidden = !h1.hidden
    }
    render() {
        return (
            <Fragment>
                <input onChange={this.showH} type="checkbox" defaultChecked={this.props.isdone} />{this.props.name}<h1 id={this.props.name} hidden={this.props.isdone}>{"hello " + this.props.name + " " + this.props.isdone + " !!!"}</h1>
            </Fragment>
        )
    }
}
