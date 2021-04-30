import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navegation">
      <NavLink to={'/'}>Produtos</NavLink>
      <NavLink to={'/contato'}>Contato</NavLink>
    </nav>
  );
};

export default Header;
