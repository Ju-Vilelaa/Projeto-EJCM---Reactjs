import styled from "styled-components";

export const BoxProdutosDisplay = styled.div`
    width: 200px;
    height:250px;
    border-radius: 15px;
    gap: 8px;
    background-color: #F5F5F5;
    padding: 15px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;


export const ProdutosDisplayImg = styled.img`
    width: 150px;
    height: 150px;
`;

export const ProdutosDisplayNome = styled.p`
    color: black;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
`;

export const ProdutosDisplayPreco = styled.p`
    color: black;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
`;

export const ProdutosInfo = styled.div`
    display: column;
    justify-content: start;
    align-items: center;
`;

export const ProdutosLegenda = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const IconeCurtida = styled.img`
    width: 30px;
    height: 30px;
`;

