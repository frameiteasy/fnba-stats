import React from 'react';
import './App.css';
import { PlayerStats } from './components/PlayerStats/PlayerStats';
import playerStats from './players/paul_george.json';

function App() {

  console.log('player stats', playerStats);
  

  return (
    <div className="App">

        <PlayerStats/>

    </div>
  );
}

export default App;
