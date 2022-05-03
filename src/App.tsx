import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './paginas/home/Home'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import './App.css';


function App() {
  return (
            <Router>
                <Navbar />
                  <div style={{ minHeight: '100vh' }}>
                    <Routes> {/* Antigo Switch */}
                      <Route path="/" element={<Login />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/usuarios/cadastrar" element={<CadastroUsuario />} />
                    </Routes>
                  </div>
                <Footer />
            </Router>
        );
}

export default App;
