import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <h1>CLDR</h1>
          { this.props.children }
        </div>
      </div>
    );
  }
}
