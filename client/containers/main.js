import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDataRequest } from '../actions';

import Input from './input';
import Locales from './locales';

class Main extends Component {
  constructor(props) {
    super(props);

    this.props.getDataRequest();
  }

  render() {
    return (
      <div className='content'>
        { this.props.isLoading ? 
          <div className='spinner-container'>
            <div className='spinner'></div>
          </div> : '' }
        <Input />
        <Locales />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDataRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);