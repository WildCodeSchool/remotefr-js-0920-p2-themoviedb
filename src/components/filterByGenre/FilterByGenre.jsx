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
      withoutGenres: [],
      arrayResult: [],
    };
  }

  componentDidMount = () => {
    // this.fetchGenres();
    this.getMovieList();
  };

  getMovieList = () => {
    const { withoutGenres } = this.state;
    const { runtime } = this.props;
    let url = '';
    if (withoutGenres === []) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_runtime.lte=${runtime}&with_original_language=fr`;
    } else {
      const filterGenre = `&without_genres=${withoutGenres.toString()}`;
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
    const { id } = event.target;
    this.setState((prevState) => {
      const newGenre = prevState.withoutGenres.includes(id)
        ? prevState.withoutGenres.filter((array) => array !== id)
        : [...prevState.withoutGenres, id];
      return { withoutGenres: newGenre };
    }, this.getMovieList);
  };

  render() {
    const { match } = this.props;
    const { url } = match;
    const dataUrl = url.split('/');
    // const who = dataUrl[2];
    const emotion = dataUrl[3].replace(/-/g, ' ');
    const genreFilmSelected = MovieGenreDetail.filter(
      (genre) => genre.name === emotion,
    );

    const { listGenre, arrayResult } = this.state;

    return (
      <div className="FilterByGenre">
        <GenreList
          listGenre={listGenre}
          eventListener={this.eventListener}
          genreFilmSelected={genreFilmSelected[0].name}
          // url={url}
        />

        <SelectUserList arrayResult={arrayResult} />
      </div>
    );
  }
}

FilterByGenre.propTypes = {
  runtime: PropTypes.number.isRequired,
  match: PropTypes.shape.isRequired,
};

export default withRouter(FilterByGenre);
