import { PaginaInicialDiv, Logo, Elektro, Centro } from "./style";

import LogoGrande from "../../assets/LogoElektroGrande.png";   


const PaginaInicial = () => {
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