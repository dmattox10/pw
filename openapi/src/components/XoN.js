import React from 'react'
import { connect } from 'react-redux'
import { Container, Jumbotron } from 'reactstrap'
import Check from './Check'
import Empty from './Empty'
import Loading from './Loading'
import Results from './Results'

const XoN = props => {
    return (
        <Container>
            <Jumbotron>
                <div className='spacer'></div>
                {!props.results && !props.isLoading && <Check />}
                {!props.results && props.isLoading && <Loading />}
                {props.results ? <Results count={ props.results.count }/> : <Empty />}
            </Jumbotron>
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