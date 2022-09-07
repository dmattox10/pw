import React from 'react';

import { xonContext } from './contexts/xonContext.js'
import { useApi } from './hooks/useApi.js';

import { WithLoading } from './components/withLoading.js';

function App() {

  const [queue, loading, compromisedStatus, count, characters, fire] = useApi()

  return (
    <div className="App">
      <xonContext.Provider value={{queue, loading, compromisedStatus, count, characters, fire}} >
        <h6>Created by Daniel Mattox, source code available <a href='https://github.com/dmattox10/pw'>here</a></h6>
      </xonContext.Provider>
    </div>
  )
}

export default App
