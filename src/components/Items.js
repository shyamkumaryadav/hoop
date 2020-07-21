import React, { Component } from 'react'
import Item from './Item';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:
                [
                    {
                        id: Math.random(),
                        name: "Shyam",
                        is_done: true
                    }, {
                        id: Math.random(),
                        name: "Shyam",
                        is_done: true
                    }, {
                        id: Math.random(),
                        name: "Kumar",
                        is_done: false
                    }
                ]
        }
    };
    const taskList = this.state.items.map(task => (
        <Item
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
        />
    )
    );
    render() {
        return (
            <div>
                <h1>Items are: </h1>
                {this.itemApp}
            </div>
        )
    }
}
