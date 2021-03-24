import styled from 'styled-components';

export const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;

  /* @media (max-width: 500px) {
    flex-flow: column wrap;
  } */
`;

export const LinkContainer = styled.div`
  align-items: center;
  border: 1px solid red;
  border-radius: 30px;
  display: flex;
  flex-flow: column wrap;
  height: 40%;
  justify-content: space-around;
  margin-top: 30px;
  width: 30%;


  >a {
    text-decoration: none;
    padding: 40px 150px;
  }
`;
