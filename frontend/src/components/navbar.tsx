import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/Home.module.css'

export const NavBar = () => {
return (
<>
    <nav className={`px-3 pt-3 ${styles.screenBig}`}>
        <div className="d-flex justify-content-between" style={{color: "#FF5C00", fontSize: "1.8rem"}}>
            <div>
                <Link to="/"><span style={{filter: 'blur(3px)'}}>AARCHITECTURE</span> 44</Link>
            </div>
            <div>
                <Link to="/callformedia">The Warm War</Link>
            </div>
        </div>
    </nav>
    <nav className={`px-3 pt-3 ${styles.screenSmall}`}>
        <div className="d-flex justify-content-between" style={{color: "#FF5C00", fontSize: "1.8rem"}}>
            <div>
                <Link to="/"><span style={{filter: 'blur(3px)'}}>AA</span> 44</Link>
            </div>
            <div>
                <Link to="/callformedia">The Warm War</Link>
            </div>
        </div>
    </nav>
</>
)
}