import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-smooth-range-input';

function AgeOfTheYoungest(props) {
  const { value, handleChange } = props;
  return (
    <Slider
      name="ageValue"
      value={value}
      min={2}
      max={18}
      onChange={handleChange}
    />
  );
}

AgeOfTheYoungest.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default AgeOfTheYoungest;
