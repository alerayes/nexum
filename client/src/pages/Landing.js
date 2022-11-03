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
                <img src="" alt="Feature 1" />
            <div className="column">
                
            </div>

            <div className="column">
                <img src="" alt="Feature 2" />
            </div>

            <div className="column">
                <h3>Feature 2</h3>
            </div>

            <div className="column">
                <h3>Feature 3</h3>
            </div>

            <div className="column">
                <img src="" alt="Feature 3" />
            </div>
        </div>
        
        <div>
            <div>
                <div>
                    <h3>Increase your Network in your University</h3>
                </div>
                <div>
                    <Link to="/login"><button>Login</button></Link>
                </div>
            </div>
            
            <h3></h3>

            <div>
                <div className="column">
                    <img src="" alt="" />
                    <div className="devDetails">
                        <h3>Name</h3>
                        <h3>Position</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>

                <div className="column">
                    <img src="" alt="" />
                    <div className="devDetails">
                        <h3>Name</h3>
                        <h3>Position</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>

                <div className="column">
                    <img src="" alt="" />
                    <div className="devDetails">
                        <h3>Name</h3>
                        <h3>Position</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>
            </div>

            <div>
                <div className="column">
                    <img src="" alt="" />
                    <div className="devDetails">
                        <h3>Name</h3>
                        <h3>Position</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>

                <div className="column">
                    <img src="" alt="" />
                    <div className="devDetails">
                        <h3>Name</h3>
                        <h3>Position</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>

                <div className="column">
                    <img src="" alt="" />
                    <div className="devDetails">
                        <h3>Name</h3>
                        <h3>Position</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>

                <div className="column">
                    <img src="" alt="" />
                    <div className="devDetails">
                        <h3>Name</h3>
                        <h3>Position</h3>
                        <h3>LinkedIn</h3>
                    </div>
                </div>
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
                    <form>
                        <label>First Name*</label>
                        <input type="text"/>
                        
                        <label>Last Name*</label>
                        <input type="text"/>
                        
                        <label>Email:</label>
                        <input type="email"/>

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
