import React, { useState } from 'react'
import './App.css';
import ResetButton from './components/ResetButton';
import Board from './components/Board';
import WinNotification from './components/WinNotification';

const App = () => {
  const INITIAL_STATE = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ] 

  const [board, setBoard] = useState(INITIAL_STATE)
  const [currentPiece, setCurrentPiece] = useState("X")
  const [activeGame, setActiveGame] = useState(true)

  const resetBoard = () => {
    setBoard(INITIAL_STATE)
    setActiveGame(true)
  }

  const updateBoard = (row, cell) => {
    if (board[row][cell] !== null) return
    if (!activeGame) return

    const updatedBoard = [...board]
    updatedBoard[row][cell] = currentPiece
    setBoard(updatedBoard)

    if (checkForWin()) {
      setActiveGame(false)
      return
    }

    setCurrentPiece(currentPiece === 'X' ? 'O': 'X')
  }

  const checkForWin = () => {
    
    const checkRows = () => {
      for (let i=0; i<board.length - 1; i++) {
        if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true
      }
      return false
    }

    const checkCols = () => {
      for (let i=0; i<board.length - 1; i++) {
        if (board[0][i] !== null && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true
      }
      return false
    }

    const checkDiagRight = () => {
      return board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]
    }

    const checkDiagLeft = () => {
      return board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]
    }

    if (checkRows() || checkCols() || checkDiagRight() || checkDiagLeft()) return true
  }

  return (
    <div className="App">
      <ResetButton resetBoard={resetBoard}/>
      <Board board={board} updateBoard={updateBoard}/>
      {activeGame ? null : <WinNotification currentPiece={currentPiece} />}
    </div>
  );
}

export default App;
