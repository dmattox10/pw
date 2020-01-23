import React from 'react'
import { connect } from 'react-redux'

import { checkPassword } from '../actions'

const Check = props => {
    return (
        <div>
            <form>
                <input className='input' type='password' placeholder='password' />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { checkPassword })(Check)