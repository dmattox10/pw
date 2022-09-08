import React, { useContext } from 'react'
import { xonContext } from '../contexts/xonContext'
import Table from 'react-bootstrap/Table'

export const Queue = (props) => {

    const { queue } = useContext(xonContext)

    return (
        <Table>
            <tbody>
                {
                    queue.map((entry, i) => {
                        return(
                            <tr key={i}>
                                <td>
                                    {entry.messageText}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}