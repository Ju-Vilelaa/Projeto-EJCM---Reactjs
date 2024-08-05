import MenuSanduiche from "../../../../components/MenuSanduiche";
import { Carrinho, Pesquisa } from "./style";
import { HeaderDiv } from "./style";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


export default function HeaderHome() {

    return(
       <HeaderDiv>
            <MenuSanduiche/>
            <Pesquisa>
                <CiSearch size = {30} color = "black"/>
                <p>Encontrar na Elektro</p>
            </Pesquisa>
            <Carrinho>
            <FiShoppingCart size = {30} color = "white" />
            </Carrinho>

       </HeaderDiv> 

    );
}