import React from 'react';

function zoom(zoomFilm) {
  return (
    <cards className="filmview">
      <button type="button" className="delete">
        ✂
      </button>
      <h3 className="filmtitle">{zoomFilm.original_title} </h3>
      <img
        alt="Cover"
        className="cover"
        src={`https://image.tmdb.org/t/p/w440_and_h660_face${zoomFilm.poster_path}`}
      />
      <p className="synopsis">{zoomFilm.overview}</p>
      <h3 className="vote">{zoomFilm.vote_average}/10</h3>
    </cards>
  );
}

export default zoom;
