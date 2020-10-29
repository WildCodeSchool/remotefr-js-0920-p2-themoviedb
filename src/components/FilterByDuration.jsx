import React from 'react';
import PropTypes from 'prop-types';
import InputFormField from './InputFormField';
import ButtonFormField from './ButtonFormField';
import './FilterByDuration.css';

class FilterByDuration extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = {
      startTime: props.startTime,
      endTime: props.endTime,
      runtime: props.runtime,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  calculruntime() {
    const { startTime, endTime } = this.state;
    // calculation of the maximum length of the film
    const xstart =
      Number(startTime.substr(0, 2)) * 60 + Number(startTime.substr(3));
    const xend = Number(endTime.substr(0, 2)) * 60 + Number(endTime.substr(3));
    if (xstart > xend) {
      this.setState({
        runtime: 1440 - xstart + xend,
      });
    }
    this.setState({
      runtime: xend - xstart,
    });
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState(
      {
        [name]: event.target.value,
      },
      this.calculruntime,
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    // const data = JSON.stringify(this.state);
    return this.state;
  }

  render() {
    const { startTime, endTime, runtime } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <InputFormField
          name="startTime"
          value={startTime}
          onChange={this.handleChange}
        >
          De :
        </InputFormField>
        <InputFormField
          name="endTime"
          value={endTime}
          onChange={this.handleChange}
        >
          à :
        </InputFormField>

        <ButtonFormField onClick={this.handleSubmit} />
        {JSON.stringify({ startTime, endTime, runtime })}
      </form>
    );
  }
}

FilterByDuration.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default FilterByDuration;
