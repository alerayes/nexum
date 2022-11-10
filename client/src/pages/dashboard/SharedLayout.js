import {Outlet, Link} from 'react-router-dom'
import {Navbar, Sidebar, DashboardFooter} from  '../../components'

const SharedLayout = () => {
  return (
  <>
    <main className='dashboard'>
    <Sidebar/>
    <div>
      <Navbar/>
      <div className='dashboard-page'>
        <Outlet/>
      </div>
      {/* <DashboardFooter/> */}
    </div>
    </main>
  </> 
  )
}

export default SharedLayout
