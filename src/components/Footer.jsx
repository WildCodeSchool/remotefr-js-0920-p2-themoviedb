import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/qui-sommes-nous" title="En savoir plus">
            En savoir plus
          </Link>
        </li>
        <li>
          <Link to="/contact" title="Nous contacter">
            Nous contacter
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
