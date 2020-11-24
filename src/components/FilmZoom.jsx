import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

class FilmZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titre, poster, synopsis, note } = this.props;
    return (
      <cards className="moreinfo">
        <h3 className="leTitre">{titre} </h3>
        <img
          alt="Cover"
          className="affiche"
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`}
        />
        <p className="resume">{synopsis}</p>
        <Rating
          className="evaluation"
          name="rating"
          initialRating={note}
          start={0}
          stop={10}
          step={2}
          fractions={2}
          emptySymbol={
            <img src="/stars/star-empty.png" alt="star" className="icon" />
          }
          fullSymbol={
            <img src="/stars/star-full.png" alt="star" className="icon" />
          }
          readonly
        />
      </cards>
    );
  }
}
FilmZoom.propTypes = {
  titre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  note: PropTypes.number.isRequired,
};

export default FilmZoom;
