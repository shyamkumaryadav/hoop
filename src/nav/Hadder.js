import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default class Hadder extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand" to='/'><p>Home</p>
                        </Link>
                        <Link className="navbar-brand" to='/login'><p>login</p>
                        </Link>
                        <Link className="navbar-brand" to='/logout'><p>logout</p>
                        </Link>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
