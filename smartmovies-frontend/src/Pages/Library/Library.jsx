import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Card';
import Header from '../../Components/Header';
import Logo from '../../Components/Logo';
import { getMovies, getSeries } from '../../Service/API';
import { HomeContainer } from '../Home/style';

const verifyURL = async (setLibrary, setValue) => {
  const { pathname } = window.location;
  if (pathname === '/filmes') {
    const movies = await getMovies();
    setLibrary(movies);
    setValue('movie');
  } else {
    const series = await getSeries();
    setLibrary(series);
    setValue('serie');
  }
}

const Movies = () => {
  const [library, setLibrary] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    verifyURL(setLibrary, setValue);
  }, [library]);

  return (
    <HomeContainer>
      <Logo />
      <Header />
      { !library ? <p>loading</p> : <Cards data={ library } value={ value } /> }
    </HomeContainer>
  );
}

export default Movies;