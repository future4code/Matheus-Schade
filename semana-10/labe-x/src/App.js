import React from "react"
import { Router } from "./route/Router"
import { GlobalStyle } from './GlobalStyle.js'

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App;
