import React from 'react';
import { Link } from 'react-router-dom';

function ButtonFormField() {
  return (
    <div className="form-group">
      <Link to="/" className="btn">
        Suivant
      </Link>
    </div>
  );
}

export default ButtonFormField;
