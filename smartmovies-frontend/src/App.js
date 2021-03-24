import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/filmes" component={ Movies } />
        <Route path="/filmes/:id" />
        <Route path="/series" component={ Series } />
        <Route path="/series/:id" />
      </Switch>
  );
}

export default App;
