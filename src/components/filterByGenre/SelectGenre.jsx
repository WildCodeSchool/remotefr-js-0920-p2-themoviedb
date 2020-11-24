import React from 'react';
import PropTypes from 'prop-types';
import './SelectGenre.css';

class SelectGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectGenre: false,
    };
  }

  componentDidMount = () => {
    const { id, genreFilmSelected } = this.props;
    const genreName = genreFilmSelected.name;
    const { selectGenre } = this.state;
    const genre = !selectGenre;
    if (id === genreName) {
      this.setState({ selectGenre: genre });
    }
  };

  eventListener(event) {
    const { selectGenre } = this.state;
    const genre = !selectGenre;
    const { eventListener } = this.props;
    this.setState({ selectGenre: genre });
    eventListener(event);
  }

  render() {
    const { id, name } = this.props;
    const { selectGenre } = this.state;

    return (
      <div className="divButtons">
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
