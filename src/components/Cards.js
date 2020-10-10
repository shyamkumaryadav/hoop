import React, { Component, Fragment } from 'react'
// import google, { photoslibrary } from 'googleapis'
import Faker from 'faker'


export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: Faker.name.title()

        }
    }
    // componentDidMount = () => {
    //     console.log(this.state.posts)
    // }
    frClick = e => {
        this.setState({ posts: Faker.name.title() })
        console.log("Faker")
    }
    render() {
        return (
            <Fragment>
                <h3 className="text-center" style={{ color: "red" }}>{this.state.posts}</h3>
                <p onClick={this.frClick}><b>commitMessage: </b>{Faker.git.commitMessage()}</p>
                <p onClick={this.frClick}><b>uuid: </b>{Faker.random.uuid()}</p>
                <p onClick={this.frClick}><b>word: </b>{Faker.lorem.word()}</p>
                <p onClick={this.frClick}><b>words: </b>{Faker.lorem.words()}</p>
                <p onClick={this.frClick}><b>sentence: </b>{Faker.lorem.sentence()}</p>
                <p onClick={this.frClick}><b>slug: </b>{Faker.lorem.slug()}</p>
                <p onClick={this.frClick}><b>sentences: </b>{Faker.lorem.sentences()}</p>
                <p onClick={this.frClick}><b>paragraph: </b>{Faker.lorem.paragraph()}</p>
                <p onClick={this.frClick}><b>paragraphs: </b>{Faker.lorem.paragraphs()}</p>
                <p onClick={this.frClick}><b>text: </b>{Faker.lorem.text()}</p>
                <p onClick={this.frClick}><b>lines: </b>{Faker.lorem.lines()}</p>
            </Fragment >
        )
    }
}
