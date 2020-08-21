import React, { Component, Fragment } from 'react'
import Card from './Card'
import axios from 'axios'


export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            is_load: false,
            number: Math.floor(Math.random() * Math.floor(60))
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + this.state.number, { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                if (res.ok) {
                    console.log(res.data)
                    this.setState({
                        post: res.data,
                        is_load: true
                    })
                }
            }
            )
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Fragment>
                <h3 className="text-center" style={{ color: "red" }}>List of Posts</h3>
                <div className="row">
                    {
                        this.state.is_load &&
                        this.state.posts.map(post => <Card key={post.id} post={post}></Card>)
                    }
                </div>
            </Fragment >
        )
    }
}
