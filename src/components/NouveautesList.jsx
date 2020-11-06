import React from 'react';
import axios from 'axios';
import Nouveautes from './Nouveautes';
import styles from './NouveautesList.module.css';
import apiKey from './apiKey';

class NouveautesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNewMovies: [],
      chosenValue: '',
    };
    this.chosenGenre = this.chosenGenre.bind(this);
  }

  componentDidMount() {
    this.fetchNouveautes();
  }

  fetchNouveautes = () => {
    const todayYear00 = new Date().getFullYear();
    const todayMonth = new Date().getMonth() + 1;
    const todayMonth00 = todayMonth.toString().padStart(2, '0');
    const todayDate = new Date().getDate();
    const todayDate00 = todayDate.toString().padStart(2, '0');
    let pastMonth00;
    let pastYear00;

    if (todayMonth >= 6) {
      pastMonth00 = (todayMonth00 - 6).toString().padStart(2, '0');
      pastYear00 = todayYear00;
    } else {
      pastMonth00 = parseInt(todayMonth, 16) + 6;
      pastYear00 = todayYear00 - 1;
    }

    const todayFullDate = `${todayYear00}-${todayMonth00}-${todayDate00}`;
    const pastFullDate = `${pastYear00}-${pastMonth00}-${todayDate00}`;

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${pastFullDate}&release_date.lte=${todayFullDate}`;
    axios
      .get(url)
      .then((response) => response.data.results)
      .then((nouveautesArray) => {
        this.setState({
          listNewMovies: nouveautesArray,
        });
      });
  };

  chosenGenre(click) {
    const todayYear00 = new Date().getFullYear();
    const todayMonth = new Date().getMonth() + 1;
    const todayMonth00 = todayMonth.toString().padStart(2, '0');
    const todayDate = new Date().getDate();
    const todayDate00 = todayDate.toString().padStart(2, '0');
    let pastMonth00;
    let pastYear00;

    if (todayMonth >= 6) {
      pastMonth00 = (todayMonth00 - 6).toString().padStart(2, '0');
      pastYear00 = todayYear00;
    } else {
      pastMonth00 = parseInt(todayMonth, 12) + 6;
      pastYear00 = todayYear00 - 1;
    }

    const todayFullDate = `${todayYear00}-${todayMonth00}-${todayDate00}`;
    const pastFullDate = `${pastYear00}-${pastMonth00}-${todayDate00}`;

    const newChosenValue = click.target.name;
    const genreMovies = `&with_genres=${newChosenValue}`;
    this.setState({
      titleGenre: `Les nouveautés pour inspirer ma soirée ${click.target.innerText} :`,
      chosenValue: newChosenValue,
    });
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${pastFullDate}&release_date.lte=${todayFullDate}${genreMovies}`;
    axios
      .get(url)
      .then((response) => response.data.results)
      .then((nouveautesArray) => {
        this.setState({
          listNewMovies: nouveautesArray,
        });
      });
  }

  render() {
    const { listNewMovies, titleGenre } = this.state;

    return (
      <article className={styles.NouveautesList}>
        <h2>L’actualité des films&nbsp;!</h2>
        <div className={styles.areaOfNouveautes}>
          <h3>{titleGenre}</h3>
          {listNewMovies.map((newMovie) => (
            <Nouveautes
              title={newMovie.title}
              posterPath={newMovie.poster_path}
              key={newMovie.title}
            />
          ))}
        </div>
        <div className={styles.divButtons}>
          <p>Je veux voir les nouveautés en&nbsp;:</p>
          <button type="button" name="28" onClick={this.chosenGenre}>
            Action
          </button>
          <button type="button" name="12" onClick={this.chosenGenre}>
            Aventure
          </button>
          <button type="button" name="16" onClick={this.chosenGenre}>
            Films d’animation
          </button>
          <button type="button" name="35" onClick={this.chosenGenre}>
            Humour
          </button>
          <button type="button" name="80" onClick={this.chosenGenre}>
            Crime
          </button>
          <button type="button" name="18" onClick={this.chosenGenre}>
            Drame
          </button>
          <button type="button" name="10751" onClick={this.chosenGenre}>
            Familial
          </button>
          <button type="button" name="14" onClick={this.chosenGenre}>
            Fantastique
          </button>
          <button type="button" name="36" onClick={this.chosenGenre}>
            Histoire
          </button>
          <button type="button" name="27" onClick={this.chosenGenre}>
            Horreur
          </button>
          <button type="button" name="10402" onClick={this.chosenGenre}>
            Musique
          </button>
          <button type="button" name="9648" onClick={this.chosenGenre}>
            Mystère
          </button>
          <button type="button" name="10749" onClick={this.chosenGenre}>
            Amour
          </button>
          <button type="button" name="878" onClick={this.chosenGenre}>
            S.F.
          </button>
          <button type="button" name="10770" onClick={this.chosenGenre}>
            Téléfilm
          </button>
          <button type="button" name="53" onClick={this.chosenGenre}>
            Thriller
          </button>
          <button type="button" name="10752" onClick={this.chosenGenre}>
            Guerre
          </button>
          <button type="button" name="37" onClick={this.chosenGenre}>
            Western
          </button>
        </div>
      </article>
    );
  }
}

NouveautesList.defaultProps = {
  titleGenre: '',
};

export default NouveautesList;
