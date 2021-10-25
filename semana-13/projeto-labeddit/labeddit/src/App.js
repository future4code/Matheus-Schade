import React from "react"
import { GlobalStyle } from "./GlobalStyle"
import Router from "./routes/Router";
import { Body } from "./styled"

const App = () => {
  return (
    <Body>
      <GlobalStyle />
      <Router />
    </Body>
  )
}

export default App;
