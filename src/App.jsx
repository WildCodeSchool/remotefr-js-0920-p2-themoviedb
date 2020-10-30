import './App.css';
import { Switch, Route } from 'react-router-dom';
import Filmchoice from './components/Filmchoice';

function App() {
  return (
    <Switch>
      <Route path="/fais-ta-selection">
        <Filmchoice />
      </Route>
    </Switch>
  );
}

export default App;
