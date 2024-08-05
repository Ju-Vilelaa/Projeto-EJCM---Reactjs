import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PaginaInicialDiv, Logo, Elektro, Centro } from "./style";
import LogoGrande from "../../assets/LogoElektroGrande.png";   

const PaginaInicial = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3000); 

        return () => clearTimeout(timer);  // Limpa o timer se o componente for desmontado
    }, [navigate]);

    return(
        <PaginaInicialDiv>
            <Centro>
            <Logo src={LogoGrande} alt="Logo da empresa" />
            <Elektro>ELEKTRO</Elektro>
            </Centro>
            
        </PaginaInicialDiv>
    );
};

export default PaginaInicial;