import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 80px;
    width: 80%;
    justify-content: space-between;
    border: 1px solid ${theme.border};
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0px 5px 25px 0px ${theme.boxShadow};
  `}

  @media (max-width: 1025px) {
    align-items: center;
    flex-flow: column wrap;
    justify-content: center;
    padding: 0;
    margin-top: 30px;
  }
`;

export const DetailsLeftContainer = styled.div`
  width: 25%;

  > img {
    min-width: 200px;
    width: 100%;
    margin: 8px 0;
  }

  @media (max-width: 1025px) {
    width: 60%;
    margin: 15px 0;
  }

  @media (max-width: 750px) {
    width: 70%;
    margin: 15px 0;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: 15px 0;
  }
`;

export const DetailsRightContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: column wrap;

  > div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-family: 'BebasNeue', cursive;
    letter-spacing: 0.5px;
  }

  h4 {
    font-size: 1em;
    margin: 8px 0;
  }

  h6 {
    font-size: 0.8em;
    margin: 8px 0;
  }
`;

export const CastContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  max-height: 240px;
`;

export const CastCard = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  margin: 10px 10px 0 10px;
  max-height: 180px;

  > img {
    width: 100px;
  }

  > p {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const DetailsNavigation = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > a {
      text-decoration: none;
      padding: 20px;
      border: 1px solid ${theme.border};
      border-radius: 16px;
      margin: 10px;
      background-color: ${theme.buttonDetailsBackground};
      color: ${theme.buttonDetailsText};

      &:hover {
        box-shadow: 0px 5px 25px 0px ${theme.homeHover};
        transition: 0.3s ease-in-out;
      }
    }

    @media (max-width: 500px) {
      font-size: 0.75em;
    }
  `}
`;
