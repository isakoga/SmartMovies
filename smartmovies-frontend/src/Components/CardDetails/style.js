import styled from 'styled-components';

export const CoverContainer = styled.div`
  width: 100%;
  height: 50px;

  >img {
    width: 100%;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  margin: 80px;
  width: 80%;
  justify-content: space-between;
`

export const DetailsLeftContainer = styled.div`
  width: 25%;

  >img {
    width: 95%;
    /* margin-top: 24px; */
    height: 100%;
  }
`

export const DetailsRightContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: column wrap;

  >div {
    display: flex;
    justify-content: space-between;
  }

  >h2, h3, h4, h5, h6 {
    margin: 8px 0;
  }
`

export const CastContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  max-height: 240px;
`

export const CastCard = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  margin: 10px;

  >img {
    width: 100px;
  }
`

export const DetailsNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  >a {
    text-decoration: none;
    padding: 20px;
    border: 1px solid red;
    margin: 10px;
  }
`