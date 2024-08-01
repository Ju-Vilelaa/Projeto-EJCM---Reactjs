import { Carrinho, MenuHamburguer, Pesquisa } from "./style";
import { HeaderDiv } from "./style";

export default function HeaderHome() {

    return(
       <HeaderDiv>
            <MenuHamburguer/>
            <Pesquisa/>
            <Carrinho/>

       </HeaderDiv> 

    );
}