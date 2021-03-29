import React, { useEffect, useState } from 'react';
import DetailsCard from '../../Components/CardDetails';
import Logo from '../../Components/Logo';
import { getMovieById, getSerieById } from '../../Service/API';
import DetailsGlobalContainer from './style';

const verifyURL = async (setDetails, setValue) => {
  const { pathname } = window.location;
  const splitPath = pathname.split('/');
  if (splitPath[1] === 'filmes') {
    const movie = await getMovieById(splitPath[2]);
    setDetails(movie);
    setValue(splitPath[1]);
  } else {
    const serie = await getSerieById(splitPath[2]);
    setDetails(serie);
    setValue(splitPath[1]);
  }
};

const MovieDetails = () => {
  const [details, setDetails] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    verifyURL(setDetails, setValue);
  }, [details]);

  return (
    <DetailsGlobalContainer>
      <Logo />
      <DetailsCard info={details} value={value} />
    </DetailsGlobalContainer>
  );
};

export default MovieDetails;
