import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Card';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import { getSeries } from '../../Service/API';
import { HomeContainer } from '../Home/style';

const getSeriesData = async (setSeries, isLoading) => {
  const series = await getSeries();
  setSeries(series);
  isLoading(false);
}

const Series = () => {
  const [loading, isLoading] = useState(true);
  const [series, setSeries] = useState();

  useEffect(() => {
    getSeriesData(setSeries, isLoading);
  }, []);

  return (
    <HomeContainer>
      <Header />
      <NavBar />
      { loading ? null : <Cards series={ series } value="serie" /> }
    </HomeContainer>
  );
}

export default Series;