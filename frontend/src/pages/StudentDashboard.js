import LogoIcon from '../assets/nexum_logo.png'
import Avatar from '../assets/Avatar_D.png'

const StudentDashboard = () => {
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
                        <li>Alumni List</li>
                        <li>Job Board</li>
                        <li>Profile</li>
                    </ul>
                </nav>
            </div>
            <div className="alumni-list">
                <h1>Alumni List</h1>
                <div className="search-list">
                    <input type="text" />
                    <button>Search</button>
                </div>
                <hr />
            </div>
        </div>
        
        </>
    
     );
}
 
export default StudentDashboard;