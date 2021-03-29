import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Toggle from '../Toggle';
import { HeaderLogo, ContainerToggle } from './style';

import { useTheme } from '../../Hooks/themeContext';

const handleChange = (check, setCheck, toggleTheme) => {
  setCheck(!check);
  toggleTheme();
};

const renderLink = () => {
  const { pathname } = window.location;
  if (pathname === '/filmes') {
    return (
      <a href='/series' style={{marginLeft: 0}}>
        Séries
      </a>
    )
  } else {
    return (
      <a href='/filmes' style={{marginLeft: 0}}>
        Filmes
      </a>
    )
  };
}

export default function Logo() {
  const [check, setCheck] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const iconStyle = { color: 'white' };
  const { pathname } = window.location;

  useEffect(() => {
    if (theme && theme.title === 'light') {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [theme]);

  return (
    <HeaderLogo>
      <a href='/'>Smart Movies</a>
      {pathname === '/filmes' || pathname === '/series' ? renderLink() : null}
      <ContainerToggle>
        <FiSun style={iconStyle} />
        <Toggle
          id='toggle'
          checked={check}
          onChange={() => handleChange(check, setCheck, toggleTheme)}
        />
        <FiMoon style={iconStyle} />
      </ContainerToggle>
    </HeaderLogo>
  );
}
