import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/action-creaters';

class ArticlesList extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const {
      articles,
      articlesLoading,
      articlesLoaded,
      articlesError,
    } = this.props;

    if ( articlesLoading ) {
      return (
        <div>Loading</div>
      );
    }
    if ( articlesError ) {
      return (
        <div>{ articlesError }</div>
      );
    }
    if ( articlesLoaded ) {
      return (
        <ul>
          {
            articles.map(item => {
              const {id, article_text} = item;
              return <li key={id}>{article_text}</li>
            })
          }
        </ul>
      );
    }
    return (
      <div>Articles List</div>
    );
  }
}

const mapStateToProps = state => ({ ...state.articlesState });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchArticles
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
