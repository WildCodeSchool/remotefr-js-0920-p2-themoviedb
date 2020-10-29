import './App.css';
import FilterByDuration from './components/FilterByDuration';

function App() {
  return (
    <div className="App">
      <h1>entre amis</h1>
      <FilterByDuration startTime="00:00" endTime="23:59" runtime={1439} />
    </div>
  );
}

export default App;
