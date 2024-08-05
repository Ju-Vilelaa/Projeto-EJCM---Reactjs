import IconeHome from '../../assets/IconeHome.png';
import IconeChat from '../../assets/IconeChat.png';
import IconeAviso from '../../assets/IconeAviso.png';
import IconePerfil from '../../assets/IconePerfil.png';
import { FooterDiv } from './style';
import { FooterTexto } from './style';
const Footer = () => { 
  return (
    <FooterDiv>
      <a href="/home">
        <img src={IconeHome}/>
        <FooterTexto>Home</FooterTexto>
      </a>

      <a href="/cadastro1">
        <img src={IconeChat}/>
        <FooterTexto>Chat</FooterTexto>
      </a>

      <a href="/cadastro1">
        <img src={IconeAviso}/>
        <FooterTexto>Avisos</FooterTexto>
      </a>

      <a href="/cadastro1">
        <img src={IconePerfil}/>
        <FooterTexto>Perfil</FooterTexto>
      </a>
    </FooterDiv>
  );
}
export default Footer;