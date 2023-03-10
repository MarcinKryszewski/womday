import logo from './Untitled3.png';
//import logo from './logo.svg';
import tulip from './Untitled2.png';
import './App.css';

function App() {
  return (
    <header className='app-full'>
      <div className = "head-text">
        <div className = "head-image">
          <img src = {logo} alt = "Freedom Blog" className = "App-logo" />
        </div>
          <div class='text-on-image'>
             <h3> Wszystkiego najlepszego z okazji <br></br> dnia+2 kobiet </h3>
          </div>
      </div>
      <div className = "bottom-text">
        <img src = {tulip} alt = "Freedom Blog" className = "bottom-image" />
      </div>
    </header>
  );
}

export default App;
