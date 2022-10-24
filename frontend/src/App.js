
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Login from './pages/Login'
import Signup from './pages/Signup';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/login"
            element={<Login />}
          />
          <Route 
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
