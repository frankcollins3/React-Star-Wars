import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';

import Spinner from './components/UI/spinner';
import './style'
import './App.css';

class App extends Component {
  state = {
    starships: []
  }
  
  async componentDidMount() {
    if (!this.state.starships || !this.state.starships.
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact render={() => <Starship starships={starship}/> } />
          <Route path='/starship' exact component={StarshipResults} />
          <Route path='/starship' render={({location}) => 
              <Starship location={location}/>
            }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
