import './index.css';
import './assets/fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import FilterPage from './pages/filtros/filter';
import PrendaDetails from './pages/filtros/prendaDetails';
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
          <Route path="/mujer/:categoria/:id/:descuento" element={<Suspense fallback={<div>Cargando...</div>}><PrendaDetails /></Suspense>} />
        </Routes>
      </Router>
    </>
  )
}

export default App