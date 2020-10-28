import React from 'react';
import './Filmchoice.css';

class Filmchoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.movieSearch = this.movieSearch.bind(this);
  }

  movieSearch(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <form className="searchbar">
        <input
          className="bar"
          type="text"
          placeholder="Je sais ce que je veux !"
          value={value}
          onChange={this.movieSearch}
        />
      </form>
    );
  }
}
export default Filmchoice;
