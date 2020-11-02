import React from 'react';
import styles from './Nouveautes.module.css';

const Nouveautes = () => {
  return (
    <article className={styles.nouveautes}>
      <h2>L’actualité des films&nbsp;!</h2>
      <div className="newMovies">Affiches de films ici</div>
    </article>
  );
};
export default Nouveautes;
