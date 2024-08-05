import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  background: white;
  height: 70vh;

  width:20rem;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

export const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  top: 15px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const UsuarioConteiner= styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #2B2B2B;
`;

export const UsuarioInfo = styled.div`
    display flex;
    align-items: center;
    padding: 20px;
`;

export const UsuarioImg = styled.div` 
    width:50px;
    height: 50px;
`;
export const UsuarioNome = styled.a`
    font-family: "montserrat", sans-serif;
    color: white;

    margin-left: 10px;

    text-decoration: none;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 9px;
    font-family: "montserrat", sans-serif;
    color: #2B2B2B;
    
    a{
      text-decoration: none;
      color: black;
      }
`;

export const Sair = styled.div`
    margin-top: 20vh;
    margin-left: 9px;
    a{
      text-decoration: none;
      color: black;
    }
`;


