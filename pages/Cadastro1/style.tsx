import styled from 'styled-components';

export const CadastroDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImagemCadastro = styled.img`
    width: 280px;
    height: 280px;
    margin-bottom: 20px;
`;

export const TextoCadastro = styled.div`
    font-family: 'montserrat', sans-serif;
    font-size: 1.2em;
    font-weight: 500;
`;

export const CadastrarButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 20px;
    background-color: #2B2B2B ;
    width: 180px;
    height: 40px;
    border: none;

    font-family: 'montserrat', sans-serif;
    font-size: 1em;
    font-weight: 400;
    color: white;

    margin-top: 40px;

    text-decoration: none;
`;

export const CadastroLogin = styled.div`
    font-family: 'montserrat', sans-serif;
    font-size: 1em;
    margin-top: 100px;
    color: #0271A0;
`;