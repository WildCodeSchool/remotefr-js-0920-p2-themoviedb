import React from 'react';
import PropTypes from 'prop-types';
import WithWho from './WithWho';
import stylesWithWho from './WithWhoList.module.css';

function WithWhoList(props) {
  const { arrayData } = props;
  return (
    <article className={stylesWithWho.withwhom}>
      {arrayData.map((item) => (
        <WithWho key={item} who={item} />
      ))}
    </article>
  );
}

WithWhoList.propTypes = {
  arrayData: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WithWhoList;
