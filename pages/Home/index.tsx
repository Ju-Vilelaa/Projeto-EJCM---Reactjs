
import Footer from "../../components/Footer";
import Header from "./components/Header";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import SectionD from "./components/SectionD";
import SectionE from "./components/SectionE";
import SectionF from "./components/SectionF";
import { HomeDiv } from "./style";


export default function Home() {
    return (
        <HomeDiv>
            <Header/>
                <SectionA/>
                <SectionB/>
                <SectionC/>
                <SectionD/>
                <SectionE/>
                <SectionF/>
            <Footer/> 
        </HomeDiv>
    );  
};