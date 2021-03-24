import React from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';

import { HomeContainer } from './style';

const HomePage = () => {
  return (
    <HomeContainer>
      <Header />
      <NavBar />
    </HomeContainer>
  )
}

export default HomePage;