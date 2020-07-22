import React, { Component, Fragment } from 'react'

const widthDiv = {
    width: "18rem"
};
export default class Cards extends Component {
    render() {
        return (
            <Fragment>
                <div className="card" style={widthDiv}>
                    <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div >
                <div className="card" style={widthDiv}>
                    <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div >
                <div className="card" style={widthDiv}>
                    <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div >
                <div className="card" style={widthDiv}>
                    <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div >
                <div className="card" style={widthDiv}>
                    <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div >
                <div className="card" style={widthDiv}>
                    <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div >
            </Fragment>
        )
    }
}
