import React from 'react';
import './InputWorker.css';

function InputWorker(props) {
  const {
    name,
    inputValue,
    outputValue,
    action
  } = props;
  const result = Number.isNaN(outputValue)
    ? 'Incorrect input'
    : outputValue;
  return (
    <>
      <label className="worker-item">
        {name}
        <input type="text" value={inputValue} onChange={event => action(event.target.value)}/>
        <input type="text" disabled={true} value={result}/>
      </label>
    </>
  );
}

export default InputWorker;
