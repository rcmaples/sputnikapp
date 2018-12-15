import React from 'react';

import LogoSvg from './Logo';
import '../styles/Header.css';

const Header = () => (
  <header>
    <LogoSvg />
    <nav>Logout</nav>
  </header>
);

export default Header;
