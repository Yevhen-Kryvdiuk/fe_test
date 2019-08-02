import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigator from '../navigator';
import { Articles, Teams, Tools } from '../pages';
import './App.css';


function App(){
    return (
      <>
        <Navigator/>
        <main className="app">
          <Switch>
            <Route
              path="/"
              component={Articles}
              exact />
            <Route
              path="/teams"
              component={Teams}
            />
            <Route
              path="/tools"
              component={Tools}
            />
          </Switch>
        </main>
      </>
    )
}

export default withRouter(App);
