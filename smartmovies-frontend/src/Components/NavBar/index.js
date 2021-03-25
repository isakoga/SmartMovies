import React from 'react';

import { NavBarContainer, Tab } from './style';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Tab>
        <a href="/filmes">
          Filmes
        </a>
      </Tab>
      <Tab>
        <a href="/series">
          Séries
        </a>
      </Tab>
    </NavBarContainer>
  );
}

export default NavBar;