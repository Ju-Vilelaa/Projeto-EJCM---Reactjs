import { CategoriasElektro, LinhaCima, LinhaBaixo, CategoriasTexto } from "./style";
import Produtos from "./Produtos";
import ImgAcessorios from "../../../../assets/ImgAcessorios.png";
import ImgCelular from "../../../../assets/ImgCelular.png";
import ImgNotebook from "../../../../assets/ImgNotebook.png";
import ImgPC from "../../../../assets/ImgPC.png";
import ImgPerifericos from "../../../../assets/ImgPerifericos.png";
import ImgSmart from "../../../../assets/ImgSmart.png";
import ImgTV from "../../../../assets/ImgTV.png";
import ImgTablet from "../../../../assets/ImgTablet.png";

const SectionB = () => {
  return (
    <CategoriasElektro>
      <CategoriasTexto>Categorias ELektro</CategoriasTexto>
      <LinhaCima>
        <Produtos foto={ImgCelular} nome = "Celulares"/>
        <Produtos foto={ImgNotebook} nome = "Notebook"/>
        <Produtos foto={ImgTablet} nome="Tablet"/>
        <Produtos foto={ImgPerifericos} nome= "Periféricos"/>
      </LinhaCima>

      <LinhaBaixo>
        <Produtos foto={ImgTV} nome="TVs"/>
        <Produtos foto={ImgAcessorios} nome = "Acessórios"/>
        <Produtos foto={ImgPC} nome="PCs"/>
        <Produtos foto={ImgSmart} nome="Smartwatches"/>
      </LinhaBaixo>
    </CategoriasElektro>
  );
}

export default SectionB;