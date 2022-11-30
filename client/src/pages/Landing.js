//import Header from '../component/header'
import { Link } from 'react-router-dom'
import LogoIcon from '../assets/nexum_logo.png'
//import Footer from '../component/footer'
import Hero from '../components/Hero'
import Infosession1 from '../components/Infosession1'
import Infosession2 from '../components/Infosession2'
import Infosession3 from '../components/Infosession3'
import Footerland from '../components/Footerland'

const Landing = () => {
    return (
    <div className="thisBody">
        <div className="landingHeader">
            <div className="navLogo">
                <img className="landingImg" src={LogoIcon} alt="company logo" />
            </div>

            <div className="navList">
                <div className='vh'><Link to="/"> Home </Link></div>
                <div className='vh'><Link to="/"> Features </Link></div>
                <div className='vh'><Link to="/"> Our Team </Link></div>
                <div className='vh'><Link to="/"> Contact </Link></div>
                <div><Link to="/register"><button className="lgBtn">Login</button></Link></div>
            </div>
        </div>

        <Hero />
        <Infosession1 />
        <Infosession2 />
        <Infosession3 />

        <Footerland />
    </div>    
    )   
}
 
export default Landing;
