const { DIRECTIONS } = require("../constants/index.js");

export const getAngle = (dir) => {
    if (dir.toUpperCase() === DIRECTIONS.SOUTH) return parseInt(0);
    if (dir.toUpperCase() === DIRECTIONS.WEST) return parseInt(90);
    if (dir.toUpperCase() === DIRECTIONS.NORTH) return parseInt(180);
    if (dir.toUpperCase() === DIRECTIONS.EAST) return parseInt(270);
}