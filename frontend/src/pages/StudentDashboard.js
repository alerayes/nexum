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
        
        </>
    
     );
}
 
export default StudentDashboard;