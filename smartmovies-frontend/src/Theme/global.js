import { createGlobalStyle } from 'styled-components';

import BebasNeue from './Fonts/BebasNeue-Regular.ttf';
import NotoSansJPMedium from './Fonts/NotoSansJP-Medium.otf';
import NotoSansJPBold from './Fonts/NotoSansJP-Bold.otf';
import NotoSansJPBlack from './Fonts/NotoSansJP-Black.otf';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  @font-face {
    font-family: 'BebasNeue';
    src: local('BebasNeue'), 
    url(${BebasNeue});
  }
  @font-face {
    font-family: 'NotoSansJPMedium';
    src: local('NotoSansJPMedium'), 
    url(${NotoSansJPMedium});
  }
  @font-face {
    font-family: 'NotoSansJPBold';
    src: local('NotoSansJPBold'), 
    url(${NotoSansJPBold});
  } 
  @font-face {
    font-family: 'NotoSansJPBlack';
    src: local('NotoSansJPBlack'), 
    url(${NotoSansJPBlack});
  } 

  body {
    font-family: 'NotoSansJPMedium', sans-serif;
    background: ${({ theme }) => theme.body };
    color: ${({ theme }) => theme.colors.text };
    transition: all 0.25s linear;
  }
`