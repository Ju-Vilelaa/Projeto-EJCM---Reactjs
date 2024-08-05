import styled from 'styled-components';

export const HeaderLogin = styled.div`
    display: flex;
    justify-content: center;

    h2{
    font-family: 'montserrat', sans-serif;
    font-size: 1.5em;
    font-weight: 500;
    }
`;

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InfoLogin = styled.div`
    display:flex;
    align-items: center;
    label{
        position: relative;
        bottom: 10px;
    }
`;

export const InputLogin = styled.input`
    font-family: 'montserrat', sans-serif;
    border: none;
    border-bottom: 1px solid #B9B9B9;

    font-size: 1em;

    width: 300px;
    
    margin-bottom: 20px;
`;

export const EsqueciSenha = styled.div`
    font-family: 'montserrat', sans-serif;
    font-size: 0.8em;
`;

export const EntrarButton = styled.a`
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

export const UnderLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconesRedes = styled.section`
    display: flex;
    justify-content: space-around;
`;

export const NaoCadastrado = styled.div`
    display: flex;
    justify-content: center;
`;