import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/base/base.css';

import Cabecalho from './components/Cabecalho';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';

import Pagina404 from './paginas/Pagina404';

function App() {

  return (
  <>
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/categoria/:id">
          <Categoria />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App
