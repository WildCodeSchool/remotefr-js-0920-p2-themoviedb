import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import apiKey from '../apiKey';
import GenreList from './GenreList';
import SelectUserList from './SelectUserList';

class FilterByGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listGenre: [],
      arrayResult: [],
    };
  }

  componentDidMount = () => {
    this.fetchGenres();
    this.getMovieList();
  };

  getMovieList = () => {
    const { runtime } = this.props;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&certification=Action&include_adult=false&include_video=false&page=2&with_runtime.lte=${runtime}&with_original_language=fr`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ arrayResult: data.results });
      });
  };

  fetchGenres = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr`,
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ listGenre: data.genres });
      });
  };

  render() {
    const { listGenre, arrayResult } = this.state;

    return (
      <div className="FilterByGenre">
        <GenreList listGenre={listGenre} />

        <SelectUserList arrayResult={arrayResult} />
      </div>
    );
  }
}

FilterByGenre.propTypes = {
  runtime: PropTypes.number.isRequired,
};

export default FilterByGenre;
