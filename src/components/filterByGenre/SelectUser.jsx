import React from 'react';
import PropTypes from 'prop-types';

function SelectUser(props) {
  const { posterPath, originalTitle } = props;
  return (
    <div className="SelectUser">
      <img alt="filmcover" className="mini" src={posterPath} />
      <h3 className="titre">{originalTitle}</h3>
    </div>
  );
}

SelectUser.propTypes = {
  posterPath: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default SelectUser;
