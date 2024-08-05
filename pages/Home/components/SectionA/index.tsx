import { BemVindo } from "./style";
import { Titulo } from "./style";
import { Section } from "./style";
import logo from "../../../../assets/Logo Elektro.png";
import Cutscene from "../../../../assets/Cutscene.png";

const SectionA = () => {
  return (
    <Section>
      <BemVindo>
        <img src = {logo}/> 
        <Titulo>Bem-vindo à Elektro!</Titulo>
      </BemVindo>

      <img src = {Cutscene}/>
      
    </Section>
  );
}
export default SectionA;