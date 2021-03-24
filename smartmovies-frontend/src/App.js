import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/filmes" component={ Movies } />
        <Route path="/filmes/:id" />
        <Route path="/series" />
        <Route path="/series/:id" />
      </Switch>
  );
}

export default App;
