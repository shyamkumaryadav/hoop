import React, { Component, Fragment } from 'react';

export default class Item extends Component {

    change = (e) => {
        console.log("Click: " + this.props.name + " item id:", e.target.text);
    }

    render() {
        return (
            <Fragment>
                <h1 onClick={this.change}>{"hello " + this.props.name + " " + this.props.isdone + " !!!"}</h1>
            </Fragment>
        )
    }
}
