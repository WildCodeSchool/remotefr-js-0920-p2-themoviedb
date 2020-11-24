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
    };
  }

  moreInfo = () => {
    this.setState({
      zoomFilm: true,
    });
  };

  render() {
    const { title, posterPath, overview, voteAverage } = this.props;
    const { zoomFilm } = this.state;
    return (
      <button
        type="button"
        className={styles.newMovies}
        onClick={() => this.moreInfo()}
      >
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${posterPath}`}
          alt={title}
        />
        <p>{title}</p>
        <Modal
          isOpen={!!zoomFilm}
          style={customStyles}
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
      </button>
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
