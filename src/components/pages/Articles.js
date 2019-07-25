import React, {Component} from 'react';
import ArticlesList from "../articles-list/ArticlesList";
import './Pages.css';

class Articles extends Component {
  render() {
    return (
      <div className="page">
        <ArticlesList/>
      </div>
    );
  }
}
export default Articles;
