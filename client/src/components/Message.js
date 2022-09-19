import React from 'react'
import Card from 'react-bootstrap/Card'

export const Message = (props) => {
  return (
    <Card bg='info' text='white'>
      <Card.Body>
        <Card.Title>Instructions</Card.Title>
        <Card.Text>
          Use any string of text, to test this software, and feel free to examine it's source code.
          The text entered into the form never leaves your computer.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
