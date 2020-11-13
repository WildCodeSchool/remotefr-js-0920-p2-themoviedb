import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import stylesWithWho from './WithWhoList.module.css';

function WithWho(props) {
  const { who } = props;
  const whoUrl = who.replace(/ /g, '-');

  let path = `/jeveuxtrouver/${whoUrl}/duree`;
  if (who === 'En Famille') {
    path = `/jeveuxtrouver/${whoUrl}/age`;
  }

  return (
    <div className={stylesWithWho.bigButton}>
      <Link to={path} title="" id={who}>
        {who}
      </Link>
    </div>
  );
}

WithWho.propTypes = {
  who: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
};

export default WithWho;
