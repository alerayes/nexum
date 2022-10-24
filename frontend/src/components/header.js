import Logo from '../assets/nexum_logo.png'
import { Link  } from 'react-router-dom';


const Header = () => {
    return (   <>
        <header>
            <div className="logo-icon">
                <img className="logo" src={Logo} alt="Nexum logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>About</li>
                    <li>Product</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="login-signup">
            
                <Link to="/login">
                <button>Log In</button>
                </Link>
                
            
                
                <button>Sign up</button>
                
            </div>

        </header>
        <h1>Header fle</h1>
        </>
    );
}
 
export default Header;