import React from 'react'

import { Output } from './Output'
import { Success } from './Success'

export const Results = (props) => {
  const { count, characters, compromisedStatus, link, greatReset } = props

  // Switch/Case conditional rendering
  const renderSwitch = () => {
    switch (compromisedStatus) {
      case (compromisedStatus === true):
        return <Output count={count} characters={characters} />
      case (!compromisedStatus):
        return <Success link={link} compromisedStatus={compromisedStatus} greatReset={greatReset} />
      default:
        // return <Success link={link} compromisedStatus={compromisedStatus} greatReset={greatReset} />
        return <Output count={count} characters={characters} />
    }
  }

  return (
    <div>
      {
            renderSwitch()
            }
    </div>
  )
}
