import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Register, StudentDashboard, Error,Landing} from './pages'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/dashboard/*" element={<StudentDashboard/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/landing" element={<Landing/>} />
            <Route path="*" element={<Error/>}/>
          </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
