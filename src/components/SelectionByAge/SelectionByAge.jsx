import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MySelectionOfMoviesList from '../filterByGenre/MySelectionOfMoviesList';
import SelectUserList from '../filterByGenre/SelectUserList';
import './SelectionByAge.css';

function SelectionByAge(props) {
  const { match, handleLike, like } = props;
  const { url } = match;
  const dataUrl = url.split('/');
  // get age select
  const age = parseInt(dataUrl[3].replace(/age-/g, ''), 10);

  const linkToMovieForKids = 'https://www.filmspourenfants.net/';

  // get the list of movies from the API by age
  const [MovieListForAge, setMovieListForAge] = useState([]);
  const getMovieListForAge = () => {
    axios
      .get(`https://movieages.herokuapp.com/movies?ageFrom=${age}`)
      .then((response) => response.data)
      .then((data) => {
        setMovieListForAge(data);
      });
  };

  // get the following 20 results
  const [firstResult, setFirstResulte] = useState(0);
  const [lastResult, setLastResulte] = useState(20);
  const Increment = () => {
    setFirstResulte(firstResult + 20);
    setLastResulte(lastResult + 20);
  };

  // filter to get 20 results
  const [arrayDataFilter, setArrayDataFilter] = useState([]);
  const filterArrayData = () => {
    setArrayDataFilter(MovieListForAge.slice(firstResult, lastResult));
  };

  useEffect(() => {
    getMovieListForAge();
  }, []);

  useEffect(() => {
    filterArrayData();
  }, [firstResult, lastResult, MovieListForAge]);

  return (
    <article className="SelectionKids">
      <h2 className="pGenre">{`Tu as ${age} ans, cette sélection est faite pour toi`}</h2>
      <div className="SelectionByAge">
        <SelectUserList
          arrayResult={arrayDataFilter}
          handleLike={handleLike}
          Increment={Increment}
          linkToMovieForKids={linkToMovieForKids}
        />

        <MySelectionOfMoviesList
          arrayResult={arrayDataFilter}
          movieLiked={like}
        />
      </div>
    </article>
  );
}

SelectionByAge.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      who: PropTypes.string,
      genre: PropTypes.string,
    }),
  }).isRequired,
  handleLike: PropTypes.func.isRequired,
  like: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      first_air_date: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
    }),
  ),
};

SelectionByAge.defaultProps = {
  like: [],
};

export default withRouter(SelectionByAge);
