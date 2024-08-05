import { EntrarButton, EsqueciSenha, HeaderLogin,IconesRedes, InfoLogin, InputLogin, LoginDiv, NaoCadastrado, UnderLine} from "./style";
import LogoGrande from "../../assets/LogoElektroGrande.png";
import { Logo } from "../PaginaInicial/style";
import { FaRegEnvelope } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { ImGoogle3 } from "react-icons/im";


const Login = () => {
    return (
        <>
        <HeaderLogin>
            <h2>Entrar</h2>
        </HeaderLogin>
        <hr style={{width:"100%" , textAlign:"left" , marginLeft:"0"}}/>
        
        <LoginDiv>
            <Logo src={LogoGrande} alt="LogoElektro"/>
            <InfoLogin>
                <label><FaRegEnvelope size={20} /></label>
                <InputLogin type="text" placeholder="Digite seu..."/>
            </InfoLogin>
            <InfoLogin>
                <label><GoLock size={20}/></label>
                <InputLogin type="password" placeholder="***********"/>

            </InfoLogin>

            <EsqueciSenha>
                <a href="/">Esqueci minha senha</a>
            </EsqueciSenha>

            <EntrarButton>Entrar</EntrarButton>

            
        <UnderLine>
            <hr style={{width:"100px", textAlign:"left", margin:"50px"}}/>
            <p>ou</p>
            <hr style={{width:"100px", textAlign:"left", margin:"50px"}}/>
        </UnderLine>
        </LoginDiv>

        <IconesRedes>
            <FaFacebook size={60}/>
            <ImGoogle3 size={60} />
        </IconesRedes>

        <NaoCadastrado>
            <a href="/cadastro2">Não possui cadastro? Cadastre-se!</a>
        </NaoCadastrado>

        </>
    );
};
export default Login;   