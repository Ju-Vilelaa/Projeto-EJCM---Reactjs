import { LinhaProdutos, MaisVendidos, MaisVendidosTexto } from "./style";

import ProdutosDisplay from "../../../../components/ProdutosDisplay";

import ProdutoUm from "../../../../assets/MaisVendido1.png";
import ProdutoDois from "../../../../assets/MaisVendido2.png"; ; 


const SectionE = () => {    
    return (
        <MaisVendidos>
            <MaisVendidosTexto>Mais Vendidos</MaisVendidosTexto>
                <LinhaProdutos >
                    <ProdutosDisplay foto={ProdutoUm} nome={"Smarphone"} preco={3200}/>
                    <ProdutosDisplay foto={ProdutoDois} nome={"Smartwatch"} preco={900}/>
                </LinhaProdutos>
            
        </MaisVendidos>
    );
}
export default SectionE;