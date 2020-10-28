import './App.css';
import Filmchoice from './component/Filmchoice';
import Selection from './component/Selection';

function App() {
  return (
    <div className="research">
      <Filmchoice />
      <article>
        <Selection />
        <Selection />
      </article>
    </div>
  );
}

export default App;
