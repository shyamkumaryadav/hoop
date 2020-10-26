import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function TestRoute({ match }) {

    var [rinfo, setInfo] = useState([]);
    useEffect(() => {
        setInfo(match)
    }, [match]);
    return (
        <div>
            <h1>Test {rinfo.url} and {rinfo.params | 'no Item'}</h1>
            <Link to='/shyam'>This is 1 url</Link><br />
            <a href="/kumar">Don't Click me</a> <br />
            <Link to='/rollnumber2'>This is 2 url</Link><br />
            <Link to='/rollnumber3'>This is 3 url</Link><br />
            <Link to='/rollnumber4'>This is 4 url</Link><br />
        </div>
    )
}
