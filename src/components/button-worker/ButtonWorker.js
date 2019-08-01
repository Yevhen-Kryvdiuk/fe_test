import React from 'react';

function ButtonWorker(props) {
  const {
    name,
    inputValue,
    outputValue,
    action
  } = props;
  return (
    <>
      <label>
        Capital letters of all words:
        <button >{name}</button>
        <input type="text" disabled={true} value={outputValue}/>
      </label>
    </>
  );
}

export default ButtonWorker;
