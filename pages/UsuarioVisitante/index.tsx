import { Buttons, ButtonsDiv, ButtonsUser, CadastrarButton, EntrarButton, HeaderDiv, SectionA, UsuarioVisitanteDiv } from "./style";
import Footer from "../../components/Footer";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import LogoPequena from "../../assets/Logo Elektro.png";
import { BsPencilSquare } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { PiTicket } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";



const UsuarioVisitante = () => {
  return (
    <UsuarioVisitanteDiv>
        <HeaderDiv>
            <img src={LogoPequena} alt="Logo Elektro" />
            <IoSettingsOutline size={30} color = "black"/>
        </HeaderDiv>

        <SectionA>
            <FaUserCircle size={150} color="black"/>
            <ButtonsUser>
                <EntrarButton href = "/login">Entrar</EntrarButton>
                <CadastrarButton href = "/cadastro2">Cadastrar</CadastrarButton>
            </ButtonsUser>
        </SectionA>

        <ButtonsDiv>
            <Buttons>
                <BsPencilSquare />
                Meus dados
            </Buttons>
            <Buttons>
                <FiBox />
                Meus produtos
            </Buttons>
            <Buttons>
                <FaRegHeart />
                Meus favoritos
            </Buttons>
            <Buttons>
                <FiShoppingCart />
                Meu carrinho
            </Buttons>
            <Buttons>
                <PiTicket />
                Meus cupons
            </Buttons>
            <Buttons>
                <IoChatbubbleEllipsesOutline />
                Meus chats
            </Buttons>
        </ButtonsDiv>
    

      <Footer/>
    </UsuarioVisitanteDiv>
  );
};

export default UsuarioVisitante;