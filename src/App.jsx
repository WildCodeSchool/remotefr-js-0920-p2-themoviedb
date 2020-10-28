import './App.css';
import Filmchoice from './component/Filmchoice';
import Selection from './component/Selection';
import Selected from './component/Selected';

function App() {
  return (
    <div className="research">
      <Filmchoice />
      <Selected />
      <article>
        <Selection />
        <Selection />
      </article>
    </div>
  );
}

export default App;
