import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import FilterByDuration from './components/filterByDuration/FilterByDuration';

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
    const { startTime, endTime, runtime } = this.state;
    return (
      <div className="App">
        <h1>Je planifie ma soiréeq</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/filter-by-duration">
              <FilterByDuration
                startTime={startTime}
                endTime={endTime}
                runtime={runtime}
                handleChange={this.handleChange}
              />
            </Route>
            {JSON.stringify({ startTime, endTime, runtime })}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
