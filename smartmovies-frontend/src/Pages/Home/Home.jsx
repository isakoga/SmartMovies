import React from 'react';
import Header from '../../Components/Header';
import Logo from '../../Components/Logo';
import NavBar from '../../Components/NavBar';

import { HomeContainer } from './style';

const HomePage = () => {
  return (
    <HomeContainer>
      <Logo />
      <Header />
      <NavBar />
    </HomeContainer>
  )
}

export default HomePage;