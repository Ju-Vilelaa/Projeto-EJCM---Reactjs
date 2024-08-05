import { ParabensCadastroDiv, Seta, ParabensCadastroH2, ParabensCadastroImagem, ParabensCadastroP, Texto } from "./style";
import ParabensImg from "../../assets/ParabensImagem.png";
import { FaArrowRight } from "react-icons/fa";


const ParabendCadastro = () => {
    return (
        <ParabensCadastroDiv>
            <ParabensCadastroImagem src={ParabensImg} alt="Parabéns!"/> 
            <Texto>
            <ParabensCadastroH2>Parabéns, você conseguiu!</ParabensCadastroH2>
            <ParabensCadastroP>Bem-vindo ao time de usuarios e colaboradores Elektro</ParabensCadastroP>
            </Texto>
            <Seta>
            <FaArrowRight size={30} color={"#000"} />
            </Seta>
        </ParabensCadastroDiv>
    );
};

export default ParabendCadastro;