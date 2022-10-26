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
                //<Link to="/signup"><button>Sign Up</button></Link>
            </div>
        </header>

        <footer>
            <div className="landingFooter">

                <div>
                    <h2>Contact Nexum</h2>
                    <p>We're here to help and answer any questions you might
                        have. We look forward to hearing from you.
                    </p>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>

                        <label>First Name*</label><br>
                        <input type="text" onChange={(e) => setfName(e.target.value)} value={fName}/>

                        <label>Last Name*</label><br>
                        <input type="text" onChange={(e) => setlName(e.target.value)} value={lName}/>

                        <label>Email:</label><br>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        
                        <textarea rows="4" cols="50" name="comment" form="usrform">
                        </textarea>
                        
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </footer>

    </body>
    )
    
}
 
export default Landing;
