import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-details';
import NavBar from './components/nav-bar';
import PokemonEdit from './pages/pokemon-edit';
import Page404 from './pages/page-404';
import PokemonAdd from './pages/pokemon-add';

const App: FunctionComponent = () => {
  
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon-list" component={PokemonList} />
          <Route exact path="/pokemon/add" component={PokemonAdd} />
          <Route exact path="/pokemon-list/edit/:id" component={PokemonEdit} />
          <Route path="/pokemon-list/:id" component={PokemonsDetail} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;