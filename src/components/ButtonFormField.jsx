import React from 'react';
import PropTypes from 'prop-types';

function ButtonFormField({ onClick }) {
  return (
    <div className="form-group">
      <button className="btn" type="button" onClick={onClick}>
        Suivant
      </button>
    </div>
  );
}

ButtonFormField.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonFormField;
