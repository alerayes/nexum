import {Outlet} from 'react-router-dom'
import {Navbar, Sidebar} from  '../../components'
import DashboardFooter from "../../component/footer.js";

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
      <DashboardFooter/>
    </div>
    </main>
  </> 
  )
}

export default SharedLayout
