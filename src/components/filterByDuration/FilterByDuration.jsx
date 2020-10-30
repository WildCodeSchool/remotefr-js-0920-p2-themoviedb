import React from 'react';
import PropTypes from 'prop-types';
import InputFormField from './InputFormField';
import ButtonFormField from './ButtonFormField';
import './FilterByDuration.css';

class FilterByDuration extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // const data = JSON.stringify(this.state);
    return this.state;
  };

  render() {
    const { startTime, endTime, handleChange } = this.props;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <InputFormField
          name="startTime"
          value={startTime}
          onChange={handleChange}
        >
          De :
        </InputFormField>
        <InputFormField name="endTime" value={endTime} onChange={handleChange}>
          à :
        </InputFormField>

        <ButtonFormField onClick={this.handleSubmit} />
      </form>
    );
  }
}

FilterByDuration.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterByDuration;
