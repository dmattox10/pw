import React from 'react'
import { connect } from 'react-redux'
import { Container, Jumbotron } from 'reactstrap'
import Check from './Check'
import Empty from './Empty'
import Loading from './Loading'
import Results from './Results'
import Success from './Success'

const XoN = props => {
    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <div className='spacerHalf'></div>
                <div className='center'>
                    <h3>Has your password been compromised by hackers?</h3>
                </div>
            </Jumbotron>
            {!props.results && !props.isLoading && <Check />}
                {!props.results && props.isLoading && <Loading />}
                {props.results ? <Results results={ props.results }/> : <Success />}
            <div className='center'>
                <p>This site does NOT send your password. It works by encrypting your password using Keccak-512 hashing, which results in a hashed string 128 characters long, and then we send the first ten characters of the hash only. If you don't trust this site, try searching for "password" or "123456" just for fun!</p>
            </div>
        </Container>            
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        results: state.results,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(XoN)