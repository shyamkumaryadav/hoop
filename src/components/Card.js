import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a_post: ""
        }
    }

    render() {
        return (
            <>
                <div className="card mb-4 box-shadow" style={{ width: "18rem" }}>
                    <img src={this.props.post.thumbnailUrl} className="card-img-top" alt={this.props.post.title}></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.title}<span className='badge badge-secondary text-success'>New</span></h5>
                        <p className="card-text">{this.props.post.title}</p>
                        <a className="btn btn-primary">User {this.props.post.albumId}</a>
                    </div>
                </div >
            </>
        )
    }
}

export default Card
