import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Livros from './Livros'
import Admin from './Admin.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Livros' element={<Livros />} />
        <Route path='/Admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


