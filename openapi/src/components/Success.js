import React from 'react'

const Success = props => {
    return (
        <div className='center'>
            <h1>This Password does not appear in the database! It has not been leaked!</h1>
            <h3>This Password is made of {props.results.char}</h3>
            <h4>Key:</h4>
            <h6>D: Digits</h6>
            <h6>A: Alphabet Characters</h6>
            <h6>S: Special Characters</h6>
            <h6>L: Length of password</h6>
        </div>
    )
}

export default Success