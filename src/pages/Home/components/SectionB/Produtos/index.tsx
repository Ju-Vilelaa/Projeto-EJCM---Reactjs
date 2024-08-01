import { ProdutoImagem, ProdutosDiv, ProdutosNome } from "./style";

type ProdutosProps = {
    foto: string;
    nome: string;
}

const Produtos = ({foto, nome }:ProdutosProps) => {
  return (
    <ProdutosDiv>
      <ProdutoImagem src={foto}/>
      <ProdutosNome>{nome}</ProdutosNome>
    </ProdutosDiv>
  );
}

export default Produtos;