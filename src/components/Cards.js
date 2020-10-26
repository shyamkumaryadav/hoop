import React, { Component, Fragment } from 'react'


export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []

        }
    }
    // componentDidMount = () => {
    //     console.log(this.state.posts)
    // }
    frClick = e => {
        return (
            <Fragment>
                <h3 className="text-center" style={{ color: "red" }}>{this.state.posts}</h3>
                <p onClick={this.frClick}><b>commitMessage: </b>This is lorem   as</p>
                <p onClick={this.frClick}><b>uuid: </b>This is lorem    as</p>
                <p onClick={this.frClick}><b>word: </b>This is lorem    as</p>
                <p onClick={this.frClick}><b>words: </b>This is lorem   as</p>
                <p onClick={this.frClick}><b>sentence: </b>This is lorem    as</p>
                <p onClick={this.frClick}><b>slug: </b>This is lorem    as</p>
                <p onClick={this.frClick}><b>sentences: </b>This is lorem   as</p>
                <p onClick={this.frClick}><b>paragraph: </b>This is lorem   as</p>
                <p onClick={this.frClick}><b>paragraphs: </b>This is lorem  as</p>
                <p onClick={this.frClick}><b>text: </b>This is lorem    as</p>
                <p onClick={this.frClick}><b>lines: </b>This is lorem   as</p>
            </Fragment >
        )
    }
}
