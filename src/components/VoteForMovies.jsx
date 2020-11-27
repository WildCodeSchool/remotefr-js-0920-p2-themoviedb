import Rating from 'react-rating';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FilmZoom from './FilmZoom';

import './VoteForMovie.css';

const customStyles = {
  overlay: {
    zIndex: 500,
  },

  content: {
    overflow: 'hidden',
    padding: 0,
  },
};

class VoteForMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomFilm: null,
    };
  }

  moreInfo(liked) {
    this.setState({ zoomFilm: liked });
  }

  render() {
    const { like } = this.props;
    const { zoomFilm } = this.state;

    return (
      <>
        <button type="button" className="voter">
          J&apos;ai voté
        </button>
        <div className="votefor">
          <h2 className="maselection"> Ma sélection </h2>
          <div className="candidate">
            {like.map((liked) => (
              <cards className="filmselec">
                <img
                  alt="Cover"
                  className="cover"
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face${liked.poster_path}`}
                />
                <Rating
                  className="eval"
                  name="rating"
                  initialRating={0}
                  start={0}
                  stop={10}
                  step={2}
                  fractions={2}
                  emptySymbol={
                    <img
                      src="/stars/star-empty.png"
                      alt="star"
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src="/stars/star-full.png"
                      alt="star"
                      className="icon"
                    />
                  }
                />
                <h3 className="filmtitre">{liked.original_title} </h3>
                <button
                  type="button"
                  className="plus"
                  onClick={() => this.moreInfo(liked)}
                >
                  Détails
                </button>
              </cards>
            ))}
            <Modal
              isOpen={!!zoomFilm}
              style={customStyles}
              onRequestClose={() => this.setState({ zoomFilm: null })}
            >
              <div className="details">
                {zoomFilm && (
                  <FilmZoom
                    titre={zoomFilm.original_title}
                    poster={zoomFilm.poster_path}
                    synopsis={zoomFilm.overview}
                    note={zoomFilm.vote_average}
                    id={zoomFilm.id}
                  />
                )}
              </div>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

VoteForMovies.propTypes = {
  like: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      first_air_date: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
    }),
  ),
};

VoteForMovies.defaultProps = {
  like: [],
};

export default VoteForMovies;
