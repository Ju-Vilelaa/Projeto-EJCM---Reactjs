import { ProdutosDisplayDiv, ProdutosLegenda, ProdutosDisplayImg, ProdutosInfo, ProdutosDisplayNome, ProdutosDisplayPreco } from "./style";

type ProdutosDisplayProps = {   
    foto: string;
    nome: string;
    preco: number;

}

const ProdutosDisplay = ({foto, nome, preco}:ProdutosDisplayProps) => { 
    return (
        <ProdutosDisplayDiv>
            <ProdutosDisplayImg src={foto}/>
                <ProdutosLegenda>
                    <ProdutosInfo>
                        <ProdutosDisplayNome>{nome}</ProdutosDisplayNome>
                        <ProdutosDisplayPreco>R$ {preco}</ProdutosDisplayPreco>
                    </ProdutosInfo>
                </ProdutosLegenda>
                

        </ProdutosDisplayDiv>
    )
    }
    export default ProdutosDisplay;