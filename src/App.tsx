import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './paginas/home/Home'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import './App.css';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import store from './store/store'


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
            <Router>
                <Navbar />
                  <div style={{ minHeight: '100vh' }}>
                    <Routes> {/* Antigo Switch */}
                      <Route path="/" element={<Login />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/usuarios/cadastrar" element={<CadastroUsuario />} />
                      <Route path="/temas" element={<ListaTema />} />
                      <Route path="/postagens" element={<ListaPostagem />} />
                      <Route path="/formularioPostagem" element={<CadastroPost />} />
                      <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
                      <Route path="/formularioTema" element={<CadastroTema />} />
                      <Route path="/formularioTema/:id" element={<CadastroTema />} />
                      <Route path="/formularioPostagem/:id" element={<DeletarPostagem />} />
                      <Route path="/deletarTema/:id" element={<DeletarTema />} />
                    </Routes>
                  </div>
                <Footer />
            </Router>
        </Provider>
        );
}

export default App;
