import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import InputWorker from '../input-worker';
import {textTyping} from "../../actions/action-creaters";

class Tools extends Component {
  render() {
    const {
      text,
      modifiedText,
      textTyping,
    } = this.props;
    return (
      <div>
        <InputWorker
          name={'Capital letters of all words:'}
          inputValue={text}
          outputValue={modifiedText}
          action={textTyping}
        />
        {/*<InputWorker*/}
        {/*  name={'Get the sum'}*/}
        {/*  inputValue={}*/}
        {/*  outputValue={}*/}
        {/*  action={}*/}
        {/*/>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.toolsState });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    textTyping
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tools);

