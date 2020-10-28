import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FirstFilters.module.css';

const FirstFilters = () => {
  return (
    <article>
      <Link to="/jeveuxtrouver" title="" className={styles.bigButton}>
        Je veux trouver THE film&nbsp;!
      </Link>
      <Link to="/partage" title="" className={styles.bigButton}>
        J’ai trouvé&nbsp;: je partage&nbsp;!
      </Link>
      <Link
        to="/nouveautes"
        title="Voir les nouveautés"
        className={styles.bigButton}
      >
        Je veux voir les dernières sorties
      </Link>
    </article>
  );
};

export default FirstFilters;
