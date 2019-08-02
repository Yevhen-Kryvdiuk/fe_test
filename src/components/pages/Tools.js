import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputWorker from '../input-worker';
import ButtonWorker from '../button-worker';
import {
  textTyping,
  numbersTyping,
  buttonClick } from '../../actions/action-creaters';

function Tools(props) {
  const {
    text,
    modifiedText,
    numbers,
    sum,
    isDbClick,
    textTyping,
    numbersTyping,
    buttonClick,
  } = props;
  return (
    <div>
      <InputWorker
        name={'Capital letters of all words:'}
        inputValue={text}
        outputValue={modifiedText}
        action={textTyping}
      />
      <InputWorker
        name={'Get the sum'}
        inputValue={numbers}
        outputValue={sum}
        action={numbersTyping}
      />
      <ButtonWorker
        isDbClick={isDbClick}
        action={buttonClick}/>
    </div>
  );
}

const mapStateToProps = state => ({ ...state.toolsState });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    textTyping,
    numbersTyping,
    buttonClick
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
