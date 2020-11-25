import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import apiKey from '../apiKey';
import GenreList from './GenreList';
import SelectUserList from './SelectUserList';
import MovieGenreDetail from '../../Data/MovieGenreDetail';
import ListGenre from '../../Data/ListGenre';
import MySelectionOfMoviesList from './MySelectionOfMoviesList';

function FilterByGenre(props) {
  const { match, handleLike, like } = props;
  const { url } = match;
  const dataUrl = url.split('/');

  const listOfGenre = ListGenre;

  // function that allows filter by genre name to retrieve genre ids from the API
  const genreFilmSelected = (name) => {
    const filterMovieGenre = MovieGenreDetail.filter(
      (genre) => genre.name === name,
    );

    return filterMovieGenre;
  };

  // retrieve the genre selected by the user from the url
  const emotion = dataUrl[4]
    .replace(/-/g, ' ')
    .replace(/Science fiction/g, 'Science-fiction');
  const SelectGenre = genreFilmSelected(emotion);

  // get the search page in the API
  const [page, setPage] = useState(1);
  const Increment = () => {
    setPage(page + 1);
  };

  // get the list of movies and tv from the TMDB API
  const [arrayResult, setArrayResult] = useState([]);

  // get the list of movies from the TMDB API
  const [arrayResultMovie, setArrayResultMovie] = useState([]);

  // get the list of tv movies from the TMDB API
  const [arrayResultTv, setArrayResultTv] = useState([]);

  // update tv genre ids based on user clicks
  const [withTvGenres, setwithTvGenres] = useState([]);

  // update movie genre ids based on user clicks
  const [withMovieGenres, setWithMovieGenres] = useState([]);

  const getMovieList = () => {
    const { runtime } = props;

    if (withMovieGenres.length !== 0 && withMovieGenres !== undefined) {
      const filterGenre = `&with_genres=${withMovieGenres
        .toString()
        .replace(/,/g, '|')}`;

      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&${filterGenre}&with_runtime.lte=${runtime}&with_original_language=fr`,
        )
        .then((response) => response.data)
        .then((data) => {
          setArrayResultMovie(data.results);
          setArrayResult(arrayResultTv.concat(data.results));
        });
    }
  };

  const getIdsMovieGenreAndMovieList = (genreFilmSelect) => {
    const movieIds = genreFilmSelect[0].movie_genres_ids;

    if (movieIds !== []) {
      movieIds.map(
        (movieId) =>
          setWithMovieGenres((prevState) => {
            const newGenre = prevState.includes(movieId)
              ? prevState.filter((array) => array !== movieId)
              : [...prevState, movieId];
            return newGenre;
          }),
        setArrayResultMovie([]),
        setArrayResult(arrayResultTv),
      );
    }
  };

  useEffect(() => {
    getMovieList();
  }, [withMovieGenres, page]);

  const getTVList = () => {
    const { runtime } = props;
    if (withTvGenres.length !== 0 && withTvGenres !== undefined) {
      const filterGenre = `&with_genres=${withTvGenres
        .toString()
        .replace(/,/g, '|')}`;

      axios
        .get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&page=${page}&${filterGenre}&&with_runtime.lte=${runtime}&include_null_first_air_dates=false&with_original_language=fr`,
        )
        .then((response) => response.data)
        .then((data) => {
          setArrayResultTv(data.results);
          setArrayResult(arrayResultMovie.concat(data.results));
        });
    }
  };

  const getIdsTVGenreAndMovieList = (genreFilmSelect) => {
    const tvIds = genreFilmSelect[0].tv_genres_ids;
    if (tvIds !== []) {
      tvIds.map(
        (tvId) =>
          setwithTvGenres((prevState) => {
            const newGenre = prevState.includes(tvId)
              ? prevState.filter((array) => array !== tvId)
              : [...prevState, tvId];
            return newGenre;
          }),
        setArrayResultTv([]),
        setArrayResult(arrayResultMovie),
      );
    }
  };

  useEffect(() => {
    getTVList();
  }, [withTvGenres, page]);

  const eventListener = (event) => {
    const { id } = event.target;
    const genreOfFilmSelected = genreFilmSelected(id);
    getIdsMovieGenreAndMovieList(genreOfFilmSelected);
    getIdsTVGenreAndMovieList(genreOfFilmSelected);
  };

  // const [like, handleLike] = useState([]);
  // const handleLike = (movId) => {
  //   setLike((prevState) => {
  //     const newLike = prevState.includes(movId)
  //       ? prevState.filter((m) => m !== movId)
  //       : [...prevState, movId];
  //     return newLike;
  //   });
  // };

  useEffect(() => {
    getIdsMovieGenreAndMovieList(SelectGenre);
    getIdsTVGenreAndMovieList(SelectGenre);
  }, []);

  return (
    <div className="FilterByGenre">
      <GenreList
        listGenre={listOfGenre}
        eventListener={eventListener}
        genreFilmSelected={SelectGenre[0]}
      />

      <SelectUserList
        arrayResult={arrayResult}
        handleLike={handleLike}
        Increment={Increment}
      />

      <MySelectionOfMoviesList arrayResult={arrayResult} movieLiked={like} />
    </div>
  );
}

FilterByGenre.propTypes = {
  runtime: PropTypes.number.isRequired,
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

FilterByGenre.defaultProps = {
  like: [],
};

export default withRouter(FilterByGenre);
