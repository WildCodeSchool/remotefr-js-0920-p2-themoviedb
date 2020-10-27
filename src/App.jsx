import './App.css';
import FilterByDuration from './components/FilterByDuration';

function App() {
  return (
    <div className="App">
      <h1>entre amis</h1>
      <FilterByDuration startTime="00:00" endTime="01:00" />
    </div>
  );
}

export default App;
