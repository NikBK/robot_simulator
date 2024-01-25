import { useState } from 'react';
import { useAnimateRobot } from './customHooks';
import CommandForm from './components/CommandForm';
import RobotMoves from './components/RobotMoves';
import './App.css';

function App() {
  const [moves, setMoves] = useState([]);
  const [robotPosition] = useAnimateRobot(moves);

  return (
    <div className="App-header">

      <header>
        <h1>Toy Robot Simulator</h1>
      </header>

      <main className='main-container'>
        <CommandForm setMoves={setMoves} />
        <RobotMoves moves={moves} robotPosition={robotPosition} />
      </main>

    </div>
  );
}

export default App;
