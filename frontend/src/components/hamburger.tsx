import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './hamburger.module.css'

export const Hamburger = () => {

const [toggle, setToggle] = useState(false);

useEffect(() => {
    console.log(toggle)
}, [toggle])

const handleToggle = () =>{
    setToggle( current => !current)
}

return (
<div>
    <div onClick={() => handleToggle()}>
        <img className={`${styles.hamburger}`}
            src="https://aarchitecture.blob.core.windows.net/videos/hamburger-burger-food-junk-sandwich-beef-chicken-png-icon-free-588040.png" />
    </div>
    <div className={`${styles.modal}`} onClick={handleToggle} style={toggle ? {width:"100%", opacity: "1"} : {width:"0%", opacity: "0"}}>
        <div>
        <Link className="px-3" to="/">Home</Link><br/>
        <Link className="px-3" to="/callformedia">Call for Media</Link><br/>
        <Link className="px-3" to="/info">Information</Link><br/>
        <Link className="px-3" to="/archive">Archive</Link><br/>
        </div>
    </div>
</div>

)
}