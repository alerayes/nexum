import { useState } from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { UseAppContext } from '../context/appContext'


const Navbar = () => {
  const [showLogout, setShowLogout] = useState(true)
  const { user, logoutUser} = UseAppContext()

  
  return (
    <div className="navbar-container">
      <div className="navbar-btn-container">
        <button
          type='button'
          className='navbar-btn'
          onClick={() => setShowLogout(!showLogout)}
        >
            <FaUserCircle/>
             {user && user.name}
            <FaCaretDown/> 
        </button>
        <div className={showLogout ? 'navbar-dropdown' : 'show-navbar-dropdown'}>
          <button
            type='button'
            onClick={logoutUser}
            className='navbar-dropdown-btn'
          >
            logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
