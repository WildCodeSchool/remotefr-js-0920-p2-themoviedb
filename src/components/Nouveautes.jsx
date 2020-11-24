import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FilmZoom from './FilmZoom';
import styles from './Nouveautes.module.css';

const customStyles = {
  overlay: {
    zIndex: 100,
  },
};

class Nouveautes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomFilm: null,
      setFavorite: false,
      favorite: false,
    };
  }

  moreInfo = () => {
    this.setState({
      zoomFilm: true,
    });
  };

  render() {
    const { title, posterPath, overview, voteAverage } = this.props;
    const { zoomFilm, setFavorite, favorite } = this.state;
    return (
      <div className={styles.newMovies}>
        <button
          type="button"
          onClick={() => this.moreInfo()}
          title="Voir plus d'infos"
        >
          <div className={styles.plusDinfo}>👁</div>
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${posterPath}`}
            alt={title}
          />
          <p>{title}</p>
        </button>

        <button
          type="button"
          title="Ajouter à mes favoris"
          className={styles.favoriteSelected}
          onClick={() => {
            setFavorite(!favorite);
          }}
        >
          <span className={styles.favoriteHeart}>{favorite ? '💗' : '💛'}</span>
        </button>

        <Modal
          isOpen={!!zoomFilm}
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={() => this.setState({ zoomFilm: null })}
        >
          <div className="details">
            {zoomFilm && (
              <FilmZoom
                titre={title}
                poster={posterPath}
                synopsis={overview}
                note={voteAverage}
              />
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

Nouveautes.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};

export default Nouveautes;
