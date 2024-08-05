import {RedesIcones, RedesTexto, RedesDiv} from './style';
import IconesRedes from '../../../../assets/IconesRedes.png';

const  SectionF = () => {
    return (
        <RedesDiv>
            <RedesTexto>
                Siga-nos nas redes sociais!
            </RedesTexto>
            <RedesIcones src={IconesRedes}/>

        </RedesDiv>
    )
}
export default SectionF;