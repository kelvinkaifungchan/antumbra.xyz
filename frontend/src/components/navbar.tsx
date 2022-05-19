import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/Home.module.css'

export const NavBar = () => {
return (
<>
    <nav className={`px-3 pt-3 ${styles.screenSmall}`}>
        <div className="d-flex justify-content-between" style={{color: "#FF5C00", fontSize: "1.2rem"}}>
            <div>
                <Link to="/">Antumbra.DAO</Link>
            </div>
            <div>
                <Link to="/network-scrape">Warmth</Link>
            </div>
        </div>
    </nav>
    <nav className={`px-3 pt-3 ${styles.screenBig}`}>
        <div className="d-flex justify-content-between" style={{color: "#FF5C00", fontSize: "1.2rem"}}>
            <div>
                <Link to="/">Antumbra.DAO</Link>
            </div>
            <div className={styles.ibmFont} style={{color: "#FFFFFF", letterSpacing:"0.2rem", opacity:"0.8"}}>
                INTERFACE
            </div>
            <div>
                <Link to="/network-scrape">Warmth</Link>
            </div>
        </div>
    </nav>
</>
)
}