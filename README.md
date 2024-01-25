# Toy Robot Simulator

## Overview

The Toy Robot Simulator is a React-based application that simulates the movement of a robot on a tabletop surface using user commands. The simulation enforces a 5x5 dimension table, accepting only valid moves and ignoring commands that would take the robot out of bounds.

## Features

- Accepts user commands to move the robot in specified directions.
- Enforces boundaries on the tabletop surface (5x5 dimension).
- Generates a report after running report commands, displaying the current position and direction of the robot.
- Provides a visual representation of the robot's movement.

## Technologies Used

- React.js
- JavaScript / ES6
- CSS

## Project Structure

The project follows standard practices, including:

- **Constants File:** Contains constants used throughout the application.
- **Utility Functions:** Includes utility functions to handle specific tasks.
- **Custom Hooks:** Utilizes custom React hooks for better code organization and reusability.

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Execute `npm start` to run the application locally.

## Usage

1. Enter the PLACE command with coordinates to place the robot on the tabletop surface.
2. Enter valid commands to move the robot on the tabletop surface in 3 directions (LEFT, RIGHT STRAIGHT).
3. Enter REPORT command to see the current position and direction of the robot.
4. Visual representation of the robot's movement is displayed for a better understanding.
   ### Example commands:
   - PLACE 0,0,NORTH
   - REPORT
   - MOVE
   - REPORT
   - RIGHT
   - REPORT
   - MOVE
   - REPORT

   ### Output:
   - 0,0,NORTH
   - 0,1,NORTH
   - 0,1,EAST
   - 1,1,EAST

## Testing

The project includes Jest tests to ensure functionality and handle various scenarios. Run `npm run test` to execute the test suite.

## Hosted Application

[Link to the Hosted Application - Placeholder](#)
