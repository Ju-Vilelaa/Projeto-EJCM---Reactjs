
import {Route, Hasholter, Routes as Router, HashRouter} from 'react-router-dom';

import Home from './pages/Home';
import PaginaInicial from'./pages/PaginaInicial';
import ErroProduto from './pages/ErroProduto';
import UsuarioVisitante from './pages/UsuarioVisitante';
import Cadastro1 from './pages/Cadastro1';
import Cadastro2 from './pages/Cadastro2';
import ParabensCadastro from './pages/ParabensCadastro';

const Routes = () => {
    return (
        <HashRouter basename="/">
            <Router>
                <Route Component= { Home } path="/" />
                <Route Component= { Cadastro1 } path="/cadastro1" />
                <Route Component= { Cadastro2 } path="/cadastro2" />
                <Route Component= { ErroProduto} path="/erroproduto" />
                <Route Component= { PaginaInicial } path="/paginainicial" />
                <Route Component= { UsuarioVisitante} path="/usuariovisitante" />
                <Route Component= { ParabensCadastro } path="/parabenscadastro" />
        
            </Router>
        </HashRouter>
    );
};

export default Routes;