import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 20px;
  max-height: 500px;
`

export const DetailsButton = styled.button`
  text-decoration: none;
  
`

export const CardContainer = styled.div`
  border: 2px solid green;
  width: 20%;
  height: 40%;
  display: flex;
  flex-flow: column wrap;

  >button {
    text-decoration: none;
  }
`

export const CardImage = styled.div`
  flex: 1;

  >img {
    width: 100%;
  }
`
