import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Data from './Data/DataGenre';
import FilterByDuration from './components/filterByDuration/FilterByDuration';
import FilterByGenre from './components/filterByGenre/FilterByGenre';
import Header from './components/Header';
import FirstFilters from './components/FirstFilters';
import Footer from './components/Footer';
import styles from './App.module.css';
import Filmchoice from './components/Filmchoice';
import NouveautesList from './components/NouveautesList';
import QuiSommesNous from './components/QuiSommesNous';
import Contact from './components/Contact';
import SendMovies from './components/SendMovies';
import WithWhoList from './components/filterByWho/WithWhoList';
import FilterByAge from './components/FilterByAge/FilterByAge';
import ListEmotions from './components/FilterByEmotion/ListEmotion';
import SelectionByAge from './components/SelectionByAge/SelectionByAge';
import VoteForMovie from './components/VoteForMovies';

const arrayData = { who: ['Entre amis', 'En Famille', 'En couple', 'Seul'] };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '20:00',
      endTime: '22:00',
      runtime: 120,
      selectWithWho: '',
      data: Data,
      like: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLike = (mov) => {
    this.setState((prevState) => {
      const newLike = prevState.like.includes(mov)
        ? prevState.like.filter((m) => m !== mov)
        : [...prevState.like, mov];
      return { like: newLike };
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
    const calruntime = xend - xstart;
    if (calruntime < 0) {
      this.setState({
        runtime: 1440 - xstart + xend,
      });
    } else {
      this.setState({
        runtime: xend - xstart,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      selectWithWho: event.target.id,
    });
  }

  render() {
    const {
      startTime,
      endTime,
      runtime,
      selectWithWho,
      data,
      like,
    } = this.state;
    const { listNewMovies } = this.state;

    return (
      <div className={styles.content}>
        <Header />
        <Switch>
          <Route path="/les-elus">
            <Filmchoice />
          </Route>

          <Route path="/nouveautes">
            <NouveautesList
              listNewMovies={listNewMovies}
              handleLike={this.handleLike}
              like={like}
            />
          </Route>

          <Route path="/jeveuxtrouver/En-Famille/:Age/Selection">
            <SelectionByAge handleLike={this.handleLike} like={like} />
          </Route>

          <Route path="/jeveuxtrouver/:who/:duree/:genre">
            <FilterByGenre
              runtime={runtime}
              handleLike={this.handleLike}
              like={like}
            />
          </Route>

          <Route exact path="/jeveuxtrouver/En-Famille">
            <FilterByAge />
          </Route>

          <Route
            exact
            path={['/jeveuxtrouver/En-Famille/:Age/', '/jeveuxtrouver/:who']}
          >
            <FilterByDuration
              startTime={startTime}
              endTime={endTime}
              runtime={runtime}
              handleChange={this.handleChange}
            />
          </Route>

          <Route path="/jeveuxtrouver/:who/:duree">
            <ListEmotions selectWithWho={selectWithWho} data={data} />
          </Route>
          <Route path="/jeveuxtrouver">
            <WithWhoList
              arrayData={arrayData.who}
              handleSubmit={this.handleSubmit}
            />
          </Route>

          <Route path="/qui-sommes-nous">
            <QuiSommesNous />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/vote-pour-ton-film">
            <VoteForMovie like={like} />
          </Route>

          <Route path="/partage" component={SendMovies} />
          <Route path="/" component={FirstFilters} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
