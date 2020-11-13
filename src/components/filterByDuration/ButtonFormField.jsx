import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonFormField(props) {
  const { url } = props;
  const dataUrl = url.split('/');
  const path = `/jeveuxtrouver/${dataUrl[2]}/select-emotions`;
  return (
    <div className="form-group">
      <Link to={path} className="btn" title="passer au filtre suivant">
        Suivant
      </Link>
    </div>
  );
}

ButtonFormField.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ButtonFormField;
