import React from 'react';

function ButtonWorker(props) {
  const {
    isDbClick,
    action
  } = props;
  const result = isDbClick
    ? 'It was double click!'
    : 'I\'m waiting.';
  return (
    <>
      <label>
        <button onClick={action}>Double click</button>
        <input type="text" disabled={true} value={result}/>
      </label>
    </>
  );
}

export default ButtonWorker;
