import { useState, useEffect } from 'react';
import './App.css';

export default function App(){
  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Historia /> } />
        <Route path="/Historia" element={<Historia />} />
        <Route path="/Logros" element={<Logros />} />
        <Route path="/Premios" element={<Premios />} />
        <Route path="/Actualidad" element={<Actualidad />} />  

      </Routes>
      </BrowserRouter>
    </div>
  )
  }