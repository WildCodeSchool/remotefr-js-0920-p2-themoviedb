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
  const { match } = props;
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

    const filterGenre = `&with_genres=${withMovieGenres
      .toString()
      .replace(/,/g, '|')}`;

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${filterGenre}&with_runtime.lte=${runtime}&with_original_language=fr`,
      )
      .then((response) => response.data)
      .then((data) => {
        setArrayResultMovie(data.results);
        setArrayResult(arrayResultTv.concat(data.results));
      });
  };

  const getIdsMovieGenreAndMovieList = (genreFilmSelect) => {
    const movieIds = genreFilmSelect[0].movie_genres_ids;
    movieIds.map((movieId) =>
      setWithMovieGenres((prevState) => {
        const newGenre = prevState.includes(movieId)
          ? prevState.filter((array) => array !== movieId)
          : [...prevState, movieId];
        return newGenre;
      }),
    );
  };

  useEffect(() => {
    getMovieList();
  }, [withMovieGenres]);

  const getTVList = () => {
    const { runtime } = props;

    const filterGenre = `&with_genres=${withTvGenres
      .toString()
      .replace(/,/g, '|')}`;

    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&page=1&${filterGenre}&&with_runtime.lte=${runtime}&include_null_first_air_dates=false&with_original_language=fr`,
      )
      .then((response) => response.data)
      .then((data) => {
        setArrayResultTv(data.results);
        setArrayResult(arrayResultMovie.concat(data.results));
      });
  };

  const getIdsTVGenreAndMovieList = (genreFilmSelect) => {
    const tvIds = genreFilmSelect[0].tv_genres_ids;
    tvIds.map((tvId) =>
      setwithTvGenres((prevState) => {
        const newGenre = prevState.includes(tvId)
          ? prevState.filter((array) => array !== tvId)
          : [...prevState, tvId];
        return newGenre;
      }),
    );
  };

  useEffect(() => {
    getTVList();
  }, [withTvGenres]);

  const eventListener = (event) => {
    const { id } = event.target;
    const genreOfFilmSelected = genreFilmSelected(id);
    getIdsMovieGenreAndMovieList(genreOfFilmSelected);
    getIdsTVGenreAndMovieList(genreOfFilmSelected);
  };

  const [like, setLike] = useState([]);
  const handleLike = (movId) => {
    setLike((prevState) => {
      const newLike = prevState.like.includes(movId)
        ? prevState.like.filter((m) => m !== movId)
        : [...prevState.like, movId];
      return { like: newLike };
    });
  };

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

      <SelectUserList arrayResult={arrayResult} />

      <MySelectionOfMoviesList movieLiked={like} handleLike={handleLike} />
    </div>
  );
}

// class FilterByGenre extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listGenre: ListGenre,
//       withMovieGenres: [],
//       withTvGenres: [],
//       arrayResultMovie: [],
//       arrayResultTv: [],
//       arrayResult: [],
//       movieLiked: [],
//     };
//   }

// const [like, setLike] = useState([]);
// const handleLike = (movId) => {
//   setLike((prevState) => {
//     const newLike = prevState.like.includes(movId)
//       ? prevState.like.filter((m) => m !== movId)
//       : [...prevState.like, movId];
//     return { like: newLike };
//   });
// };

//   componentDidMount = () => {
//     const { match } = this.props;
//     const genre = match.params.genre
//       .replace(/-/g, ' ')
//       .replace(/Science fiction/g, 'Science-fiction');
//     const genreFilmSelected = MovieGenreDetail.filter(
//       (genreSelect) => genreSelect.name === genre,
//     );
//     const movieIds = genreFilmSelected[0].movie_genres_ids;
//     movieIds.map((movieId) =>
//       this.setState((prevState) => {
//         const newGenre = prevState.withMovieGenres.includes(movieId)
//           ? prevState.withMovieGenres.filter((array) => array !== movieId)
//           : [...prevState.withMovieGenres, movieId];
//         return { withMovieGenres: newGenre };
//       }, this.getMovieList),
//     );

//     const tvIds = genreFilmSelected[0].tv_genres_ids;
//     tvIds.map((tvId) =>
//       this.setState((prevState) => {
//         const newGenre = prevState.withTvGenres.includes(tvId)
//           ? prevState.withTvGenres.filter((array) => array !== tvId)
//           : [...prevState.withTvGenres, tvId];
//         return { withTvGenres: newGenre };
//       }, this.getTVList),
//     );
//   };

//   getMovieList = () => {
//     const { withMovieGenres, arrayResultTv } = this.state;
//     const { runtime } = this.props;

//     const filterGenre = `&with_genres=${withMovieGenres
//       .toString()
//       .replace(/,/g, '|')}`;

//     const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${filterGenre}&with_runtime.lte=${runtime}&with_original_language=fr`;

//     axios
//       .get(url)
//       .then((response) => response.data)
//       .then((data) => {
//         this.setState({
//           arrayResultMovie: data.results,
//           arrayResult: arrayResultTv.concat(data.results),
//         });
//       });
//   };

//   getTVList = () => {
//     const { withTvGenres, arrayResultMovie } = this.state;
//     const { runtime } = this.props;

//     const filterGenre = `&with_genres=${withTvGenres
//       .toString()
//       .replace(/,/g, '|')}`;
//     const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&page=1&${filterGenre}&&with_runtime.lte=${runtime}&include_null_first_air_dates=false&with_original_language=fr`;

//     axios
//       .get(url)
//       .then((response) => response.data)
//       .then((data) => {
//         this.setState({
//           arrayResultTv: data.results,
//           arrayResult: arrayResultMovie.concat(data.results),
//         });
//       });
//   };

//   eventListener = (event) => {
//     const { id } = event.target;
//     const genreFilmSelected = MovieGenreDetail.filter(
//       (genre) => genre.name === id,
//     );
//     const movieIds = genreFilmSelected[0].movie_genres_ids;
//     movieIds.map((movieId) =>
//       this.setState((prevState) => {
//         const newGenre = prevState.withMovieGenres.includes(movieId)
//           ? prevState.withMovieGenres.filter((array) => array !== movieId)
//           : [...prevState.withMovieGenres, movieId];
//         return { withMovieGenres: newGenre };
//       }, this.getMovieList),
//     );

//     const tvIds = genreFilmSelected[0].tv_genres_ids;
//     tvIds.map((tvId) =>
//       this.setState((prevState) => {
//         const newGenre = prevState.withTvGenres.includes(tvId)
//           ? prevState.withTvGenres.filter((array) => array !== tvId)
//           : [...prevState.withTvGenres, tvId];
//         return { withTvGenres: newGenre };
//       }, this.getTVList),
//     );
//   };

//   render() {
//     const { match } = this.props;
//     const { url } = match;
//     const dataUrl = url.split('/');

//     // retrieve the genre selected by the user from the url
//     const emotion = dataUrl[4]
//       .replace(/-/g, ' ')
//       .replace(/Science fiction/g, 'Science-fiction');

//     const genreFilmSelected = MovieGenreDetail.filter(
//       (genre) => genre.name === emotion,
//     );

//     const { listGenre, arrayResult, movieLiked } = this.state;
//     return (
//       <div className="FilterByGenre">
//         <GenreList
//           listGenre={listGenre}
//           eventListener={this.eventListener}
//           genreFilmSelected={genreFilmSelected[0]}
//         />

//         <SelectUserList arrayResult={arrayResult} />

//         <MySelectionOfMoviesList movieLiked={movieLiked} />
//       </div>
//     );
//   }
// }

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
};

export default withRouter(FilterByGenre);
