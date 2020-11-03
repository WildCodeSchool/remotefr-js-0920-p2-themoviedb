import React from 'react';
import PropTypes from 'prop-types';
import FilterByGenre from './FilterByGenre';

function GenreList(props) {
  const { listGenre } = props;
  return (
    <div className="FilterByGenre">
      <h3>Genres : </h3>
      <ul>
        {listGenre.map((genre) => (
          <FilterByGenre key={genre.id} id={genre.id} name={genre.name} />
        ))}
      </ul>
    </div>
  );
}

GenreList.propTypes = {
  listGenre: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default GenreList;
