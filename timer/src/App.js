import {useState} from 'react';
import './App.css';
import {Timer} from './components/Timer';

function App () {
  let k = 0, y = 20;

  return (
    <div className="App">

      <Timer start={k} end={y} />

    </div>
  );
}

export default App;
