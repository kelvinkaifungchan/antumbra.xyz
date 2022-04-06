import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './hamburger.module.css'

export const Hamburger = () => {

const [toggle, setToggle] = useState(false);

useEffect(() => {
    setToggle(false)
})

const handleToggle = () =>{
    if (toggle === true) {
        setToggle(false)
        console.log("try", toggle)
    } else {
        setToggle(true)
        console.log("working", toggle)
    }
}

return (
<div>
    <div onClick={() => handleToggle()}>
        <img className={`${styles.hamburger}`}
            src="https://aarchitecture.blob.core.windows.net/videos/hamburger-burger-food-junk-sandwich-beef-chicken-png-icon-free-588040.png" />
    </div>
    <div className={`${styles.modal}`} onClick={() => handleToggle()} style={toggle ? {opacity:"1", zIndex:"500"} : {opacity:"0", zIndex:"-500"}}>
        <Link className="px-3" to="/info">Information</Link><br/>
        <Link className="px-3" to="/archive">Archive</Link><br/>
        <Link className="px-3" to="/callformedia">Call for Media</Link>
    </div>
</div>

)
}