import { useState } from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(true)
  
  return (
    <div className="navbar-container">
      <div className="navbar-btn-container">
        <button
          type='button'
          className='navbar-btn'
          onClick={() => setShowLogout(!showLogout)}
        >
            <FaUserCircle/>
            Ale 
            <FaCaretDown/> 
        </button>
        <div className={showLogout ? 'navbar-dropdown' : 'show-navbar-dropdown'}>
          <button
            type='button'
            onClick={() => console.log('logout user')}
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
