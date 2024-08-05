import HeaderCadastro from "../../components/HeaderCadastro";
import { ButtonCadastrar, FormDiv, FormInput, FormLabel, SectionA, SectionB, UnderLine } from "./style";
import { FaFacebook } from "react-icons/fa";
import { ImGoogle3 } from "react-icons/im";
const Cadastro2 = () => {
    return (
        <>
        <HeaderCadastro/>
        <SectionA>
            <FaFacebook size={60}/>
            <ImGoogle3 size={60} />
        </SectionA>

        <UnderLine>
            <hr style={{width:"30%", textAlign:"left", margin:"50px"}}/>
            <p>ou</p>
            <hr style={{width:"30%", textAlign:"left", margin:"50px"}}/>
        </UnderLine>

        <SectionB>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput type="text" placeholder="Nome" />
            </FormDiv>
            <FormDiv>
                <FormLabel>CPF</FormLabel>
                <FormInput type="text" placeholder="Digite seu CPF" />
            </FormDiv>
            <FormDiv>
                <FormLabel>Telefone</FormLabel>
                <FormInput type="text" placeholder="Digite seu telefone" />
            </FormDiv>
            <FormDiv>
                <FormLabel>E-mail</FormLabel>
                <FormInput type="text" placeholder="Digite seu email" />
            </FormDiv>
            <FormDiv>
                <FormLabel>Senha</FormLabel>
                <FormInput type="password" placeholder="Digite sua senha" />
            </FormDiv>
            <FormDiv>
                <FormLabel>Confirme sua senha</FormLabel>
                <FormInput type="password" placeholder="confirme sua senha" />
            </FormDiv>

            <ButtonCadastrar href="/parabenscadastro">Cadastrar-se!</ButtonCadastrar>
        </SectionB>
            
        
    
        </>
    );
};

export default Cadastro2;