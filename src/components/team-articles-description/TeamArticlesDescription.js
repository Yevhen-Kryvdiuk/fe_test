import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchTeams,
  fetchArticles,
  fetchAuthors, } from '../../actions/action-creaters';
import {
  selectTeamArticlesDescription,
  selectLoading,
  selectLoaded,
  selectError, } from '../../selectors/selector';


class TeamArticlesDescription extends Component {
  componentDidMount() {
      this.props.fetchTeams();
      this.props.fetchArticles();
      this.props.fetchAuthors();
  }

  render() {
    const {
      teamId,
      description,
      loading,
      loaded,
      error,
    } = this.props;

    if ( loading ) {
      return (
        <div>Loading</div>
      );
    }
    if ( error ) {
      return (
        <div>{ error }</div>
      );
    }
    if ( loaded ) {
      return (
        <ul>
          {
            description(Number(teamId)).map(item => {
              return <li key={item}>{item}</li>;
            })
          }
        </ul>
      );
    }
    return (
      <div>Team Articles Description</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    description: (id) => selectTeamArticlesDescription(state, id),
    loading: selectLoading(state),
    loaded: selectLoaded(state),
    error: selectError(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchTeams,
    fetchArticles,
    fetchAuthors
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamArticlesDescription);
