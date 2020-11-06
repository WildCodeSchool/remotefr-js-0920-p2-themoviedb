import React from 'react';

class FilmZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { film: [] };
  }

  render() {
    const { film } = this.state;
    return (
      <cards className="filmview">
        <button type="button" className="delete">
          ✂
        </button>
        <h3 className="filmtitle">{film.original_title} </h3>
        <img
          alt="Cover"
          className="cover"
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${film.poster_path}`}
        />
        <p className="synopsis">la guerre est mal</p>
        <h3 className="vote">{film.vote_average}/10</h3>
      </cards>
    );
  }
}

export default FilmZoom;
