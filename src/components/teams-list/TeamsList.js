import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTeams } from '../../actions/action-creaters';
import { Link } from 'react-router-dom';

class TeamsList extends Component {
  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    const {
      teams,
      teamsLoading,
      teamsLoaded,
      teamsError,
    } = this.props;

    if ( teamsLoading ) {
      return (
        <div>Loading</div>
      );
    }
    if ( teamsError ) {
      return (
        <div>{ teamsError }</div>
      );
    }
    if ( teamsLoaded ) {
      return (
        <ul>
          {
            teams.map(item => {
              const {id, name} = item;
              return (
                <li key={id}>
                  <h2>{name}</h2>
                  <Link to={`/teams-info/${id}`} >More info</Link>
                </li>
              );
            })
          }
        </ul>
      );
    }
    return (
      <div>Teams</div>
    );
  }
}


const mapStateToProps = state => ({ ...state.teamsState });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchTeams
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
