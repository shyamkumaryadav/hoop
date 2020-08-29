import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function TestRoute({ match }) {

    var [jiinfo, setInfo] = useState([]);
    useEffect(() => {
        console.log(jiinfo)
        setInfo(match)
        console.log(jiinfo.params)
    }, [match]);
    return (
        <div>
            <h1>Test {jiinfo.url} and {jiinfo.params | 'no Item'}</h1>
            <Link to='/rollnumber1'>This is 1 url</Link><br />
            <Link to='/rollnumber2'>This is 2 url</Link><br />
            <Link to='/rollnumber3'>This is 3 url</Link><br />
            <Link to='/rollnumber4'>This is 4 url</Link><br />
        </div>
    )
}
