import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Avatar from '../assets/Avatar_D.png'
import email from '../assets/Frame.png'
import phone from '../assets/Vector.png'

const fetchUsers = async (req_id) => {
    const res = await fetch(`/api/v1/auth/getUsers/${req_id}`)
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
            <div className="hero-top">
                <h2>Student Profile</h2>
                <div className="job-detail-banner">
                    <h6>Langara College</h6>
                    <span> Web and mobile App Design and Development</span>
                </div>
            </div>
            <div className="hero-bottom">
                <img src={Avatar} alt="logo" />
                <div className="detail-phone">
                    <span>{users.name}</span> <br/>
                    <div className="detail-email">
                        <span className='student-email-section'><img src={email} alt="email" />{users.email}</span> <br />
                        <span className='student-phone-section'><img src={phone} alt="phone" />+1 6048126881</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-detail-student">
            <div className="linkedin-button">
                <a href="www.linkedin.com" rel='noreferrer' target='_blank'><button> In Connect</button></a>
            </div>
            <div className="about-me">
                <h4>About Me</h4>
                <p>I'm Alan, a UX designer with a well-rounded background in communtication, design, UX research and web development. My main area of specialization lie in wireframe and userflow </p>
            </div>
            <div className="student-work-component">
            <div className="student-work-detail">
                <h4>UX Designer </h4> 
                <span>| Company Name</span>
            </div>
            <div className="student-work-desc">
                <h4>Desription </h4> 
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab voluptatem quo est minus asperiores quos aliquam hic ad eligendi id dolorum reprehenderit dolor atque adipisci repudiandae error, veritatis similique debitis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab voluptatem quo est minus asperiores quos aliquam hic ad eligendi id dolorum reprehenderit dolor atque adipisci repudiandae error, veritatis similique debitis.
                </p>
            </div>
            </div>
        </div>

        <h1>{users.email}</h1>
        </>
     );
}
 
export default ProfileDetail;