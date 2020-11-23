import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

function ButtonFormField(props) {
  const { startTime, endTime, match } = props;
  const dataUrl = match.url;
  const path = `${dataUrl}/de-${startTime}-a-${endTime}`;
  return (
    <div className="form-group">
      <Link to={path} className="btn" title="passer au filtre suivant">
        Suivant
      </Link>
    </div>
  );
}

ButtonFormField.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      who: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(ButtonFormField);
