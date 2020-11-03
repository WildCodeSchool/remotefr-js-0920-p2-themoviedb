import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import FilterByDuration from './components/filterByDuration/FilterByDuration';
import Header from './components/Header';
import FirstFilters from './components/FirstFilters';
import Footer from './components/Footer';
import styles from './App.module.css';
import Filmchoice from './components/Filmchoice';
import NouveautesList from './components/NouveautesList';
import apiKey from './components/apiKey';

// const arrayOfNewMovies = [
//   {
//     title: 'Sacrées sorcières',
//     posterPath: '/p4nwKbOCSNCxftKgL9F5F0S4a2B.jpg',
//   },
//   {
//     title: '2067',
//     posterPath: '/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg',
//   },
//   {
//     title: 'Hard Kill',
//     posterPath: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
//   },
//   {
//     title: 'Mort Subite 2',
//     posterPath: '/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
//   },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '20:00',
      endTime: '22:00',
      runtime: 120,
      listNewMovies: [],
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchNouveautes();
    console.log('componentDidMount');
  }

  // const currentYear = new Date();
  // console.log(currentYear.getFullYear());
  // appel de l'API
  // const myResults = `https://api.themoviedb.org/3/discover/movie?api_key=74d5a2d9e7e8b509e4235d8ff4524d48&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${currentYear}`;

  fetchNouveautes = () => {
    const currentYear = new Date().getFullYear();
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${currentYear}&with_genres=9648`;
    axios
      .get(url)
      .then((response) => response.data.results)
      .then((nouveautesArray) => {
        this.setState({
          listNewMovies: nouveautesArray,
        });
      });
  };

  handleChange(event) {
    const { name } = event.target;
    this.setState(
      {
        [name]: event.target.value,
      },
      this.calculruntime,
    );
  }

  /**
   * This method allows you to calculate the maximum duration of a film which will
   * be used to filter during the request to the API
   */
  calculruntime() {
    const { startTime, endTime } = this.state;
    // calculation of the maximum length of the film
    const xstart =
      Number(startTime.substr(0, 2)) * 60 + Number(startTime.substr(3));
    const xend = Number(endTime.substr(0, 2)) * 60 + Number(endTime.substr(3));
    if (xstart > xend) {
      this.setState({
        runtime: 1440 - xstart + xend,
      });
    }
    this.setState({
      runtime: xend - xstart,
    });
  }

  render() {
    console.log('render');
    const { startTime, endTime, runtime } = this.state;
    const { listNewMovies } = this.state;
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
          <Route path="/les-elus">
            <Filmchoice />
          </Route>
          <Route path="/nouveautes">
            <NouveautesList listNewMovies={listNewMovies} />
          </Route>
          <Route path="/" component={FirstFilters} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
