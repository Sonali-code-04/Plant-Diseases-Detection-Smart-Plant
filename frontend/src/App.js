import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import DetectionPage from './Component/DetectionPage'
import Dashboard from './Component/Dashboard';
import ChatBot from './Component/ChatBot';
import Shop from './Component/Shop';

function App() {

  return(
     <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
         <Route path='/detect' element={<DetectionPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/chatbot' element={<ChatBot/>} />
          <Route path='/shop' element={<Shop/>} />
      </Routes>
     </Router>
  );
}

export default App;