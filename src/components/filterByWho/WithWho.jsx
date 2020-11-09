import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import stylesWithWho from './WithWhoList.module.css';

function WithWho(props) {
  const { who } = props;
  let path = '/select-emotions';
  if (who === 'En Famille') {
    path = '/select-age';
  }
  // const path = who === 'En Famille' ? '/select-age' : '/select-emotions';
  return (
    <div className={stylesWithWho.bigButton}>
      <Link to={path} title="">
        {who}
      </Link>
    </div>
  );
}

WithWho.propTypes = {
  who: PropTypes.string.isRequired,
};

export default WithWho;
