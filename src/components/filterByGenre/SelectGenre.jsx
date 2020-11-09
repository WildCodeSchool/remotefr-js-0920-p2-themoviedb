import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectGenre: true,
    };
  }

  eventListener(event) {
    const { selectGenre } = this.state;
    const genre = !selectGenre;
    const { eventListener } = this.props;
    this.setState({ selectGenre: genre });
    eventListener(event);
  }

  render() {
    const { name, id } = this.props;
    const { selectGenre } = this.state;
    return (
      <div className={id}>
        <button
          type="button"
          className={selectGenre ? 'btn status-active' : 'btn status-inactive'}
          id={id}
          onClick={(event) => this.eventListener(event)}
          title={`Retirer le genre ${name}`}
        >
          {name}
        </button>
      </div>
    );
  }
}

SelectGenre.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  eventListener: PropTypes.func.isRequired,
};

export default SelectGenre;
