import { ProdutosLegenda, ProdutosDisplayImg, ProdutosInfo, ProdutosDisplayNome, ProdutosDisplayPreco, BoxProdutosDisplay, IconeCurtida } from "./style";

import Curtida from "../../assets/IconeCurtida.png";

type ProdutosDisplayProps = {   
    foto: string;
    nome: string;
    preco: number;

}

const ProdutosDisplay = ({foto, nome, preco}:ProdutosDisplayProps) => { 
    return (
        <BoxProdutosDisplay>
            
                <ProdutosDisplayImg src={foto}/>
                    <ProdutosLegenda>
                        <ProdutosInfo>
                            <ProdutosDisplayNome>{nome}</ProdutosDisplayNome>
                            <ProdutosDisplayPreco>R$ {preco}</ProdutosDisplayPreco>
                        </ProdutosInfo>
                            <IconeCurtida src={Curtida} alt="Curtida"/>
                    </ProdutosLegenda>
            
        </BoxProdutosDisplay>
    )
    }
    export default ProdutosDisplay;