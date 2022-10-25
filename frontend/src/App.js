import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landingPage'


// pages & components
import Login from './pages/Login'
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      { <BrowserRouter>
        { <Routes>
          <Route 
            path="/login"
            element={<Login />}
          />
          <Route 
            path="/signup"
            element={<Signup />}
          />
        </Routes>}
        <Landing />
      </BrowserRouter>}
      <header className="App-header">
      
      </header>
      
    </div>
  );
}

export default App;
