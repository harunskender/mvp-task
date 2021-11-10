import React from 'react'
import PrivateApp from './PrivateApp'
import PublicApp from './PublicApp'

function App() {
  const isAuthorized: boolean = true
  return isAuthorized ? <PrivateApp /> : <PublicApp />
}

export default App
