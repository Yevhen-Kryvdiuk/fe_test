import React, {Component} from 'react';
import TeamsList from "../teams-list/TeamsList";
import './Pages.css';

class Teams extends Component {
  render() {
    return (
      <div className="page">
        <TeamsList/>
      </div>
    );
  }
}

export default Teams;
