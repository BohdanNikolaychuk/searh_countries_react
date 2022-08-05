import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Detalies from './pages/Detalies/Detalies';
import Layout from './components/Layout/Layout';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home countries={countries} setCountries={setCountries} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/country/:name" element={<Detalies />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
