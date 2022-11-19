import { useEffect, useState } from "react"
import Avatar from '../../assets/Avatar_D.png'
import { Link } from "react-router-dom";
import Footer from '../../component/footer.js'

const StudentList = () => {
  const [users, setUsers] = useState([])
  

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers()
      setUsers(users)
    }
    getUsers()
  }, [])

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch('/api/v1/auth/getUsers')
    const data = await res.json()

    console.log(data)
    return data
  };

   

  return (
    <>
    <div>
      <div className="alumni-list">
        <h1>Student List</h1>
        <div className="search-list">
            <input type="text" />
            
            <button className="search">Search</button>
        </div>
        <hr />
        <div className="alumni-list-detail">
        <ul>
        {
        users.length && users.map((user) => (
          <li key={user._id}>
          <div className="avatar-img-alumniList">
              <img className='alumni-avatar' src={Avatar} alt="default avatar" />
          </div>
          <div className='fb'>
              <span>Alumni</span> 
              <h6>{user.name}</h6>
          </div>
          <div className='fb1'>
              <h6>Front End Developer</h6>
              <span>3 Years of Experience</span>
          </div>
          <div className='fb2'>
          <Link to={ `alumni-individual-profile/${user._id}` }> <button className="alumni-list-button"  >View Profile</button> </Link>
              
          </div>
          
      </li>
          
          
          
        ))
      }
            
  
            
        </ul>
        
    </div>    
    </div>


      
    </div>
    <Footer/>
    </>
    
  )
}

export default StudentList
