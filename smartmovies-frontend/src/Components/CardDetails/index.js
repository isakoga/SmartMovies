import React from 'react';
import { CastContainer, DetailsContainer, DetailsLeftContainer, DetailsRightContainer } from './style';

const renderCard = (info, type) => {
  const { data } = info;
  if (type === 'filmes') {
    return (
      <DetailsContainer>
        <DetailsLeftContainer>
          <img
            src={ data.poster_path }
            alt={ data.title }
          />
        </DetailsLeftContainer>
        <DetailsRightContainer>
          <h3>{ data.title }</h3>
          <h6>{ data.overview }</h6>
          <CastContainer>

          </CastContainer>
        </DetailsRightContainer>
      </DetailsContainer>
    );
  } else {
    return (
      <DetailsContainer>
        <DetailsLeftContainer>
          <img
            src={ data.poster_path }
            alt={ data.name }
          />
        </DetailsLeftContainer>
        <DetailsRightContainer>
          <h3>{ data.name }</h3>
          <h6>{ data.overview }</h6>
          <CastContainer>

          </CastContainer>
        </DetailsRightContainer>
      </DetailsContainer>
    );
  }
}

export default function DetailsCard({ info, value }) {
  return (
    <div>
      { info && renderCard(info, value) }
    </div>
  )
}