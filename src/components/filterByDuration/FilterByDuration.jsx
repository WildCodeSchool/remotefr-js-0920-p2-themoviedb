import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import InputFormField from './InputFormField';
import ButtonFormField from './ButtonFormField';
import './FilterByDuration.css';

class FilterByDuration extends React.Component {
  render() {
    const { startTime, endTime, handleChange, match } = this.props;
    const { url } = match;
    console.log(url);
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Je planifie ma soirée</h2>
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

        <ButtonFormField url={url} />
      </form>
    );
  }
}

FilterByDuration.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any.isRequired,
};

export default withRouter(FilterByDuration);
