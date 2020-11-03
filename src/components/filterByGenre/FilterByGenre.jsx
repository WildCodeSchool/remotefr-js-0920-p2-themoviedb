import React from 'react';
import PropTypes from 'prop-types';

function FilterByGenre(props) {
  const { name, id } = props;
  return (
    <div className="FilterByGenre">
      <li>
        {id} : {name}
      </li>
    </div>
  );
}

FilterByGenre.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FilterByGenre;
