import React from 'react';
import PropTypes from 'prop-types';
import InputFormField from './InputFormField';
import ButtonFormField from './ButtonFormField';

class FilterByDuration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startTime: props.startTime, endTime: props.endTime };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const data = JSON.stringify(this.state);
    this.setState({
      startTime: '00:00',
      endTime: '01:00',
    });
  }

  render() {
    const newLocal1 = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <InputFormField
          name="startTime"
          value={newLocal1.startTime}
          onChange={this.handleChange}
        >
          De :
        </InputFormField>
        <InputFormField
          name="endTime"
          value={newLocal1.endTime}
          onChange={this.handleChange}
        >
          à :
        </InputFormField>
        <ButtonFormField />
        {JSON.stringify(newLocal1)}
      </form>
    );
  }
}

FilterByDuration.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

export default FilterByDuration;
