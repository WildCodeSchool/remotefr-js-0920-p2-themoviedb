import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Nouveautes from './Nouveautes';
import styles from './NouveautesList.module.css';
import apiKey from './apiKey';

class NouveautesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNewMovies: [],
    };
  }

  componentDidMount() {
    this.fetchNouveautes();
  }

  fetchNouveautes = () => {
    const currentYear = new Date().getFullYear();
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${currentYear}&with_genres=9648`;
    axios
      .get(url)
      .then((response) => response.data.results)
      .then((nouveautesArray) => {
        this.setState({
          listNewMovies: nouveautesArray,
        });
      });
  };

  render() {
    const { listNewMovies } = this.state;
    return (
      <article className={styles.NouveautesList}>
        <h2>L’actualité des films&nbsp;!</h2>
        <div className={styles.areaOfNouveautes}>
          {listNewMovies.map((newMovie) => (
            <Nouveautes
              title={newMovie.title}
              posterPath={newMovie.poster_path}
              key={newMovie.poster_path}
            />
          ))}
          <div className={styles.divButtons}>
            <p>Je veux voir les nouveautés en&nbsp;:</p>
            <button type="button" value="28">
              Action
            </button>
            <button type="button" value="12">
              Aventure
            </button>
            <button type="button" value="16">
              Animation
            </button>
            <button type="button" value="35">
              Comédie
            </button>
            <button type="button" value="80">
              Crime
            </button>
            <button type="button" value="99">
              Documentaire
            </button>
            <button type="button" value="18">
              Drame
            </button>
            <button type="button" value="10751">
              Familial
            </button>
            <button type="button" value="14">
              Fantastique
            </button>
            <button type="button" value="36">
              Histoire
            </button>
            <button type="button" value="27">
              Horreur
            </button>
            <button type="button" value="10402">
              Musique
            </button>
            <button type="button" value="9648">
              Mystère
            </button>
            <button type="button" value="10749">
              Romance
            </button>
            <button type="button" value="878">
              S.F.
            </button>
            <button type="button" value="10770">
              Téléfilm
            </button>
            <button type="button" value="53">
              Thriller
            </button>
            <button type="button" value="10752">
              Guerre
            </button>
            <button type="button" value="37">
              Western
            </button>
          </div>
        </div>
      </article>
    );
  }
}

NouveautesList.propTypes = {
  listNewMovies: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, posterPath: PropTypes.string })
      .isRequired,
  ),
};

NouveautesList.defaultProps = {
  listNewMovies: [],
};
//   title: '',
//   posterPath: 'https://via.placeholder.com/190x285.png',
// };

export default NouveautesList;
