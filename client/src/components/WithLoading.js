import React from 'react'
import { Loading } from './Loading'

export const WithLoading = Component => {
  return function WihLoadingComponent ({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return Loading
  }
}
