import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Label, Button, Row, Col } from 'reactstrap'
import { checkPassword } from '../actions'

const Check = props => {
    
    const [password, updatePassword] = useState('password')

    const handleChange = e => {
        updatePassword(e.target.value)
    }

    return (
       <Form>
           <Label for='password'>Password</Label>
           <Row>
               <Col xs='10'>
                <Input htlmfor='password'
                        name='password'
                        type='password'
                        id='password'
                        value={ password }
                        onChange={ handleChange }
                    />
               </Col>
               <Col xs='2'>
               <Button onClick={ () => props.checkPassword(password)}>Check!</Button>
               </Col>
           </Row>
           
            
       </Form>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { checkPassword })(Check)