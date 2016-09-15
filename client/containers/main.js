import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDataRequest } from '../actions';

class Main extends Component {
  componentWillMount() {
    this.props.getDataRequest();
  }

  render() {
    return (
      <div className='container'>
        <h2>Main</h2>
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