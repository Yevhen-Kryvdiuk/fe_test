import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navigator.css';

function Navigator(props) {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <header className="navigator">
      <nav>
        <button type="button" className="navigator-item" onClick={()=>goBack()}>Go Back</button>
        <Link to="/" className="navigator-item">Articles</Link>
        <Link to="/teams" className="navigator-item">Teams</Link>
        <Link to="/tools" className="navigator-item">Tools</Link>
      </nav>
    </header>
  );
}

export default withRouter(Navigator);
