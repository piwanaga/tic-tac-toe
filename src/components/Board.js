import React from 'react';

const Board = ({ board, updateBoard }) => {

    const handleClick = (row, cell) => {
        updateBoard(row, cell)
    }

    return (
        <div className='Board'>
            <table>
                <tbody>
                    <tr className='row'>
                        <td className='cell' onClick={() => handleClick(0,0)}>{board[0][0]}</td>
                        <td className='cell' onClick={() => handleClick(0,1)}>{board[0][1]}</td>
                        <td className='cell' onClick={() => handleClick(0,2)}>{board[0][2]}</td>
                    </tr>
                    <tr>
                        <td className='cell' onClick={() => handleClick(1,0)}>{board[1][0]}</td>
                        <td className='cell' onClick={() => handleClick(1,1)}>{board[1][1]}</td>
                        <td className='cell' onClick={() => handleClick(1,2)}>{board[1][2]}</td>
                    </tr>
                    <tr>
                        <td className='cell' onClick={() => handleClick(2,0)}>{board[2][0]}</td>
                        <td className='cell' onClick={() => handleClick(2,1)}>{board[2][1]}</td>
                        <td className='cell' onClick={() => handleClick(2,2)}>{board[2][2]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board