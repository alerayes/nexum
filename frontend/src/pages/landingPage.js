//import Header from '../component/header'
import { Link } from 'react-router-dom'


const Landing = () => {
     return (
    <body> 
        <header className="Landing">
            <div className="logo">

            </div>

            <div className="Nav">
                <Link to="/"> Home </Link>
                <Link to="/"> Features </Link>
                <Link to="/"> Our Team </Link>
                <Link to="/"> Contact </Link>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Sign Up</button></Link>
            </div>
        </header>
    </body>
    )
    
}
 
export default Landing;
