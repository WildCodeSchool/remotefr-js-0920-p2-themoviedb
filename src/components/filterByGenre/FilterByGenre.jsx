import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import apiKey from '../apiKey';
import GenreList from './GenreList';
import SelectUserList from './SelectUserList';
import MovieGenreDetail from '../../Data/MovieGenreDetail';

// const dataGenres = Data;
const ListGenre = [
  "Comédies, films d'animation",
  'dessins animés',
  'Horreur',
  'Amour',
  'Policier, suspense',
  'Fantastique, Science-fiction, Action',
  'Guerre, histoire',
  'Western',
];

class FilterByGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listGenre: ListGenre,
      withoutMovieGenres: [],
      withoutTvGenres: [],
      arrayResult: [],
    };
  }

  componentDidMount = () => {
    // this.fetchGenres();
    this.getMovieList();
  };

  getMovieList = () => {
    const { withoutMovieGenres } = this.state;
    const { runtime } = this.props;
    let url = '';
    if (withoutMovieGenres === []) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_runtime.lte=${runtime}&with_original_language=fr`;
    } else {
      const filterGenre = `&without_genres=${withoutMovieGenres.toString()}`;
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${filterGenre}&with_runtime.lte=${runtime}&with_original_language=fr`;
    }

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ arrayResult: data.results });
      });
  };

  // fetchGenres = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr`,
  //     )
  //     .then((response) => response.data)
  //     .then((data) => {
  //       this.setState({ listGenre: data.genres });
  //     });
  // };

  eventListener = (event) => {
    // event.target.id = "Comédies, films d'animation"
    const { id } = event.target;
    const genreFilmSelected = MovieGenreDetail.filter(
      (genre) => genre.name === id,
    );
    const movieIds = genreFilmSelected[0].movie_genres_ids;
    movieIds.map((movieId) =>
      this.setState((prevState) => {
        const newGenre = prevState.withoutMovieGenres.includes(movieId)
          ? prevState.withoutMovieGenres.filter((array) => array !== movieId)
          : [...prevState.withoutMovieGenres, movieId];
        return { withoutMovieGenres: newGenre };
      }, this.getMovieList),
    );

    const tvIds = genreFilmSelected[0].tv_genres_ids;
    tvIds.map((tvId) =>
      this.setState((prevState) => {
        const newGenre = prevState.withoutTvGenres.includes(tvId)
          ? prevState.withoutTvGenres.filter((array) => array !== tvId)
          : [...prevState.withoutTvGenres, tvId];
        return { withoutTvGenres: newGenre };
      }, this.getTVList),
    );
  };

  render() {
    const { match } = this.props;
    const { url } = match;
    const dataUrl = url.split('/');

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
          // url={url}
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
    }),
  }).isRequired,
};

export default withRouter(FilterByGenre);
