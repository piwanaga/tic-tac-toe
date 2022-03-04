import React from 'react'

const WinNotification = ({ currentPiece }) => {
    return (
        <p className='WinNotification'>{currentPiece} wins!</p>
    )
}

export default WinNotification