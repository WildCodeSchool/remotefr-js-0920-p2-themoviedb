import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import stylesEmotion from './FilterByEmotion.module.css';
import FilterByEmotion from './FilterByEmotion';

function ListEmotion({ data, match }) {
  // const x = data.Family.list_genres_name;
  const { params } = match;
  const whom = params.who.replace(/-/g, ' ');
  let arrayMap = null;
  if (data.Friends.name === whom) {
    arrayMap = data.Friends.list_genres_name;
  } else if (data.Family.name === whom) {
    arrayMap = data.Family.list_genres_name;
  } else if (data.Couple.name === whom) {
    arrayMap = data.Couple.list_genres_name;
  } else {
    arrayMap = data.Alone.list_genres_name;
  }

  return (
    <article className={stylesEmotion.FilterByEmotion}>
      {arrayMap.map((item) => (
        <FilterByEmotion key={item.name} genre={item.name} whom={params.who} />
      ))}
    </article>
  );
}

ListEmotion.propTypes = {
  data: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string,
      list_genres_name: PropTypes.arrayOf({
        name: PropTypes.string,
        movie_genres_ids: PropTypes.arrayOf(PropTypes.number),
        tv_genres_ids: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape,
  }).isRequired,
};

export default withRouter(ListEmotion);
