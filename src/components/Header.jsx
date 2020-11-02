import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/." title="Retour à la page d'accueil">
          Je suis ton FILM.
        </Link>
      </h1>
    </header>
  );
};

export default Header;
