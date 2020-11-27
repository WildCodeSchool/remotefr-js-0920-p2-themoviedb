import React from 'react';
import PropTypes from 'prop-types';
import SelectUser from './SelectUser';
import './GenreList.css';
import './SelectUserList.css';

function SelectUserList(props) {
  const { arrayResult, handleLike, Increment, linkToMovieForKids } = props;

  return (
    <div className="SelectUserList">
      <div className="SelectionUser">
        {arrayResult
          .filter((moviecover) => moviecover.poster_path !== null)
          // .filter((movieGenreNull) => movieGenreNull.genre_ids.length !== 0)
          .map((movie) => (
            <SelectUser
              key={movie.id}
              originalTitle={movie.title}
              originalName={movie.name}
              posterPath={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
              movie={movie}
              handleLike={handleLike}
              linkToMovieForKids={linkToMovieForKids}
            />
          ))}
      </div>
      <button type="button" className="btnSuivant" onClick={Increment}>
        Page suivante
      </button>
    </div>
  );
}

SelectUserList.propTypes = {
  arrayResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleLike: PropTypes.func.isRequired,
  Increment: PropTypes.func.isRequired,
  linkToMovieForKids: PropTypes.string,
};

SelectUserList.defaultProps = {
  linkToMovieForKids: undefined,
};

export default SelectUserList;
