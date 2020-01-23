import axios from 'axios'
const createKeccakHash = require('keccak')

export const checkPassword = password => {
    return dispatch => {
        dispatch({ type: 'ENCODING_PASSWORD' })
        const hashedPW = createKeccakHash('keccak512').update(password)
        const sendHash = hashedPW.substr(0, 10)
        dispatch({ type: 'SENDING_REQUEST' })
        axios.get(`https://passwords.xposedornot.com/api/v1/pass/anon/${sendHash}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
} 