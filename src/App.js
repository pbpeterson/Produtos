import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contato from './Contato';
import Header from './Header';
import Home from './Home';
import Notfound from './Notfound';
import Produto from './Produto';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
