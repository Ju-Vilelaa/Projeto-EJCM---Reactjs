import IconeHome from '../../assets/IconeHome.png';
import IconeChat from '../../assets/IconeChat.png';
import IconeAviso from '../../assets/IconeAviso.png';
import IconePerfil from '../../assets/IconePerfil.png';
import { FooterDiv } from './style';
import { FooterTexto } from './style';
const Footer = () => { 
  return (
    <FooterDiv>
      <div>
        <img src={IconeHome}/>
        <FooterTexto>Home</FooterTexto>
      </div>

      <div>
        <img src={IconeChat}/>
        <FooterTexto>Chat</FooterTexto>
      </div>

      <div>
        <img src={IconeAviso}/>
        <FooterTexto>Avisos</FooterTexto>
      </div>

      <div>
        <img src={IconePerfil}/>
        <FooterTexto>Perfil</FooterTexto>
      </div>
    </FooterDiv>
  );
}
export default Footer;