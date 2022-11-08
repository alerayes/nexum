import {Outlet, Link} from 'react-router-dom'

const SharedLayout = () => {
  return (
  <>
    <nav>
      <Link to='job-board'>Job Board</Link>
      <Link to='profile'>Profile</Link>
    </nav>
    <Outlet/>
  </> 
  )
}

export default SharedLayout
