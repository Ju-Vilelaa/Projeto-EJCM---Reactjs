import {ErroProdutoDiv, Centro, ImagemErro, TextoErro, ParagrafoErro, CadastrarButton, FazerLoginButton} from "./style";
import Footer from "../../components/Footer";
import ImgErro from "../../assets/ImgErro.png";
const ErroProduto = () => {
  return (
    <ErroProdutoDiv>
      <Centro>
        <TextoErro>Opsss...</TextoErro>
        <ImagemErro src = {ImgErro} />
        <ParagrafoErro>Infelizmente, 
        parece que não encontramos o 
        produto desejado</ParagrafoErro>
        <CadastrarButton>
            Cadastrar
        </CadastrarButton>
        <FazerLoginButton>
            Fazer Login
        </FazerLoginButton>
      </Centro>
      
      <Footer/>
    </ErroProdutoDiv>
    
  );
};

export default ErroProduto;