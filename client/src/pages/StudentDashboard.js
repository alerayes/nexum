import LogoIcon from '../assets/nexum_logo.png'
import Avatar from '../assets/Avatar_D.png'
import Footer from '../component/footer'
import AlumniList from '../components/AlumniList.js'
import Job from '../components/JobBoard.js'
import Maindashboard from '../components/Dashboard.js'
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";

const StudentDashboard = () => {
    const data  = JSON.parse(localStorage.getItem('user'));

    return ( 
        <>
        <div className='header-area'> 
            <div className="logo-SDashboard">
            <img className='img-logo' src={LogoIcon} alt="logo" />
            
            <img className='img-avatar' src={Avatar} alt="default avatar" />
        </div>
        </div>
        <div className="main-studentdashbaord">
            <div className="nav-detail">
                <nav>
                    <ul>
                        <li className='login-name'>{data.name}</li>  
                        <Link to="alumni"><li>Alumni List</li></Link>
                        <Link to="job-board"><li>Job Board</li></Link>
                        <Link to="profile"><li>Profile</li></Link>
                
                    </ul>
                </nav>
            </div>

            <Routes>
            <Route element={<Maindashboard />} 
            path="/"
            />
            {/* <Route element={<Job />} 
            path="/"
            /> */}
            <Route element={<AlumniList />}
            path="alumni"
            />
            <Route element={<Maindashboard />} 
            path="/profile"
            />
            <Route element={<Job />} 
            path="job-board"
            />
        
            </Routes>

           

       
        </div>
        
        <Footer/>
        </>
    
     );
};


const TestComponent = () => {
    return (
        <>
        
        <div className="alumni-list">
        <h1>Alumni List</h1>
        <div className="search-list">
            <input type="text" />
            <button>Search</button>
        </div>
        <hr />
    </div></>
    )
}
 
export default StudentDashboard;