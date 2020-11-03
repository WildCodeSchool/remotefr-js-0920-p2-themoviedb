import React from 'react';
import PropTypes from 'prop-types';
import FilterByGenre from './FilterByGenre';
import './GenreList.css';

function GenreList(props) {
  const { listGenre } = props;
  return (
    <div className="FilterByGenre">
      <p>Genres : </p>
      {listGenre.map((genre) => (
        <button type="button" className="btn" id={genre.name}>
          <FilterByGenre key={genre.id} id={genre.id} name={genre.name} />
        </button>
      ))}
      {/* Afficher la sélection de l'utilisateur */}
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
