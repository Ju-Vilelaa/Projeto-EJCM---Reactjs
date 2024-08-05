import styled from "styled-components";

export const ErroProdutoDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    
`;

export const Centro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    margin-top: 10%;
`;

export const ImagemErro = styled.img`
    width: 280px;
    height: 280px;
`;

export const TextoErro = styled.h1`
    font-size: 2.5em;
    font-weight: 400;
    font-family: 'Russo One', sans-serif;
    color:#2B2B2B;
    margin-bottom: 0px;
`;

export const ParagrafoErro = styled.p`
    font-family: 'montserrat', sans-serif;
    font-size: 1.1em;
    font-weight: 400;
    color: #2B2B2B;

`;

export const CadastrarButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #2B2B2B ;
    width: 50%;
    height: 50px;
    border: none;

    font-family: 'montserrat', sans-serif;
    font-size: 1.1em;
    font-weight: 400;
    color: white;

    margin-bottom: 20px;
`;

export const FazerLoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0px 5px #DEDEDE;
    width: 50%;
    height: 50px;
    border: none;   

    font-family: 'montserrat', sans-serif;
    font-size: 1.1em;
    font-weight: 400;
    color: #2B2B2B;
`;
