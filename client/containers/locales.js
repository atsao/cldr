import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Locales extends Component {
  constructor(props) {
    super(props)

    this.state = {};

    this.processData = this.processData.bind(this);
  }

  processData() {
    if (!this.props.query.length || !this.props.data.length) return;
    let queries = this.props.query.reduce((initial, current, i) => {
      initial[current] = [];
      return initial;
    }, {});

    this.props.data.forEach((item, i) => {
      let current = item.main;
      let localeName = '';

      for (let k in current) {
        localeName = k;
        for (let p in current[k].delimiters) {
          let value = {};
          if (queries[p]) {
            value[p] = current[k].delimiters[p];
            value.name = localeName;
            queries[p].push(value);
          }
        }
      }
    });

    this.setState(queries);
  }

  renderLocales() {
    
  }

  render() {
    return (
      <div className='locales-container'>
        <button onClick={ this.processData }>Load Data</button>
        <div className='locales-header-row'>
          <div className='locales-header property'>
            <h4>Property</h4>
          </div>
          <div className='locales-header locales'>
            <h4>Locales</h4>
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