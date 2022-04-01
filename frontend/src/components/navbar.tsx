import React from 'react';
import { Link } from 'react-router-dom';
import { HorizontalLine } from './horizontalLine';
import "./navbar.module.css"

export const NavBar = () => {
return (
<nav className='p-3'>
    <div className='d-flex justify-content-between' style={{fontSize: '1.5rem'}}>
        <div>
                <Link to="/"><span style={{filter: 'blur(3px)'}}>AARCHITECTURE</span> 44</Link>
        </div>
        <div>
            <Link className="px-3" to="/archive">ARCHIVE</Link>
            <Link className="px-3" to="/info">INFO</Link>
            <Link className="pl-3" to="/callformedia">CALL FOR MEDIA</Link>
        </div>
    </div>
</nav>
)
}