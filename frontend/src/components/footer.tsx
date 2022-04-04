import { Link } from 'react-router-dom';

export const Footer = () => {
return (
<footer className='p-3'>
    <div className='d-flex justify-content-between align-items-start' style={{color: "#FF5C00",fontSize: '1.8rem'}}>
        <div>
                <a href='https://www.aaschool.ac.uk/' target={"blank"}><img src="https://aarchitecture.blob.core.windows.net/videos/Architectural_association_school_of_architecture_logo.png" alt="Architectural Association" width="auto" height="60"/></a>
        </div>
        <div style={{fontSize:'1rem', opacity:'0.7', width:"20%"}}>
        The Warm War is developed and edited by Karl Herdersch, Kaifung Kelvin Chan and Alexander Balgarnie
        </div>
        <div style={{fontSize:'1rem'}}>
            <Link className="px-3" to="/info">Information</Link><br/>
            {/* <Link className="pl-3" to="/callformedia">CALL FOR MEDIA</Link> */}
            <Link className="px-3" to="/">Privacy Policy</Link><br/>
            <Link className="px-3" to="/archive">Archive</Link><br/>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div style={{fontSize:'1rem'}}>
            <a href="mailto:aarchitecture@aaschool.ac.uk">Contribute</a><br/>
            <a href="https://www.instagram.com/aarchitecture44/" target={"blank"}>Instagram</a><br/>
        </div>
    </div>
</footer>
)
}