import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.module.css"

export const NavBar = () => {
return (
<nav className='px-3 pt-3'>
    <div className='d-flex justify-content-between' style={{color: "#FF5C00",fontSize: '1.8rem'}}>
        <div>
                <Link to="/"><span style={{filter: 'blur(3px)'}}>AARCHITECTURE</span> 44</Link>
        </div>
        <div>
            {/* <Link className="px-3" to="/info">INFORMATION</Link> */}
            {/* <Link className="pl-3" to="/callformedia">CALL FOR MEDIA</Link> */}
            <Link className="px-3" to="/">The Warm War</Link>
        </div>
    </div>
</nav>
)
}