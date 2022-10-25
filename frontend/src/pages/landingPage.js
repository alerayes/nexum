import Header from '../component/header'
import { Link } from 'react-router-dom'
import { Button } from 'react-native'

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
                <Button title="LOGIN"> accessibilityLabel="Login button"/>
            </div>
        </header>
    </body>
    )
    
}
 
export default Landing;
