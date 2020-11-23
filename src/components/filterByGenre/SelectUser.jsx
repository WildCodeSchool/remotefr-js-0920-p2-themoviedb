import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Zoom from '../FilmZoom';

const customStyles = {
  overlay: {
    zIndex: 100,
  },
};

function SelectUser(props) {
  const { posterPath, originalTitle, originalName, movie } = props;
  const title = originalTitle === '' ? originalName : originalTitle;

  const [zoomFilm, setInfo] = useState(null);
  const OpenModal = () => {
    setInfo(movie);
  };

  return (
    <div className="SelectUser">
      <button type="button" className="more" onClick={() => OpenModal(movie)}>
        <img src={posterPath} alt="filmcover" className="cover" />
        <p className="titre">{title}</p>
      </button>

      <Modal
        isOpen={!!zoomFilm}
        style={customStyles}
        onRequestClose={() => setInfo(null)}
      >
        <div className="details">
          {zoomFilm && (
            <Zoom
              titre={zoomFilm.original_title}
              poster={zoomFilm.poster_path}
              synopsis={zoomFilm.overview}
              note={zoomFilm.vote_average}
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
};

SelectUser.defaultProps = {
  originalTitle: '',
  originalName: '',
};

export default SelectUser;
