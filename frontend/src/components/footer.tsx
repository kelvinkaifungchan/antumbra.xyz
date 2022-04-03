import { Link } from 'react-router-dom';

export const Footer = () => {
return (
<footer className='p-3'>
    <div className='d-flex justify-content-between align-items-start' style={{color: "#FF5C00",fontSize: '1.8rem'}}>
        <div>
                <Link to="https://www.aaschool.ac.uk/"><img src="https://aarchitecture.blob.core.windows.net/videos/Architectural_association_school_of_architecture_logo.png" alt="Architectural Association" width="auto" height="60" style={{filter:"invert(1)"}}/></Link>
        </div>
        <div style={{fontSize:'1rem', opacity:'0.8'}}>
        36 Bedford Square<br/>
        London<br/>
        WC1B 3ES
        </div>
        <div style={{fontSize:'1rem'}}>
            <Link className="px-3" to="/info">About</Link><br/>
            <Link className="px-3" to="/">Contributors</Link><br/>
            {/* <Link className="pl-3" to="/callformedia">CALL FOR MEDIA</Link> */}
            <Link className="px-3" to="/">Privacy Policy</Link><br/>
            <Link className="px-3" to="/archive">Archive</Link><br/>
        </div>
        <div style={{fontSize:'1rem'}}>
        </div>
        <div></div>
        <div></div>
        <div style={{fontSize:'1rem'}}>
            <Link className="px-3" to="/">Contribute</Link><br/><br/>
            <Link className="px-3" to="https://www.instagram.com/aarchitecture44/">Instagram</Link><br/>
        </div>
    </div>
</footer>
)
}