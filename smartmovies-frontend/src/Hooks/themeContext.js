import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import dark from '../Theme/darkTheme';
import light from '../Theme/lightTheme';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const keyTheme = '@smartmovies:theme';

  const [theme, setTheme] = useState(() => {
    const themeSaved = localStorage.getItem(keyTheme);

    if (themeSaved) {
      return JSON.parse(themeSaved);
    }

    return dark;
  });

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);

      localStorage.setItem(`${keyTheme}`, JSON.stringify(light));
    } else {
      setTheme(dark);

      localStorage.setItem(`${keyTheme}`, JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
