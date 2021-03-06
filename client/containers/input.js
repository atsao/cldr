import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuery, removeQuery, processDataRequest } from '../actions';

class Input extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    if (e.target.checked) {
      this.props.addQuery(e.target.value);
    } else {
      this.props.removeQuery(e.target.value);
    }
    this.props.processDataRequest();
  }

  render() {
    return (
      <div className='input-container'>
        <h4>Input</h4>
        <form className='input-form'>
          <div className='input-btn'>
            <input
              onChange={ this.onInputChange }
              disabled={ this.props.isLoading }
              type='checkbox'
              id="quotationStart"
              name="quotationStart"
              value="quotationStart" />
            <label htmlFor="quotationStart">quotationStart</label>
          </div>
          <div className='input-btn'>
            <input
              onChange={ this.onInputChange }
              disabled={ this.props.isLoading }
              type='checkbox'
              id="quotationEnd"
              name="quotationEnd"
              value="quotationEnd" />
            <label htmlFor="quotationEnd">quotationEnd</label>
          </div>
          <div className='input-btn'>
            <input
              onChange={ this.onInputChange }
              disabled={ this.props.isLoading }
              type='checkbox'
              id="alternateQuotationEnd"
              name="alternateQuotationEnd"
              value="alternateQuotationEnd" />
            <label htmlFor="alternateQuotationEnd">alternateQuotationEnd</label>
          </div>
          <div className='input-btn'>
            <input
              onChange={ this.onInputChange }
              disabled={ this.props.isLoading }
              type='checkbox'
              id="alternateQuotationStart"
              name="alternateQuotationStart"
              value="alternateQuotationStart" />
            <label htmlFor="alternateQuotationStart">alternateQuotationStart</label>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addQuery, removeQuery, processDataRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);