import React from 'react';
import Header from '../../Components/Header';
import Logo from '../../Components/Logo';
import Slideshow from '../../Components/Slideshow';
import NavBar from '../../Components/NavHome';

import HomeContainer from './style';

const HomePage = () => (
  <HomeContainer>
    <Logo />
    <Header />
    <Slideshow />
    <NavBar />
  </HomeContainer>
);

export default HomePage;
