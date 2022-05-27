import { Link } from 'react-router-dom';
import styles from '../pages/Home.module.css';

export const Footer = () => {
return (
<>
<footer className={`p-3 ${styles.screenSmall}`}>
    <div className='row' style={{color: "#FF5C00",fontSize: '1.8rem'}}>
        <div className='col-12 col-lg-3 py-3' style={{fontSize:'1rem', opacity:'0.7', width:"20%"}}>
        Antumbra.xyz is a decentralised autonomous broadcasting organisation inspired by alternative routing of knowledge and governance.
        </div>
        <div className='col-12 col-lg-3' style={{fontSize:'1rem'}}>
            <a href="/callformedia">Network-Scrape</a><br/>
            <a href="/info">Information</a><br/>
            <a href="mailto:contact@antumbra.xyz">Contribute</a><br/>
            <a href="https://twitter.com/antumbraxyz" target={"blank"}>Twitter</a><br/>
            <a href="https://www.instagram.com/antumbra.xyz/" target={"blank"}>Instagram</a><br/>
        </div>
    </div>
</footer>
<footer className={`p-3 ${styles.screenBig}`}>
    <div className='row' style={{color: "#FF5C00",fontSize: '1rem', opacity:'0.7'}}>
        <div className='col-12 col-md-4' style={{width:"20%"}}>
        Antumbra.xyz is a decentralised autonomous broadcasting organisation inspired by alternative routing of knowledge and governance.
        </div>
        <div className='col-12 col-md-4'>
        <Link className="px-3" to="/network-scrape">Network-Scrape</Link><br/>
            <Link className="px-3" to="/info">Information</Link><br/>
        </div>
        <div className='col-12 col-md-4'>
            <a href="mailto:contact@antumbra.xyz">Participate</a><br/>
            <a href="https://twitter.com/antumbraxyz" target={"blank"}>Twitter</a><br/>
            <a href="https://www.instagram.com/antumbra.xyz/" target={"blank"}>Instagram</a><br/>
        </div>
    </div>
</footer>
</>
)
}