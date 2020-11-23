import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import stylesEmotion from './FilterByEmotion.module.css';

function FilterByEmotion(props) {
  const { genre, match } = props;

  const genres = genre.replace(/ /g, '-');
  const path = `${match.url}/${genres}/genres`;

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
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      who: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(FilterByEmotion);
