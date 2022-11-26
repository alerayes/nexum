import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import linksDashboard from '../utils/linksDashboard'
import { UseAppContext } from '../context/appContext'

const NavLinks = () => {
  const {user} = UseAppContext()
  const [email, setEmail] = useState(user?.email)

  if(user.email === 'alerayes@hotmail.com') {
    return (
      <div className='nav-links'>
        {linksDashboard.map((link) => {
          const {text, path, id} = link

          return(
            <NavLink 
              to={path}
              key={id}
              className='nav-link'
            >
            {text}
            </NavLink>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='nav-links'>
        {links.map((link) => {
          const {text, path, id} = link

          return (
            <NavLink
              to={path}
              key={id}
              className='nav-link'
            >
              {text}
            </NavLink>
          )
        })}

      </div>
    )
  }

  // return (
  //   <div className='nav-links'>
  //     {links.map((link) => {
  //       const { text, path, id } = link

  //       return (
  //         <NavLink
  //           to={path}
  //           key={id}
  //           className='nav-link'
  //         >
  //           {/* <span className='icon'>{icon}</span> */}
  //           {text}
  //         </NavLink>
  //       )
  //     })}
  //   </div>
  // )
}

export default NavLinks