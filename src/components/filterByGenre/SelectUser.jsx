import React from 'react';
import PropTypes from 'prop-types';

function SelectUser(props) {
  const { posterPath, originalTitle, originalName } = props;
  const title = originalTitle === '' ? originalName : originalTitle;
  return (
    <div className="SelectUser">
      <img alt="filmcover" className="cover" src={posterPath} />
      <p className="titre">{title}</p>
    </div>
  );
}

SelectUser.propTypes = {
  posterPath: PropTypes.string.isRequired,
  originalTitle: PropTypes.string,
  originalName: PropTypes.string,
};

SelectUser.defaultProps = {
  originalTitle: '',
  originalName: '',
};

export default SelectUser;
