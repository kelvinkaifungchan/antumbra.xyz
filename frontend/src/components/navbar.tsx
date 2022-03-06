import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
                <li> 
                    <button><Link to="/">44</Link></button>
                </li>
                <li> 
                    <button><Link to="/contact">Archive</Link></button>
                </li>
                <li> 
                    <button><Link to="/contact">Contact</Link></button>
                </li>
                <li> 
                    <button><Link to="/contact">Call for Media</Link></button>
                </li>
        </div>
    )
}