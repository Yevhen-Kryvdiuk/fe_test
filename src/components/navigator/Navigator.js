import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
  return (
    <div className="navigator">
      <Link to="/" className="navigator-item">Articles</Link>
      <Link to="/teams" className="navigator-item">Teams</Link>
    </div>
  );
}

export default Navigator;
