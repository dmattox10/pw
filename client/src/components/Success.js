import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'

export const Success = props => {
    const { link, compromisedStatus, greatReset } = props

    const [show, setShow] = useState(!compromisedStatus)

    const handleClose = () => {
        setShow(false)
        greatReset()
    }

    return (
        <Modal show={show} size="lg">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Congratulations!</Modal.Title>
                    <CloseButton onClick={handleClose} />
                </Modal.Header>
                    <Modal.Body>
                    <p>This password does not appear in the database! Try the link yourself, it's literally not found! Keep it safe!</p>
                    <a href={link} target='blank'>{link}</a>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}