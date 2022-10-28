//import Header from '../component/header'
import { Link } from 'react-router-dom'

const Landing = () => {
     return (
    <div> 
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
        
        {/* Hero */}

        <section className="hero">
            <div className="content">
                <h1 className="hero_title">
                
                </h1>
                    
                <h2 className="subtitle">
                
                </h2>
            </div>
        </section>

       
        <h2> Main Features </h2> 
        <div className="columns">
            <div className="column">
                <h3>Feature 1</h3>
            </div>
                <img src={photo} alt="Feature 1" />
            <div className="column">
                
            </div>

            <div className="column">
            <img src={photo} alt="Feature 2" />
            </div>

            <div className="column">
                <h3>Feature 2</h3>
            </div>

            <div className="column">
                <h3>Feature 3</h3>
            </div>

            <div className="column">
            <img src={photo} alt="Feature 3" />
            </div>
        </div>
        

        <div className="footer">
            <div className="landingFooter">

                <div>
                    <h2>Contact Nexum</h2>
                    <p>We're here to help and answer any questions you might
                        have. We look forward to hearing from you.
                    </p>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <label>First Name*</label>
                        <input type="text" onChange={(e) => setfName(e.target.value)} value={fName}/>
                        
                        <label>Last Name*</label>
                        <input type="text" onChange={(e) => setlName(e.target.value)} value={lName}/>
                        
                        <label>Email:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>

                        <textarea rows="4" cols="50" name="comment" form="usrform">
                        </textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )  
}
 
export default Landing;
