const RobotMoves = ({ moves, robotPosition }) => {
    return (
        <>
            {moves.length > 0 &&
                <div>
                    <h2>MOVES:</h2>
                    <div className='move-container'>

                        <DisplaySteps moves={moves} />

                        <DisplayBoard robotPosition={robotPosition} />

                    </div>
                </div >
            }
        </>
    )
}

const DisplaySteps = ({ moves }) => {
    return (
        <div>
            <ul>
                {moves.map((report, index) => {
                    return (
                        <li key={index}>
                            {report}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const DisplayBoard = ({ robotPosition }) => {
    return (
        <div className="tabletop">
            {[...Array(25)].map((_, index) => (
                <div key={index} className="grid-cell"></div>
            ))}
            {robotPosition.x >= 0 && robotPosition.y >= 0 &&
                <div
                    className="robot"
                    style={{
                        gridRow: `${5 - robotPosition.y}`,
                        gridColumn: `${robotPosition.x + 1}`,
                        transform: `rotate(${robotPosition.angle}deg)`
                    }}
                >
                    🤖
                </div>
            }
        </div>
    )
}

export default RobotMoves;

