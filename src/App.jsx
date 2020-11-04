import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import FilterByDuration from './components/filterByDuration/FilterByDuration';
import GenreList from './components/filterByGenre/GenreList';
import Header from './components/Header';
import FirstFilters from './components/FirstFilters';
import Footer from './components/Footer';
import styles from './App.module.css';
import Filmchoice from './components/Filmchoice';
import apiKey from './components/apiKey';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '20:00',
      endTime: '22:00',
      runtime: 120,
      listGenre: [],
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchGenres();
  }

  fetchGenres = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr`,
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ listGenre: data.genres });
      });
  };

  /**
   * This method allows you to calculate the maximum duration of a film which will
   * be used to filter during the request to the API
   */
  calculruntime() {
    const { startTime, endTime, runtime } = this.state;
    // calculation of the maximum length of the film
    const xstart =
      Number(startTime.substr(0, 2)) * 60 + Number(startTime.substr(3));
    const xend = Number(endTime.substr(0, 2)) * 60 + Number(endTime.substr(3));
    if (runtime < 0) {
      this.setState({
        runtime: 1440 - xstart + xend,
      });
    }
    this.setState({
      runtime: xend - xstart,
    });
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState(
      {
        [name]: event.target.value,
      },
      this.calculruntime,
    );
  }

  render() {
    const { startTime, endTime, runtime, listGenre } = this.state;
    return (
      <div className={styles.content}>
        <Header />

        <Switch>
          <Route path="/filter-by-duration">
            <FilterByDuration
              startTime={startTime}
              endTime={endTime}
              runtime={runtime}
              handleChange={this.handleChange}
            />
          </Route>
          <Route path="/filter-by-genre">
            <GenreList listGenre={listGenre} />
          </Route>
          <Route path="/les-elus">
            <Filmchoice />
          </Route>
          <Route path="/" component={FirstFilters} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
