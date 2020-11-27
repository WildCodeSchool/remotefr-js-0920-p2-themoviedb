import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/." title="Retour à la page d'accueil">
          Je&nbsp;suis&nbsp;ton&nbsp;FILM.
        </Link>
      </h1>
    </header>
  );
};

export default Header;
