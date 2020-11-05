import React from 'react';
import PropTypes from 'prop-types';

function SelectGenre(props) {
  const { name, id, eventListener } = props;
  return (
    <div className={id}>
      <button
        type="button"
        className="btn status-active"
        id={id}
        onClick={eventListener}
      >
        {name}
      </button>
    </div>
  );
}

SelectGenre.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  eventListener: PropTypes.func.isRequired,
};

export default SelectGenre;
