import React from "react"
import { GlobalStyle } from "./GlobalStyle"
import Router from "./routes/Router";
import { Body } from "./styled"
import GlobalState from "./contexts/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Body>
        <GlobalStyle />
        <Router />
      </Body>
    </GlobalState>
  )
}

export default App;
