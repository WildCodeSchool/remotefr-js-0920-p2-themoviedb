import React from 'react';
import PropTypes from 'prop-types';
import FilterByGenre from './FilterByGenre';
import SelectUser from './SelectUser';
import './GenreList.css';

function GenreList(props) {
  const { listGenre } = props;
  return (
    <div>
      <div className="FilterByGenre">
        <p>Genres : </p>
        {listGenre.map((genre) => (
          <button type="button" className="btn" id={genre.name}>
            <FilterByGenre key={genre.id} id={genre.id} name={genre.name} />
          </button>
        ))}
      </div>
      <div>
        <SelectUser
          originalTitle="Ni une ni deux"
          posterPath="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pT7JrBn0NBHYyFZx3hAl2clHjq8.jpg"
        />
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
