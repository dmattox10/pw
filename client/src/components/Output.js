import React from 'react'
import Table from 'react-bootstrap/Table'

export const Output = (props) => {
  const { count, characters } = props
  const resultsArray = characters.split(';')
  const stringsObject = {
    D: 'Digits:',
    A: 'Alphabet Characters:',
    S: 'Special Characters:',
    L: 'Length of password:'
  }

  return (
    <div>
      <h6>This password appears in the database {count} times.</h6>
      <Table>
        <tbody>
          {
                        resultsArray.length > 0 && resultsArray.map((entry) => {
                          const [a, b] = entry.split(':')
                          return (
                            <tr key={a}>
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
