import { ACTIONS, DIRECTIONS } from "../constants";

class RobotSimulator {
    constructor() {
        this.x = null;
        this.y = null;
        this.facing = null;
        this.isPlaced = false;
        this.directions = [DIRECTIONS.NORTH, DIRECTIONS.WEST, DIRECTIONS.SOUTH, DIRECTIONS.EAST];
    }

    place(x, y, facing) {
        if (this.isValidPosition(x, y)) {
            this.x = x;
            this.y = y;
            this.facing = facing;
            this.isPlaced = true;
        }
    }

    isValidPosition(x, y) {
        return x >= 0 && x < 5 && y >= 0 && y < 5;
    }

    move() {
        if (!this.isPlaced) return;

        let newY = this.y + (this.facing === DIRECTIONS.NORTH ? 1 : this.facing === DIRECTIONS.SOUTH ? -1 : 0);
        let newX = this.x + (this.facing === DIRECTIONS.EAST ? 1 : this.facing === DIRECTIONS.WEST ? -1 : 0);

        if (this.isValidPosition(newX, newY)) {
            this.x = newX;
            this.y = newY;
        }
    }

    left() {
        if (!this.isPlaced) return;

        const currentDirection = this.directions.indexOf(this.facing);
        this.facing = this.directions[(currentDirection + 1) % 4];
    }

    right() {
        if (!this.isPlaced) return;

        const currentDirection = this.directions.indexOf(this.facing);
        this.facing = this.directions[(currentDirection + 3) % 4];
    }

    report() {
        if (this.isPlaced) {
            return `${this.x},${this.y},${this.facing}`;
        }
    }

    runCommands(commandString) {
        const commands = commandString.trim().toUpperCase().split('\n');
        const output = [];

        commands.forEach((command) => {
            const [action, args] = command.split(' ');
            const [x, y, facing] = args ? args.split(',') : [];

            const actions = {
                [ACTIONS.PLACE]: () => this.place(parseInt(x), parseInt(y), facing),
                [ACTIONS.MOVE]: () => this.move(),
                [ACTIONS.LEFT]: () => this.left(),
                [ACTIONS.RIGHT]: () => this.right(),
                [ACTIONS.REPORT]: () => {
                    const val = this.report();
                    if (val) output.push(val);
                },
            };

            const actionHandler = actions[action];
            if (actionHandler) actionHandler();

        });

        return output;
    }

}

export default RobotSimulator;