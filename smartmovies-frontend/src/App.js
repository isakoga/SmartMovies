import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/global';

import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Library from './Pages/Library/Library';

import { useTheme } from './Hooks/themeContext';

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/filmes' component={Library} />
        <Route exact path='/filmes/:id' component={Details} />
        <Route exact path='/series' component={Library} />
        <Route exact path='/series/:id' component={Details} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
