import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigator from '../navigator';
import { Articles, Teams, TeamsInfo, Tools } from '../pages';
import './App.css';


function App(props){
  const goBack = () => {
    props.history.goBack();
  };

    return (
      <div className="app">
        <Navigator/>
        <button onClick={()=>goBack()}>Go Back</button>
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

export default withRouter(App);
