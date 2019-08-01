import React from 'react';

function InputWorker(props) {
  const {
    name,
    inputValue,
    outputValue,
    action
  } = props;
  return (
    <>
      <label>
        {name}
        <input type="text" value={inputValue} onChange={event => action(event.target.value)}/>
        <input type="text" disabled={true} value={outputValue}/>
      </label>
    </>
  );
}

export default InputWorker;
