import React from 'react';
import PropTypes from 'prop-types';

class FilmZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titre, poster, synopsis, note } = this.props;
    return (
      <cards className="filmview">
        <button type="button" className="delete">
          ✂Film
        </button>
        <h3 className="filmtitle">{titre} </h3>
        <img
          alt="Cover"
          className="cover"
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`}
        />
        <p className="synopsis">{synopsis}</p>
        <h3 className="vote">{note}/10</h3>
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
