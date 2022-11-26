import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import { UseAppContext } from '../context/appContext'
import linksDashbaord from '../utils/linksDashbaord.js'



const NavLinks = () => {
  const { user } = UseAppContext()
  console.log(user.email)

  return (
    
    <div className='nav-links'>
      {user.email ==='bhanuj.nagpal@gmail.com' ? linksDashbaord.map((link) => {
        const { text, path, id } = link

        return (
          <>
          
          <NavLink
            to={path}
            key={id}
            className='nav-link'
          >
            {/* <span className='icon'>{icon}</span> */}

            {text} 
          </NavLink>
          </>
        )
      }) : links.map((link) => {
        const { text, path, id } = link

        return (
          <>
          
          <NavLink
            to={path}
            key={id}
            className='nav-link'
          >
            {/* <span className='icon'>{icon}</span> */}

            {text} 
          </NavLink>
          </>
        )
      }) }
      
    </div>
  )
}

export default NavLinks