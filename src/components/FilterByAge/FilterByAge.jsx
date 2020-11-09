import React from 'react';
import { Link } from 'react-router-dom';
import stylesFilterByAge from './FilterByAge.module.css';
import AgeOfTheYoungest from './AgeOfTheYoungest';

function FilterByAge() {
  return (
    <article className={stylesFilterByAge.FilterByAge}>
      <div className={stylesFilterByAge.bigButton}>
        <Link to="/famille" title="">
          En Famille
        </Link>
      </div>
      <div className={stylesFilterByAge.bigButton}>
        <p>Sélectionner l&apos;age du plus jeune</p>
        <AgeOfTheYoungest />
        <button type="submit">Suivant</button>
        <p> </p>
      </div>
    </article>
  );
}

export default FilterByAge;
