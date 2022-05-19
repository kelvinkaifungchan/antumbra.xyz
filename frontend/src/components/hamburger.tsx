import { useState } from "react";
import { Link } from "react-router-dom";
import style from './hamburger.module.css'
import styles from '../pages/Home.module.css'

export const Hamburger = () => {

const [toggle, setToggle] = useState(false);

const handleToggle = () =>{
    setToggle( current => !current)
}

return (
<div>
    <div onClick={() => handleToggle()}>
        <img className={`${style.hamburger}`}
            src="https://aarchitecture.blob.core.windows.net/videos/hamburger-burger-food-junk-sandwich-beef-chicken-png-icon-free-588040.png" alt="hamburger menu" />
    </div>
    <div className={`${style.modal} ${styles.fontTitle}`} onClick={handleToggle} style={toggle ? {width:"100%", opacity: "1", zIndex:"100"} : {width:"0%", opacity: "0", zIndex:"-10"}}>
        <div>
            <Link className="px-3" to="/">Home</Link><br/>
            <Link className="px-3" to="/network-scrape">Network-Scrape</Link><br/>
            <Link className="px-3" to="/info">Information</Link><br/>
        </div>
    </div>
</div>

)
}