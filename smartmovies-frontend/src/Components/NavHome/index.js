import React from 'react';

import { NavBarContainer, HomeLink } from './style';

const NavBar = () => (
  <NavBarContainer>
    <HomeLink>
      <a href='/filmes'>Filmes</a>
    </HomeLink>
    <HomeLink>
      <a href='/series'>Séries</a>
    </HomeLink>
  </NavBarContainer>
);

export default NavBar;
