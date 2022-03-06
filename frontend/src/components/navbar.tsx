import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.module.css"

export const NavBar = () => {
return (
<nav className='p-3'>
    <div className='d-flex justify-content-between'>
        <div>
            <b><Link to="/">44</Link></b>
        </div>
        <div>
            <Link className="px-3" to="/archive">Archive</Link>
            <Link className="px-3" to="/contact">Contact</Link>
            <Link className="pl-3" to="/contact">Call for Media</Link>
        </div>
    </div>
    <hr
        style={{
            color: 'white',
            backgroundColor: 'white',
            height: 0.5,
        }}
    />
</nav>
)
}