// // import Navbar from './components/navbar/NavBar';
// import './index.css'; // o './tailwind.css'
// import './assets/fonts/fonts.css';
// import Login from './pages/login';
// import Register from './pages/register';
// import Index from './pages/index/index';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App

import './index.css';
import './assets/fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import FilterPage from './pages/filtros/filter';
const Index = lazy(() => import("./pages/index/index"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Cargando...</div>}><Index /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<div>Cargando...</div>}><Login /></Suspense>} />
          <Route path="/register" element={<Suspense fallback={<div>Cargando...</div>}><Register /></Suspense>} />
          <Route path="/mujer/:categoria" element={<Suspense fallback={<div>Cargando...</div>}><FilterPage /></Suspense>} />
        </Routes>
      </Router>
    </>
  )
}

export default App