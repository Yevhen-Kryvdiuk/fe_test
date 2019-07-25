import React, {Component} from 'react';
import TeamArticlesDescription from "../team-articles-description";
import './Pages.css';

class TeamsInfo extends Component {
  render() {
    return (
      <div className="page">
        <TeamArticlesDescription teamId = {this.props.match.params.id}/>
      </div>
    );
  }
}

export default TeamsInfo;
