import React, { useEffect, useState } from 'react';
import DetailsCard from '../../Components/CardDetails';
import Logo from '../../Components/Logo';
import { getMovieById, getSerieById } from '../../Service/API';
import { DetailsGlobalContainer } from './style';

const verifyURL = async (setDetails, setValue) => {
  const { pathname } = window.location;
  const [first, path, id] = pathname.split('/');
  if (path === 'filmes') {
    const movie = await getMovieById(id);
    setDetails(movie);
    setValue(path);
  } else {
    const serie = await getSerieById(id);
    setDetails(serie);
    setValue(path);
  }
}

const MovieDetails = () => {
  const [details, setDetails] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    verifyURL(setDetails, setValue);
  },[details]);

  return (
    <DetailsGlobalContainer>
      <Logo />
      <DetailsCard info={ details } value={ value } />
    </DetailsGlobalContainer>
  );
}

export default MovieDetails;