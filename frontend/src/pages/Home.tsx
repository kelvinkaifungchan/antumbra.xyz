import React from 'react';
import { NavBar } from '../components/navbar';
import styles from './Home.module.css';
import './Home.module.css';

export const Home = () => {
    return (
        <div>
                <div className={`${styles.blur} ${styles.dflexCenter}`}>
                    AARCHITECTURE
                </div>
                <div className={`${styles.header} ${styles.dflexCenter}`}>
                    <h1>THE WARM WAR</h1>
                </div>
            <NavBar/>
        </div>
    )
}