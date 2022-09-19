import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { xonContext } from './contexts/xonContext'
import { useApi } from './hooks/useApi'
import { useWindowSize } from './hooks/useWindowSize'

import { Header } from './components/Header'
import { EntryForm } from './components/EntryForm'
import { WithLoading } from './components/WithLoading'
import { Results } from './components/Results'
import { Message } from './components/Message'
import { Queue } from './components/Queue'

// Declare HOC
const ResultsWithLoading = WithLoading(Results)

function App() {

  const [queue, loading, compromisedStatus, count, characters, fire, link, greatReset] = useApi()

  const size = useWindowSize()
  const styles = {
    height: size.height
  }

  // If/Else conditional rendering
  const renderSwitch = () => {
    if(loading !== null) {
      // Use HOC at the top level, with prop-drilling to the end.
      return <ResultsWithLoading isLoading={loading} count={count} characters={characters} compromisedStatus={compromisedStatus} link={link} greatReset={greatReset} />
    }
    return <Message />
  }
  // Nothing below here uses prop-drilling, all use global state through context
  return (
    <div className="App" style={styles}>
      <xonContext.Provider value={{queue, loading, compromisedStatus, count, characters, fire, link, greatReset}} >
        <Container fluid="md">
          <Header />
          <Row>
            <Col xs={12} lg={6}>
              <EntryForm />
            </Col>
            <Col xs={12} lg={6}>
              {
                renderSwitch()
              }
            </Col>
          </Row>
          <Row style={{overflowX:'auto'}}>
            <Col xs={12} lg={12}>
              { queue.length > 0 &&
                <Queue />
              }
            </Col>
          </Row>
          <h6>Created by Daniel Mattox, source code available <a href='https://github.com/dmattox10/pw'>here</a></h6>
        </Container>
      </xonContext.Provider>
    </div>
  )
}

export default App
