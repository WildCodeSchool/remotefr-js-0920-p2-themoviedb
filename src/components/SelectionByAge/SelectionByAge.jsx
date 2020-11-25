import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import apiKey from '../apiKey';
import MySelectionOfMoviesList from '../filterByGenre/MySelectionOfMoviesList';
import SelectUserList from '../filterByGenre/SelectUserList';
import './SelectionByAge.css';

function SelectionByAge(props) {
  const { match, handleLike, like } = props;
  const { url } = match;
  const dataUrl = url.split('/');
  // get age select
  const age = parseInt(dataUrl[3].slice(-1), 10);

  // const DBMovie = 'tv';
  // const DBTv = 'movie';

  // get the list of movies from the API by age
  const [MovieListForAge, setMovieListForAge] = useState([]);
  const getMovieListForAge = (ageSelect) => {
    axios
      .get('http://localhost:5000/movies.json')
      .then((response) => response.data)
      .then((data) => {
        // const dataFilter = data.filter((m) => m.ageFrom === ageSelect);
        // console.log(dataFilter);
        setMovieListForAge(data.filter((m) => m.ageFrom === ageSelect));
      });
  };
  // // get id movie in TMDB with name movies from the API by age
  // const [idMovie, setIdMovie] = useState([]);
  // const getIdMovieTMDB = (name, nameDB) => {
  //   const query = name.replace(/ /g, '%20');
  //   const Urlname = `https://api.themoviedb.org/3/search/${nameDB}?api_key=${apiKey}&language=fr-FR&page=1&query=${query}&include_adult=false`;
  //   axios
  //     .get(Urlname)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       setIdMovie([...idMovie, data.results]);
  //     });
  // };

  // get the following 20 results
  const [firstResult, setFirstResulte] = useState(0);
  const [lastResult, setLastResulte] = useState(20);
  const Increment = () => {
    setFirstResulte(firstResult + 20);
    setLastResulte(lastResult + 20);
  };

  // useEffect(() => {
  //   MovieListForAge.map((mov) => getIdMovieTMDB(mov.title, DBMovie));
  //   MovieListForAge.map((mov) => getIdMovieTMDB(mov.title, DBTv));
  // }, [MovieListForAge]);

  // const [arrayData, setArrauData] = useState([]);
  // useEffect(() => {
  //   if (idMovie[0] !== undefined) {
  //     setArrauData(arrayData.concat(idMovie[0]));
  //   }
  // }, [idMovie]);

  // filter to get 20 results
  const [arrayDataFilter, setArrayDataFilter] = useState([]);
  const filterArrayData = () => {
    setArrayDataFilter(MovieListForAge.slice(firstResult, lastResult));
  };

  useEffect(() => {
    getMovieListForAge(age);
  }, []);

  console.log(
    'arrayDataFilter',
    MovieListForAge.slice(firstResult, lastResult),
  );
  useEffect(() => {
    filterArrayData();
  }, [firstResult, lastResult, MovieListForAge]);

  // console.log(arrayData);

  return (
    <article className="Selection">
      <h2 className="pGenre">{`Sélection pour ${age} ans`}</h2>
      <div className="SelectionByAge">
        <SelectUserList
          arrayResult={arrayDataFilter}
          handleLike={handleLike}
          Increment={Increment}
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
