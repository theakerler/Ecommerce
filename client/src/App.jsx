// import Navbar from './components/navbar/NavBar';
import './index.css'; // o './tailwind.css'
import './assets/fonts/fonts.css';
import Login from './pages/login';
import Index from './pages/index/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
