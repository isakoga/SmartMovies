import React from 'react';

import { NavBarContainer, Tab } from './style';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Tab
        href="/filmes"
        value="movies"
      >
        Filmes
      </Tab>
      <Tab
        href="/series"
        value="series"
      >
        Séries
      </Tab>
    </NavBarContainer>
  );
}

export default NavBar;