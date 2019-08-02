import React from 'react';
import TeamArticlesDescription from '../team-articles-description';
import './Pages.css';

function TeamsInfo(props) {
  return (
    <div className="page">
      <TeamArticlesDescription teamId = {props.match.params.id}/>
    </div>
  );
}

export default TeamsInfo;
