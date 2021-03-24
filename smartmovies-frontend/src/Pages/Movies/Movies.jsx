import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Card';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import { getMovies } from '../../Service/API';
import { HomeContainer } from '../Home/style';

const getMoviesData = async (setMovies, isLoading) => {
  const movies = await getMovies();
  setMovies(movies);
  isLoading(false);
}

const Movies = () => {
  const [loading, isLoading] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {
    getMoviesData(setMovies, isLoading);
  }, []);

  return (
    <HomeContainer>
      <Header />
      <NavBar />
      { loading ? null : <Cards movies={ movies } value="movie" /> }
    </HomeContainer>
  );
}

export default Movies;