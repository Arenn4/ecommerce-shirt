import React, { Component } from 'react';
import Main from './components/Main';
import Client from './components/Client'
import { Switch, Route } from 'react-router-dom'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/admin' component={ Main }/>
          <Route exact path='/contact' component={ Contact }/>
          <Route path='/client' component={ Client }/>
        </Switch>
      </div>
    );
  }
}

export default App;
