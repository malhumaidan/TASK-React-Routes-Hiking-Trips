import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import TripsList from './components/TripsList';
import TripDetail from './components/TripDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="page-top">
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<TripsList />} />
        <Route path="/list/:id" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
