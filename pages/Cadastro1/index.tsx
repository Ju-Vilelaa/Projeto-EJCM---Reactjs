import { CadastrarButton, CadastroDiv, CadastroLogin, ImagemCadastro, TextoCadastro } from "./style";
import ImgCadastro from "../../assets/ImgCadastro.png";
import HeaderCadastro from "../../components/HeaderCadastro";
import { useNavigate } from "react-router-dom";


const Cadastro1 = () => {
    const navigate = useNavigate();
  return (
    <>
    <HeaderCadastro/>
    <CadastroDiv>
        <ImagemCadastro src = {ImgCadastro}/>
        <TextoCadastro>Faça parte do nosso time.</TextoCadastro>
        <TextoCadastro>Cadastre-se!</TextoCadastro>
        <CadastrarButton onClick={()=>navigate('/cadastro2')}>Cadastrar</CadastrarButton>
            <CadastroLogin>
                <a href="/login">Já possui cadastro? Faça Login!</a>
            </CadastroLogin>
    </CadastroDiv>

    
    </>
   
  );
};



export default Cadastro1;