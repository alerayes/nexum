import './index.css';
import Landing from './pages/landingPage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Landing/>
    </div>
    </BrowserRouter>
  );
}

export default App;
