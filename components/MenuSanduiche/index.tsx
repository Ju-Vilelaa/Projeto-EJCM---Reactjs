import React, { useState } from 'react';
import { StyledMenu, StyledBurger, UsuarioConteiner, Menu, Sair, UsuarioInfo, UsuarioNome, UsuarioImg} from './style';
import { IoMenu } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";




const MenuSanduiche = () => {
  const [open, setOpen] = useState(false);

  

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBurger open={open} onClick={handleToggle}>
        <IoMenu size={30} color="white"/>

      </StyledBurger>
      <StyledMenu open={open}>  

            <UsuarioConteiner>
                <UsuarioInfo>
                    <FaRegUserCircle size={30} color="white"/>
                    <UsuarioNome href="/usuariovisitante">Usuário</UsuarioNome>
                </UsuarioInfo>
                
            </UsuarioConteiner>

            <Menu>
                <a href="/cadastro1">Editar dados</a>
                <hr style={{width:"100%" , textAlign:"left" , marginLeft:"0"}}/>
                <a  href="/cadastro1">Meus pedidos</a>
                <hr style={{width:"100%" , textAlign:"left" , marginLeft:"0"}}/>
                <a  href="/cadastro1">Meus produtos</a>
                <hr style={{width:"100%" , textAlign:"left" , marginLeft:"0"}}/>
                <a href="/cadastro1">Meus pedidos</a>
            </Menu>

    
            <Sair>
                <a href="/" onClick={handleClose}>Sair</a>
            </Sair>
            
        
      </StyledMenu>
      
      
    </>
  );
};

export default MenuSanduiche;