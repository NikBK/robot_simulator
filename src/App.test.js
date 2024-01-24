import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Toy Robot/i);
  expect(linkElement).toBeInTheDocument();
});

import RobotSimulator from './components/RobotSimulator';

describe('RobotSimulator', () => {
  let simulator;

  beforeEach(() => {
    simulator = new RobotSimulator();
  });

  test('should place the robot on the table', () => {
    simulator.place(0, 0, 'NORTH');
    expect(simulator.x).toBe(0);
    expect(simulator.y).toBe(0);
    expect(simulator.facing).toBe('NORTH');
    expect(simulator.isPlaced).toBe(true);

    simulator.move();
    expect(simulator.x).toBe(0);
    expect(simulator.y).toBe(1);
    expect(simulator.facing).toBe('NORTH');
    expect(simulator.isPlaced).toBe(true);
  });

  test('should place the robot on table and move to WEST', () => {
    simulator.place(0, 0, 'NORTH');
    expect(simulator.x).toBe(0);
    expect(simulator.y).toBe(0);
    expect(simulator.facing).toBe('NORTH');
    expect(simulator.isPlaced).toBe(true);

    simulator.left();
    expect(simulator.x).toBe(0);
    expect(simulator.y).toBe(0);
    expect(simulator.facing).toBe('WEST');
    expect(simulator.isPlaced).toBe(true);
  });


});