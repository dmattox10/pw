import React from 'react'

const Results = props => {
    return (
        <div className='center'>
            <h1>This Password appears in the database as a result of {props.results.count} compromised websites!</h1>
            <h3>This Password is made of {props.results.char}</h3>
            <h4>Key:</h4>
            <h6>D: Digits</h6>
            <h6>A: Alphabet Characters</h6>
            <h6>S: Special Characters</h6>
            <h6>L: Length of password</h6>
        </div>
    )
}

export default Results