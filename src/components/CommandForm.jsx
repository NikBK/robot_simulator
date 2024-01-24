import { useState } from 'react';
import RobotSimulator from './RobotSimulator';

const CommandForm = ({ setMoves }) => {
    const [commands, setCommands] = useState('');

    const handleCommands = (event) => {
        setCommands(event.target.value);
    }

    const handleRunCommands = (event) => {
        event.preventDefault();
        const simulator = new RobotSimulator();
        const result = simulator.runCommands(commands);
        setMoves(result);
    }

    return (
        <form onSubmit={handleRunCommands} className='container'>
            <div className=''>
                <label htmlFor='commands'>Enter Commands</label>
                <textarea id='commands' name='commands' value={commands} onChange={handleCommands} />
            </div>
            <button type='submit'>Run Commands</button>
        </form>
    )
}

export default CommandForm;
