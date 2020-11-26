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

    return (
      <form className="FilterByDuration" onSubmit={this.handleSubmit}>
        <h2>Je planifie ma soirée</h2>
        <article className="areaOfForm">
          <InputFormField
            id="startTime"
            name="startTime"
            value={startTime}
            onChange={handleChange}
          >
            Début du film à :
          </InputFormField>
          <InputFormField
            id="endTime"
            name="endTime"
            value={endTime}
            onChange={handleChange}
          >
            Fin du film à :
          </InputFormField>
          <ButtonFormField url={url} startTime={startTime} endTime={endTime} />
        </article>
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
