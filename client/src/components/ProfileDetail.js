import React, { useState ,useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Avatar from '../assets/Avatar.svg'
import email from '../assets/Frame.png'
import phone from '../assets/Vector.png'
//import Footer from '../component/footer.js'
import navigation from '../assets/navigation.png'
import frame from '../assets/linkedinlogo.png'

const fetchUsers = async (req_id) => {
    const res = await fetch(`https://nexum.wmdd4950.com/backend/api/v1/auth/getUsers/${req_id}`)
    const data = await res.json()

    console.log(data)
    return data
  };


const ProfileDetail = () => {
    const [users, setUsers] = useState([])
    let params = useParams();

    useEffect(() => {
        const getUsers = async () => {
          const users = await fetchUsers(params.id)
          setUsers(users)
        }
        getUsers()
      }, []);
      
    return (
        <>
        <div className="hero-section">
            <div className="navigation-section">
        <Link to={ `/` }> <img className='profileNav' src={navigation} alt="navigation" /> </Link>
        </div>
            <div className="hero-top">
           
                
                <h2>Student Profile</h2>
                <div className="job-detail-banner">
                    <h6 className='collName-banner'>Langara College</h6>
                    <span>{users.program}</span>
                </div>
            </div>
            <div className="hero-bottom">
                <div className="profile-avatar-container"><img src={Avatar} alt="logo" className='avatar-profile-details'/></div>
                <div className="detail-phone">
                    <span className='hero-name'>{users.name}</span> <br/>
                    <div className="detail-email">
                        <span className='student-email-section'><img src={email} alt="email" />{users.email}</span> <br />
                        <span className='student-phone-section'><img src={phone} alt="phone" />+1 {users.phoneNumber}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-detail-student">
            <div className="linkedin-button">
                <a href={users.linkedInProfile} rel='noreferrer' target='_blank'><button className='connectLinkedIn'> <img src={frame} alt="navigation" /> Connect</button></a>
            </div>
            <div className="about-me">
                <h4>About Me</h4>
                <p>{users.aboutMe} </p>
            </div>
            <div className="student-work-component">
            <div className="student-work-detail">
                <h4 className='heading-job'>{users.jobTitle} </h4> 
                <span>| {users.company}</span>
            </div>
            <div className="student-work-desc">
                <h4>Desription </h4> 
                <p>{users.jobDescription}
                </p>
            </div>
            <div className="job-poisition-detail-section">
                <div className="jPos">
                <h4>Job Position </h4>
                <p className='detail-doc-section'>{users.jobTitle}</p>
                </div>
                <div className="cName">
                <h4>Company Name </h4>
                <p className='detail-doc-section'>{users.company}</p>
                </div>
                <div className="eType">
                <h4>Employment Type </h4>
                <p className='detail-doc-section'>{users.employmentType}</p>
                </div>
                <div className="yoExp">
                <h4>Years of Experience </h4>
                <p className='detail-doc-section'>{users.yearsOfExperience}</p>
                </div>
            </div>
            </div>
            
        </div>

        
        </>
        
     );
}


 
export default ProfileDetail;