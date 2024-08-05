import { LinhaProdutos, ParaVoce, ParaVoceTexto } from "./style";

import ProdutosDisplay from "../../../../components/ProdutosDisplay";

import ProdutoUm from "../../../../assets/Produto1ParaVoce.png";
import ProdutoDois from "../../../../assets/Produto2ParaVoce.png"; 


const SectionC = () => {    
    return (
        <ParaVoce>
            <ParaVoceTexto>Para você</ParaVoceTexto>
                <LinhaProdutos >
                    <ProdutosDisplay foto={ProdutoUm} nome={""} preco={800}/>
                    <ProdutosDisplay foto={ProdutoDois} nome={""} preco={20}/>
                </LinhaProdutos>
            
        </ParaVoce>
    );
}
export default SectionC;