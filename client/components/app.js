import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>Hello World</h1>
        { this.props.children }
      </div>
    );
  }
}

export default connect(null, null)(App);