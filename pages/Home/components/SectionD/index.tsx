import { ProdutosDestaque, ProdutosDestaqueTexto, LinhaProdutos } from './style';

import ProdutosDisplay from '../../../../components/ProdutosDisplay';

import ProdutoUm from '../../../../assets/ProdutoDestaque1.png';
import ProdutoDois from '../../../../assets/ProdutoDestaque2.png';

const SectionD = () => {
  return (
    <ProdutosDestaque>
      <ProdutosDestaqueTexto>Produtos em destaque</ProdutosDestaqueTexto>
        <LinhaProdutos >
            <ProdutosDisplay foto={ProdutoUm} nome={"Smart Tv"} preco={1400.00}/>
            <ProdutosDisplay foto={ProdutoDois} nome={"Monitor"} preco={750.00}/>
        </LinhaProdutos>
    </ProdutosDestaque>
  );
}

export default SectionD;