import React from 'react';

const ResetButton = ({ resetBoard }) => {

    const handleClick = () => {
        resetBoard()
    }

    return (
        <button className='ResetButton' onClick={handleClick}>Reset</button>
    )
}

export default ResetButton