import React from 'react'
import Square from './Square'

const board = []
const smallBoard = 9
const mediumBoard = 16
const largeBoard = 24

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    
    generateMines = () => {
        let minePositions= []
        for(let i = 1; i <= 9; i++) {
            minePositions.push(Math.floor(Math.random() * (smallBoard * smallBoard)))
        }
        return minePositions.sort((a, b) => a-b)
    }

    render() {
        let minePositions = this.generateMines();
        console.log(minePositions)

        for (let i = 0; i < (smallBoard * smallBoard); i++) {
            for (let j = 0; j <= minePositions.length; j++) {
                if (i === minePositions[j]) {
                    board.push(<Square key={`square${i}`} mine={true} />)
                    i++;
                }
            }
            board.push(<Square key={`square${i}`} mine={false} />)
        }

        console.log(board);

        const boardStyle = {
            width: `calc(${smallBoard} * 30px)`,
            display: 'flex',
            flexWrap: 'wrap'
        }
        return(
            <div style={boardStyle}>
                {board}
            </div>
        )
    }
}

export default Board