import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import apiKey from '../apiKey';
import GenreList from './GenreList';
import SelectUserList from './SelectUserList';
import MovieGenreDetail from '../../Data/MovieGenreDetail';
import ListGenre from '../../Data/ListGenre';

class FilterByGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listGenre: ListGenre,
      withMovieGenres: [],
      withTvGenres: [],
      arrayResultMovie: [],
      arrayResultTv: [],
      arrayResult: [],
    };
  }

  componentDidMount = () => {
    const { match } = this.props;
    const genre = match.params.genre
      .replace(/-/g, ' ')
      .replace(/Science fiction/g, 'Science-fiction');
    const genreFilmSelected = MovieGenreDetail.filter(
      (genreSelect) => genreSelect.name === genre,
    );
    const movieIds = genreFilmSelected[0].movie_genres_ids;
    movieIds.map((movieId) =>
      this.setState((prevState) => {
        const newGenre = prevState.withMovieGenres.includes(movieId)
          ? prevState.withMovieGenres.filter((array) => array !== movieId)
          : [...prevState.withMovieGenres, movieId];
        return { withMovieGenres: newGenre };
      }, this.getMovieList),
    );

    const tvIds = genreFilmSelected[0].tv_genres_ids;
    tvIds.map((tvId) =>
      this.setState((prevState) => {
        const newGenre = prevState.withTvGenres.includes(tvId)
          ? prevState.withTvGenres.filter((array) => array !== tvId)
          : [...prevState.withTvGenres, tvId];
        return { withTvGenres: newGenre };
      }, this.getTVList),
    );
  };

  getMovieList = () => {
    const { withMovieGenres, arrayResultTv } = this.state;
    const { runtime } = this.props;

    const filterGenre = `&with_genres=${withMovieGenres
      .toString()
      .replace(/,/g, '|')}`;

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${filterGenre}&with_runtime.lte=${runtime}&with_original_language=fr`;

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          arrayResultMovie: data.results,
          arrayResult: arrayResultTv.concat(data.results),
        });
      });
  };

  getTVList = () => {
    const { withTvGenres, arrayResultMovie } = this.state;
    const { runtime } = this.props;

    const filterGenre = `&with_genres=${withTvGenres
      .toString()
      .replace(/,/g, '|')}`;
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&page=1&${filterGenre}&&with_runtime.lte=${runtime}&include_null_first_air_dates=false&with_original_language=fr`;

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          arrayResultTv: data.results,
          arrayResult: arrayResultMovie.concat(data.results),
        });
      });
  };

  eventListener = (event) => {
    const { id } = event.target;
    const genreFilmSelected = MovieGenreDetail.filter(
      (genre) => genre.name === id,
    );
    const movieIds = genreFilmSelected[0].movie_genres_ids;
    movieIds.map((movieId) =>
      this.setState((prevState) => {
        const newGenre = prevState.withMovieGenres.includes(movieId)
          ? prevState.withMovieGenres.filter((array) => array !== movieId)
          : [...prevState.withMovieGenres, movieId];
        return { withMovieGenres: newGenre };
      }, this.getMovieList),
    );

    const tvIds = genreFilmSelected[0].tv_genres_ids;
    tvIds.map((tvId) =>
      this.setState((prevState) => {
        const newGenre = prevState.withTvGenres.includes(tvId)
          ? prevState.withTvGenres.filter((array) => array !== tvId)
          : [...prevState.withTvGenres, tvId];
        return { withTvGenres: newGenre };
      }, this.getTVList),
    );
  };

  render() {
    const { match } = this.props;
    const { url } = match;
    const dataUrl = url.split('/');

    // retrieve the genre selected by the user from the url
    const emotion = dataUrl[4]
      .replace(/-/g, ' ')
      .replace(/Science fiction/g, 'Science-fiction');

    const genreFilmSelected = MovieGenreDetail.filter(
      (genre) => genre.name === emotion,
    );

    const { listGenre, arrayResult } = this.state;
    return (
      <div className="FilterByGenre">
        <GenreList
          listGenre={listGenre}
          eventListener={this.eventListener}
          genreFilmSelected={genreFilmSelected[0]}
        />

        <SelectUserList arrayResult={arrayResult} />
      </div>
    );
  }
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
};

export default withRouter(FilterByGenre);
