import styled from 'styled-components';

export const SlideContainer = styled.div`
  margin: 20px;
  overflow: hidden;
  max-width: 500px;
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
`