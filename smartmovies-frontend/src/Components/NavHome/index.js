import React from 'react';

import { NavBarContainer, HomeLink } from './style';

const NavBar = () => {
  return (
    <NavBarContainer>
      <a href="/filmes">
        <HomeLink>
          Filmes
        </HomeLink>
      </a>
      <a href="/series">
        <HomeLink>
          Séries
        </HomeLink>
      </a>
    </NavBarContainer>
  );
}

export default NavBar;