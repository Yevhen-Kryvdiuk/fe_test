import React from 'react';
import TeamArticlesDescription from '../team-articles-description';
import { findTeam } from '../../actions/action-creaters';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Pages.css';

function Teams(props) {
  const { team, findTeam } = props;
  const Input = <label className="worker-item">
    Indicate command number:
    <input
      type="text"
      onChange={event => findTeam(event.target.value)}/>
  </label>;
  if (team) {
    return (
      <div className="page tools">
        {Input}
        <TeamArticlesDescription teamId = {team}/>
      </div>
    );
  }
  return (
    <div className="page tools">
      {Input}
    </div>
  )

}

const mapStateToProps = state => ({ ...state.teamsState });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    findTeam
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
