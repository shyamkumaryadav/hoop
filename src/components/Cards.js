import React, { Component, Fragment } from 'react'

const widthDiv = {
    width: "18rem"
};

const Image = (props) => {
    return (
        <div className="card" style={widthDiv}>
            <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">id is {props.id} quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" onMouseLeave={props.btnclick} onMouseOver={props.btnclick} className="btn btn-primary">Go somewhere</a>
            </div>
        </div >
    )
}
export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: false
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("componet getDerivedStateFromProps")
        return null
    }


    imageCheck = () => {
        this.setState({
            message: !this.state.message
        })
    }


    render() {
        return (
            <Fragment>
                <h1>Cards:{this.state.message ? "checked" : ""}<br /></h1>
                <Image btnclick={this.imageCheck} id={<h1>Shyam</h1>} />
            </Fragment>
        )
    }
}
