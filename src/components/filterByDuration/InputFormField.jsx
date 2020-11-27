import React from 'react';
import PropTypes from 'prop-types';
import './FilterByDuration.css';

function InputFormField({ name, value, onChange, children }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <span>{children}</span>
        <input
          type="Time"
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          className="form-control"
        />
      </label>
    </div>
  );
}

InputFormField.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default InputFormField;
