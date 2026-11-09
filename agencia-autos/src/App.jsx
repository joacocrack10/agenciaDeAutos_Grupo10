import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Turno from './pages/Turno';
import Admin from './pages/Admin';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turno" element={<Turno />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}