import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Zoom from '../FilmZoom';

const customStyles = {
  overlay: {
    zIndex: 100,
  },
  content: {
    padding: 0,
  },
};

function SelectUser(props) {
  // handleLike={handleLike}
  const {
    posterPath,
    originalTitle,
    originalName,
    movie,
    handleLike,
    linkToMovieForKids,
  } = props;

  const title = originalTitle === '' ? originalName : originalTitle;

  const [zoomFilm, setInfo] = useState(null);
  const OpenModal = () => {
    setInfo(movie);
  };

  const [favorite, setFavorite] = useState(false);

  return (
    <div className="SelectUser">
      <button type="button" onClick={() => OpenModal(movie)}>
        <img src={posterPath} alt="filmcover" className="cover" />
        <p className="titre">{title}</p>
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setFavorite(!favorite);
          handleLike(movie);
        }}
      >
        <span className={favorite ? 'is-favorite' : ''}>
          {favorite ? '💗' : '💛'}
        </span>
      </button>

      <Modal
        isOpen={!!zoomFilm}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => setInfo(null)}
      >
        <div className="details">
          {zoomFilm && (
            <Zoom
              titre={title !== '' ? title : zoomFilm.name}
              poster={zoomFilm.poster_path}
              synopsis={zoomFilm.overview}
              note={zoomFilm.vote_average}
              id={zoomFilm.id}
              linkToMovieForKids={linkToMovieForKids}
            />
          )}
          <button
            type="button"
            className="delete"
            onClick={() => setInfo(null)}
          >
            ✂
          </button>
        </div>
      </Modal>
    </div>
  );
}

SelectUser.propTypes = {
  posterPath: PropTypes.string.isRequired,
  originalTitle: PropTypes.string,
  originalName: PropTypes.string,
  movie: PropTypes.shape().isRequired,
  handleLike: PropTypes.func.isRequired,
  linkToMovieForKids: PropTypes.string,
};

SelectUser.defaultProps = {
  originalTitle: '',
  originalName: '',
  linkToMovieForKids: undefined,
};

export default SelectUser;
