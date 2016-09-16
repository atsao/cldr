import React, { Component } from 'react';

export default class Value extends Component {
  render() {
    let localeName = this.props.locale;
    let propertyValue = this.props.value;

    return (
      <div className='locale-value-block'>
          { localeName }: { propertyValue }
      </div>
    );
  }
}
