import styled from 'styled-components';

export const SlideContainer = styled.div`
  overflow: hidden;
  max-width: 600px;
  width: 60%;
`

export const Slider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`

export const Slide = styled.div`
  display: inline-block;
  height: 250px;
  width: 100%;
  border-radius: 20px;

  >img {
    width: 100%;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    height: 175px;
  }
`