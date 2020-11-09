import React from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';
import './GenreList.css';
import './SelectUser.css';

function GenreList(props) {
  const { listGenre, eventListener } = props;
  return (
    <div className="GenreList">
      <div className="FilterByGenre">
        <p className="pGenre">Genres : </p>
        {listGenre.map((genre) => (
          <SelectGenre
            id={genre.id}
            name={genre.name}
            eventListener={eventListener}
            key={genre.id}
          />
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
  eventListener: PropTypes.func.isRequired,
};

export default GenreList;
