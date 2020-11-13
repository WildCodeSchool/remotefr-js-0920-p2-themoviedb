import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import stylesEmotion from './FilterByEmotion.module.css';

function FilterByEmotion(props) {
  const { genre, whom } = props;
  const who = whom.replace(/ /g, '-');
  const genres = genre.replace(/ /g, '-');
  const path = `/jeveuxtrouver/${who}/${genres}/genres`;

  return (
    <div className={stylesEmotion.bigButton}>
      <Link to={path} title="">
        {genre}
      </Link>
    </div>
  );
}

FilterByEmotion.propTypes = {
  genre: PropTypes.string.isRequired,
  whom: PropTypes.string.isRequired,
};

export default FilterByEmotion;
