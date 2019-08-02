import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Navigator from '../navigator';
import { Articles, Teams, TeamsInfo, Tools } from '../pages';


class App extends Component {
  goBack(){
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="app">
        <Navigator/>
        <button onClick={()=>this.goBack()}>Go Back</button>
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
            path="/teams-info/:id"
            component={TeamsInfo}
          />
          <Route
            path="/tools"
            component={Tools}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
