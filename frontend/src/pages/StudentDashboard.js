import LogoIcon from '../assets/nexum_logo.png'
import Avatar from '../assets/Avatar_Default.png'

const StudentDashboard = () => {
    return ( 
        <>
        <div className='header-area'> 
            <img src={LogoIcon} alt="logo" />
            <div className="avatar">
                <img src={Avatar} alt="default avatar" />
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
                <h1>Student List</h1>
                <div className="search-list">
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
        </div>
        
        </>
    
     );
}
 
export default StudentDashboard;