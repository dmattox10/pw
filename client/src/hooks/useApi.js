import { useEffect, useState } from 'react'
import { Keccak } from 'sha3'
import axios from 'axios'


export const useApi = () => {

    const [queue, updateQueue] = useState([])
    const [count, updateCount] = useState('')
    const [characters, updateChar] = useState('')
    const [compromisedStatus, updateCompromisedStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const enqueue = (messageText) => {
        const startTime = new Date(Date.now())
        const message = {
            startTime: startTime,
            messageText: messageText
        }
        updateQueue(queue => [...queue, message])
    }

    useEffect(() => {
        const displayTime = 10000
        const currentTime = new Date(Date.now())
        const queueCopy = [...queue]
        queueCopy.forEach(message => 
            updateQueue(queue => queue.filter(message => message.startTime <= displayTime + currentTime))
        )
    }, [])

    const generateHash = () => {
        enqueue('Generating hash.')
        const hash = new Keccak(512)
        enqueue(`Current hash is ${hash}`)
        return hash
    }

    const updateHash = (hash, passwordString) => {
        enqueue('Updating Hash to contain the text entered.')
        hash.update(passwordString)
        enqueue(`Hash containing encrypted text is now ${hash}`)
        return hash
    }

    const convertHash = (updatedHash) => {
        const convertedHash = updatedHash.digest('hex')
        enqueue(`Hash converted to hexadecimal is ${hashedPW}`)
        return convertedHash
    }

    const trimHash = (hashedPW) => {
        const trimmedHash = hashedPW.substring(0, 10)
        enqueue(`The hash must be trimmed to 10 characters, now ${trimmedHash}`)
        return trimmedHash
    }

    const processResponse = (SearchPassAnon) => {
        enqueue(`Processing server response.`)
        updateChar(SearchPassAnon.char)
        updateCount(SearchPassAnon.count)
        updateCompromisedStatus(true)
    }

    const sendHash = (finalHash) => {
        try {
            enqueue(`Sending final hash ${finalHash}`)
            return axios.get(`https://passwords.xposedornot.com/api/v1/pass/anon/${finalHash}`)
        }

        catch (e) {
            console.error(error)
            setLoading(false)
        } 

        finally {
            setLoading(false)
        }
    }

    const fire = async (passwordString) => {
        setLoading(true)
        let hash = generateHash()
        const updatedHash = updateHash(hash, passwordString)
        const convertedHash = convertHash(updatedHash)
        const trimmedHash = trimHash(convertedHash)
        const response = await sendHash(trimmedHash)
        if (response.data.SearchPassAnon) { // This is the object containing info if the password exists
            enqueue(`Server sent response, match founnd.`)
            processResponse(response.data.SearchPassAnon)
        } else {
            enqueue(`Server sent response, congratulations!`)
            updateCompromisedStatus(false)
        }
    }

    return [queue, loading, compromisedStatus, count, characters, fire]
}