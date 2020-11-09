import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nouveautes.module.css';

function Nouveautes(props) {
  const { title, posterPath } = props;

  return (
    <div className={styles.newMovies}>
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face${posterPath}`}
        alt={title}
      />
      <p>{title}</p>
    </div>
  );
}

Nouveautes.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default Nouveautes;
