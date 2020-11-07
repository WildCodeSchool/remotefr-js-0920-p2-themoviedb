import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilterByDuration from './components/filterByDuration/FilterByDuration';
import FilterByGenre from './components/filterByGenre/FilterByGenre';
import Header from './components/Header';
import FirstFilters from './components/FirstFilters';
import Footer from './components/Footer';
import styles from './App.module.css';
import Filmchoice from './components/Filmchoice';
import NouveautesList from './components/NouveautesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '20:00',
      endTime: '22:00',
      runtime: 120,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
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
          <Route path="/filter-by-genre">
            <FilterByGenre runtime={runtime} />
          </Route>
          <Route path="/les-elus">
            <Filmchoice />
          </Route>
          <Route path="/nouveautes">
            <NouveautesList listNewMovies={listNewMovies} />
          </Route>
          <div className={styles.content}>
            <Route path="/" component={FirstFilters} />
          </div>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
