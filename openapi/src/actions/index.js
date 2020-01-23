import axios from 'axios'
import { Keccak } from 'sha3';
export const checkPassword = password => {
    return dispatch => {
        dispatch({ type: 'ENCODING_PASSWORD' })
        const hash = new Keccak(512)
        hash.update(password)
        const hashedPW = hash.digest('hex')
        const sendHash = hashedPW.substring(0, 10)
        dispatch({ type: 'SENDING_REQUEST' })
        axios.get(`https://passwords.xposedornot.com/api/v1/pass/anon/${sendHash}`)
        .then(res => {
            dispatch({ type: 'REQUEST_SUCCESS', payload: res.data.SearchPassAnon })
        })
        .catch(err => console.log(err))
    }
} 