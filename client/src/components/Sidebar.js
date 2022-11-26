import LogoDark from '../components/LogoDark'
import NavLinks from './NavLinks'
//import { UseAppContext } from '../context/appContext'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-content'>
        <header className='sidebar-header'>
          <LogoDark />
        </header>
        <p className='sidebar-p'>Langara College</p>
        <NavLinks />
      </div>
    </div>
  )
}

export default Sidebar
