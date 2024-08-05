import styled from "styled-components";

export const FooterDiv = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom:0;
    width: 100%;
    height: 70px;
    background-color: #2B2B2B;

    a{
    text-decoration: none;
    }
    
`;

export const FooterIcones = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FooterTexto = styled.p`
    color: white;
    font-size: 0.8rem;
    margin: 0;
`;

