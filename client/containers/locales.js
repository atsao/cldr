import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Locale from '../components/locale';

class Locales extends Component {
  constructor(props) {
    super(props)

    this.renderLocales = this.renderLocales.bind(this);
  }

  renderLocales() {
    const properties = Object.keys(this.props.current);

    return properties.map(property => {
      let propertyName = property;
      let localesForProperty = this.props.current[propertyName];

      return (<Locale property={ propertyName } localesForProperty={ localesForProperty } key={ propertyName }/>);
    });
  }

  render() {
    return (
      <div className='locales-container'>
        <div className='locales-header-row'>
          <div className='container'>
            <div className='locales-header property'>
              <h4>Property</h4>
            </div>
            <div className='locales-header locales'>
              <h4>Locales</h4>
            </div>
          </div>
        </div>
        <div className="locales">
          <div className='container'>
            { Object.keys(this.props.current).length === 0 && this.props.current.constructor === Object ? '' : this.renderLocales() }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Locales);