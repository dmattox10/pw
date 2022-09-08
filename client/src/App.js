import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { xonContext } from './contexts/xonContext'
import { useApi } from './hooks/useApi'
import { useWindowSize } from './hooks/useWindowSize'

import { EntryForm } from './components/EntryForm'
import { WithLoading } from './components/WithLoading'
import { Results } from './components/Results'
import { Message } from './components/Message'
import { Queue } from './components/Queue'

const ResultsWithLoading = WithLoading(Results)

function App() {

  const [queue, loading, compromisedStatus, count, characters, fire] = useApi()
  const size = useWindowSize()

  const renderSwitch = () => {
    if(loading !== null) {
      return <ResultsWithLoading isLoading={loading} count={count} characters={characters} />
    }
    return <Message />
  }

  const styles = {
    height: size.height
  }

  return (
    <div className="App" styles={styles}>
      <xonContext.Provider value={{queue, loading, compromisedStatus, count, characters, fire}} >
        <Container fluid="md">
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
          <Row>
            <Col xs={12}>
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
