import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import MySelectionOfMovies from './MySelectionOfMovies';
import SendMovies from '../SendMovies';
import './MySelectionOfMoviesList.css';
import styles from '../SendMovies.module.css';

const customStyles = {
  overlay: {
    zIndex: 100,
  },
  content: {
    overflow: 'hidden',
    padding: 0,
  },
};

class MySelectionOfMoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      share: false,
    };
  }

  handleClickSend = () => {
    this.setState({ share: true });
  };

  closeSendMovies = () => {
    this.setState({
      share: false,
    });
  };

  closeSendMoviesByKeyboard = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.setState({
        share: false,
      });
    }
  };

  render() {
    const { movieLiked } = this.props;
    const { share } = this.state;
    return (
      <div className="MySelectionOfMoviesList">
        <h2>Tu as choisi&nbsp;: </h2>
        <div className="MySelectionOfMovie">
          {movieLiked.map((singleMovie) => (
            <MySelectionOfMovies
              key={singleMovie.id}
              title={singleMovie.title}
              posterPath={`https://image.tmdb.org/t/p/w440_and_h660_face${singleMovie.poster_path}`}
              tagline={singleMovie.tagline}
            />
          ))}
          <button type="button" className="btn" onClick={this.handleClickSend}>
            Envoie ta sélection&nbsp;!
          </button>
        </div>
        <Modal
          isOpen={!!share}
          ariaHideApp={false}
          style={customStyles}
          onRequestClose={() => this.setState({ share: null })}
        >
          <button
            type="button"
            onClick={this.closeSendMovies}
            onKeyDown={this.closeSendMoviesByKeyboard}
            className={styles.close}
          >
            <img src="/fermer.svg" alt="Fermer la fenêtre d'envoi" />
          </button>
          <SendMovies />
        </Modal>
      </div>
    );
  }
}

MySelectionOfMoviesList.propTypes = {
  movieLiked: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

MySelectionOfMoviesList.defaultProps = {
  movieLiked: [],
};

export default MySelectionOfMoviesList;
