import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import PaginaInicial from'./pages/PaginaInicial';
import ErroProduto from './pages/ErroProduto';
import UsuarioVisitante from './pages/UsuarioVisitante';
import Cadastro1 from './pages/Cadastro1';
import Cadastro2 from './pages/Cadastro2';
import ParabensCadastro from './pages/ParabensCadastro';

import Routes from './routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cadastro1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
