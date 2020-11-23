import React from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';
import './GenreList.css';
import './SelectUser.css';

function GenreList(props) {
  const { listGenre, eventListener, genreFilmSelected } = props;

  return (
    <div className="GenreList">
      <h2 className="pGenre">Genres : </h2>
      <div className="FilterByGenre">
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
  genreFilmSelected: PropTypes.shape({
    name: PropTypes.string,
    movie_genres_ids: PropTypes.arrayOf(PropTypes.number),
    tv_genres_ids: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default GenreList;
