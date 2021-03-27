import React from 'react';

import Img1 from '../../Images/1.jpeg';
import Img2 from '../../Images/2.jpeg';
import Img3 from '../../Images/3.jpeg';
import Img4 from '../../Images/4.jpeg';
import Img5 from '../../Images/5.jpeg';
import Img6 from '../../Images/6.jpeg';
import Img7 from '../../Images/7.jpeg';
import Img8 from '../../Images/8.jpeg';
import Img9 from '../../Images/9.jpeg';
import Img10 from '../../Images/10.jpeg';
import { Slide, SlideContainer, Slider } from './style';

const photos = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SlideContainer>
      <Slider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {photos.map((photo, index) => (
          <Slide key={ index }>
            <img src={ photo } alt="slide" />
          </Slide>
        ))}
      </Slider>
    </SlideContainer>
  );
}
