import React from 'react'
import Table from 'react-bootstrap/Table'

export const Results = (props) => {
    const {count, characters } = props
    const resultsArray = characters.split(',')
    const stringsObject = {
        D: 'Digits:',
        A: 'Alphabet Characters:',
        S: 'Special Characters:',
        L: 'Length of password:'
    }
    return(
        <div>
            <h4>This password appears in the database {count} times as a result of data breaches where data has been made public.</h4>
            <Table>
                <tbody>
                    {
                        resultsArray.map((entry) => {
                            let [a, b] = entry.split(':')
                            return(
                                <tr>
                                    <td>
                                        {stringsObject[a]}
                                    </td>
                                    <td>
                                        {b}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}