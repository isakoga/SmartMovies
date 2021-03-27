import React, { useEffect, useState } from 'react';
import Toggle from '../Toggle';
import { HeaderLogo, ContainerToggle } from './style';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useTheme } from '../../Hooks/themeContext';

const handleChange = (check, setCheck, toggleTheme) => {
  setCheck(!check);
  toggleTheme();
}

export default function Logo() {
  const [check, setCheck] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const iconStyle = { color: 'white' };

  useEffect(() => {
    if (theme && theme.title === 'light') {
      setCheck(false);
    } else {
      setCheck(true);
    }
  },[theme])

  return (
    <HeaderLogo>
      <a href="/">
        Smart Movies
      </a>
      <ContainerToggle>
        <FiSun style={ iconStyle } />
        <Toggle id="toggle" checked={ check } onChange={ () => handleChange(check, setCheck, toggleTheme) } />
        <FiMoon style={ iconStyle } />
      </ContainerToggle>
    </HeaderLogo>
  );
}
