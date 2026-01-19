import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

// page components
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App;
