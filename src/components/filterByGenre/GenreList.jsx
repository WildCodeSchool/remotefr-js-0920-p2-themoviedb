import React from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';
import './GenreList.css';
import './SelectUser.css';

function GenreList(props) {
  const { listGenre, eventListener, genreFilmSelected } = props;

  return (
    <div className="GenreList">
      <div className="FilterByGenre">
        <p className="pGenre">Genres : </p>
        {listGenre.map((genre) => (
          <SelectGenre
            id={genre}
            name={genre}
            eventListener={eventListener}
            key={genre}
            genreFilmSelected={genreFilmSelected}
          />
        ))}
      </div>
    </div>
  );
}

GenreList.propTypes = {
  listGenre: PropTypes.arrayOf(PropTypes.string).isRequired,
  eventListener: PropTypes.func.isRequired,
  genreFilmSelected: PropTypes.string.isRequired,
};

export default GenreList;
