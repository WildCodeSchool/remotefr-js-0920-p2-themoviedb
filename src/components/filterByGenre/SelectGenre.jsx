import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectGenre: false,
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
    const { id, name, genreFilmSelected } = this.props;
    // const { selectGenre } = this.state;
    const genreName = genreFilmSelected.name;
    console.log(id, genreName);
    return (
      <div className={id}>
        <button
          type="button"
          className={
            id === genreName ? 'btn status-active' : 'btn status-inactive'
          }
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genreFilmSelected: PropTypes.shape({
    name: PropTypes.string,
    movie_genres_ids: PropTypes.arrayOf(PropTypes.number),
    tv_genres_ids: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  eventListener: PropTypes.func.isRequired,
};

export default SelectGenre;
