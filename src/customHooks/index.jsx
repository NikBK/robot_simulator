import { useEffect, useState } from "react";
import { getAngle } from "../utils";

export const useAnimateRobot = (moves) => {
    const [robotPosition, setRobotPosition] = useState({ x: -1, y: -1, angle: 0 });

    useEffect(() => {
        let intervalId = null;

        const animateRobotMovement = () => {
            clearInterval(intervalId);
            let index = 0;
            intervalId = setInterval(() => {
                const [x, y, dir] = moves[index].split(',');
                const angle = getAngle(dir.toString());
                setRobotPosition({ x: parseInt(x), y: parseInt(y), angle });
                index++;
                if (index >= moves.length) {
                    clearInterval(intervalId);
                }
            }, 1000);
        };

        if (moves.length > 0) {
            animateRobotMovement();
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [moves])

    return [robotPosition, setRobotPosition];
}