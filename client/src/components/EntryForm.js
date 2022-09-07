import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { xonContext } from '../contexts/xonContext'

export const EntryForm = (props) => {

    const { fire } = useContext(xonContext)

    const [password, updatePassword] = useState('password')

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        fire(password)
    }

    const passwordChangeHandler = (e) => {
        updatePassword(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password to test</Form.Label>
                <Form.Control type="password" value={password} onChange={passwordChangeHandler} placeholder="P4ssW0rd" required/>
                <Form.Text className="text-muted">
                This information is never sent, does not leave your computer.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}