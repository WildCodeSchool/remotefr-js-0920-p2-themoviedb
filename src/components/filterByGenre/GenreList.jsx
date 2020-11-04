import React from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';
import './GenreList.css';
import './SelectUser.css';

function GenreList(props) {
  const { listGenre } = props;
  return (
    <div className="GenreList">
      <div className="FilterByGenre">
        <p className="pGenre">Genres : </p>
        {listGenre.map((genre) => (
          <button type="button" className="btn" id={genre.name}>
            <SelectGenre key={genre.id} id={genre.id} name={genre.name} />
          </button>
        ))}
      </div>
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
