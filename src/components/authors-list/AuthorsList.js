import React from 'react';

function AuthorsList({ authors }) {
  const authors = authors.length > 0
    ? authors.map(item => <li key={item.id}>{item.name}</li>)
    : <li>anonymous</li>;
  return (
    <div>
      <p>Article written by authors:</p>
      <ul>{authors}</ul>
    </div>
  );
}

export default AuthorsList;
