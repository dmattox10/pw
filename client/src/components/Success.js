import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Success = props => {
    const { link } = props
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Congratulations!</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <p>This password does not appear in the database! Try the link yourself, it's literally not found! Keep it safe!</p>
                <a href={link} target='blank'>{link}</a>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default Success