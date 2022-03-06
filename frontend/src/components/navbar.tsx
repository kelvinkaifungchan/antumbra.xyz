import React from 'react';
import { Link } from 'react-router-dom';
import { HorizontalLine } from './horizontalLine';
import "./navbar.module.css"

export const NavBar = () => {
return (
<nav className='p-3'>
    <div className='d-flex justify-content-between'>
        <div>
            <b>
                <Link to="/">44</Link></b>
        </div>
        <div>
            <Link className="px-3" to="/archive">Archive</Link>
            <Link className="px-3" to="/info">Info</Link>
            <Link className="pl-3" to="/callformedia">Call for Media</Link>
        </div>
    </div>
    <HorizontalLine />
</nav>
)
}