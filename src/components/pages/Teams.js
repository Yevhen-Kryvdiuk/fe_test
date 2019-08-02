import React from 'react';
import TeamArticlesDescription from '../team-articles-description';
import { findTeam } from '../../actions/action-creaters';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Pages.css';

function Teams(props) {
  const { team, findTeam } = props;
  if (team) {
    return (
      <div className="page">
        <input type="text" onChange={event => findTeam(event.target.value)}/>
        <TeamArticlesDescription teamId = {team}/>
      </div>
    );
  }
  return (
    <div className="page">
      <input type="text" onChange={event => findTeam(event.target.value)}/>
    </div>
  )

}

const mapStateToProps = state => ({ ...state.teamsState });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    findTeam
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
