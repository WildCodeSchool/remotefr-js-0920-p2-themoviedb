import React from 'react';
import PropTypes from 'prop-types';
import Nouveautes from './Nouveautes';
import styles from './NouveautesList.module.css';

function NouveautesList(props) {
  const { listNewMovies } = props;
  return (
    <article className={styles.NouveautesList}>
      <h2>L’actualité des films&nbsp;!</h2>
      <div className={styles.areaOfNouveautes}>
        {listNewMovies.map((newMovie) => (
          <Nouveautes
            title={newMovie.title}
            posterPath={newMovie.poster_path}
            key={newMovie.poster_path}
          />
        ))}
      </div>
    </article>
  );
}

NouveautesList.propTypes = {
  listNewMovies: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, posterPath: PropTypes.string })
      .isRequired,
  ),
};

// NouveautesList.defaultProps = {
//   title: '',
//   posterPath: 'https://via.placeholder.com/190x285.png',
// };

export default NouveautesList;
