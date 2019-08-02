import React from 'react';
// import TeamsList from '../teams-list';
import './Pages.css';
import TeamArticlesDescription from "../team-articles-description";
import { findTeam } from "../../actions/action-creaters";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

function Teams(props) {
  const {
    team,
    findTeam
  } = props;
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
// import React, {Component} from 'react';
// import TeamsList from "../teams-list/TeamsList";
// import './Pages.css';
//
// class Teams extends Component {
//   render() {
//     return (
//       <div className="page">
//         <TeamsList/>
//       </div>
//     );
//   }
// }
//
// export default Teams;
