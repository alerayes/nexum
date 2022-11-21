import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Register, StudentDashboard, Error,Landing, ProtectedRoute, AdminDashboard} from './pages'
import {JobBoard, StudentList, Profile, SharedLayout} from './pages/dashboard'
import ProfileDetail from './components/ProfileDetail';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route 
              path='/' 
              element={
                <ProtectedRoute>
                  <SharedLayout/>
                </ProtectedRoute>
              }
            >
              <Route index element={<StudentList/>}/>
              <Route path='job-board' element={<JobBoard/>}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='alumni-individual-profile/:id' element={<ProfileDetail/>}/>
              <Route path='dashboard' element={<AdminDashboard/>}/>

            </Route>
            <Route path="/register" element={<Register/>}/>
            <Route path="/landing" element={<Landing/>} />
            {/* <Route path="*" element={<Error/>}/> */}
          </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
