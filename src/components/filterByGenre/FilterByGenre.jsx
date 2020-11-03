import React from 'react';
import PropTypes from 'prop-types';

function FilterByGenre(props) {
  const { name } = props;
  return <div className="FilterByGenre">{name}</div>;
}

FilterByGenre.propTypes = {
  name: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};

export default FilterByGenre;
