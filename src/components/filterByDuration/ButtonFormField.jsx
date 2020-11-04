import React from 'react';
import { Link } from 'react-router-dom';

function ButtonFormField() {
  return (
    <div className="form-group">
      <Link
        to="/jeveuxtrouver/filter-by-genre"
        className="btn"
        title="passer au filtre suivant"
      >
        Suivant
      </Link>
    </div>
  );
}

export default ButtonFormField;
