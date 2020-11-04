import React from 'react';
import PropTypes from 'prop-types';

function SelectGenre(props) {
  const { name, id } = props;
  return <div className={id}>{name}</div>;
}

SelectGenre.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SelectGenre;
