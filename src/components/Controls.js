import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
    }
  }

  search(e) {
    this.props.handleSearch(e.target.value);
  }

  handleOnChange(e) {
    this.setState({location: e.target.value});
    this.search(e);
  }

  render() {
    return (
      <div className='controls'>
        <input className='input'
          type='text'
          placeholder='Please enter a school district'
          value={this.state.location}
          onChange={(e) => this.handleOnChange(e)}
        />
      </div>
    )
  }
}

Controls.propTypes = {
  handleSearch: PropTypes.func,
  handleSubmit: PropTypes.func,
}
