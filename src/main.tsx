import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Livraria from './Livraria'
import Admin from './Admin';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Livraria' element={<Livraria />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
