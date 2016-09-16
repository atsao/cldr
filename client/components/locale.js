import React, { Component } from 'react';
import Value from './value';

export default class Locale extends Component {
  constructor(props) {
    super(props);

    this.renderValues = this.renderValues.bind(this);
  }

  renderValues(data) {
    return data.map((locale, i) => {
      return (<Value locale={ locale.name } value={ locale.value } key={ `locale-${i}` }/>);
    });
  }

  render() {
    let propertyName = this.props.property;
    let localeData = this.props.localesForProperty;

    return (
      <div className='locale-block'>
        <div className='locale-property'>
          <p>{ propertyName }</p>
        </div>
        <div className='locale-values'>
          { this.renderValues(localeData) }        
        </div>
      </div>
    );
  }
}
