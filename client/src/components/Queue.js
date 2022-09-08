import React, { useContext } from 'react'
import { xonContext } from '../contexts/xonContext'
import Table from 'react-bootstrap/Table'

export const Queue = (props) => {

    const { queue } = useContext(xonContext)

    return (
        <Table>
            <tbody>
                {
                    queue.map((entry) => {
                        return(
                            <tr>
                                <td>
                                    {entry}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}