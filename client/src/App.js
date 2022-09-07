import React from 'react';

import { xonContext } from './contexts/xonContext.js'
import { useApi } from './hooks/useApi.js';

import WithLoading from './components/withLoading.js';

function App() {

  const [queue, loading, compromisedStatus, count, characters] = useApi()

  return (
    <div className="App">
      <xonContext.Provider value={{queue, loading, compromisedStatus, count, characters}} >
        <h6>Created by Daniel Mattox, source code available <a href='https://github.com/dmattox10-web26/React-Redux-App'>here</a></h6>
      </xonContext.Provider>
    </div>
  );
}

export default App;
