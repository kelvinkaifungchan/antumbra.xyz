import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.module.css"

export const NavBar = () => {
return (
<nav>
    <ul>
        <li>
            <Link to="/">44</Link>
        </li>
        <li>
            <Link to="/contact">Archive</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li style={{float:"right"}}>
            <Link to="/contact">Call for Media</Link>
        </li>
    </ul>
</nav>
)
}