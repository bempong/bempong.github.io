
import './App.css';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Fun from './components/Fun';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Projects/>
      <Experience/>
      <Fun/>
    </div>
  );
}

export default App;
