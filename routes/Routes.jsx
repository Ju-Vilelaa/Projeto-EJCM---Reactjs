
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';
import Home from '../pages/Home/index';
import UsuarioVisitante from '../pages/UsuarioVisitante';
import Login from '../pages/Login';
import Cadastro2 from '../pages/Cadastro2';
import Cadastro1 from '../pages/Cadastro1';
import ParabensCadastro from '../pages/ParabensCadastro';


export default function  App(){
    return (
            <Router>
                <Routes>
                <Route path="/" element ={<PaginaInicial/>}/>
                <Route path="/home" element= { <Home/> } />
                <Route path="/usuariovisitante" element ={<UsuarioVisitante/>}/>
                <Route path="/login" element ={<Login/>}/>
                <Route path="/cadastro2" element ={<Cadastro2/>}/>
                <Route path="/cadastro1" element ={<Cadastro1/>}/>
                <Route path="/parabenscadastro" element ={<ParabensCadastro/>}/>
                </Routes>
                
            </Router>
    );
};
