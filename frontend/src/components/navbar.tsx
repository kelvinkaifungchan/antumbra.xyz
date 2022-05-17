import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/Home.module.css'

export const NavBar = () => {
return (
<>
    <nav className={`px-3 pt-3 ${styles.screenSmall}`}>
        <div className="d-flex justify-content-between" style={{color: "#FF5C00", fontSize: "1.2rem"}}>
            <div>
                <Link to="/">Antumbra.dao Warmth</Link>
            </div>
            {/* <div>
                <Link to="/callformedia">Warmth</Link>
            </div> */}
        </div>
    </nav>
    <nav className={`px-3 pt-3 ${styles.screenBig}`}>
        <div className="d-flex justify-content-between" style={{color: "#FF5C00", fontSize: "1.2rem"}}>
            <div>
                <Link to="/">Antumbra.dao</Link>
            </div>
            <div className={styles.ibmFont} style={{color: "#FFFFFF", letterSpacing:"0.2rem", opacity:"0.8"}}>
                Interface
            </div>
            <div>
                <Link to="/callformedia">Warmth</Link>
            </div>
        </div>
    </nav>
</>
)
}