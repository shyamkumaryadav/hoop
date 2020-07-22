import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Hadder extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="/"><p>Home</p>
                        </a>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
