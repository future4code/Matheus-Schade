import React, { useState } from "react"
import Candidatos from "./telas/Candidatos/Candidatos"
import Matches from "./telas/Matches/Matches"
import { TelaApp, GlobalStyle, } from "./Styles"


const App = () => {
  const [currentPage, setCurrentPage] = useState("Candidatos")

  const changePage = (pageName) => {
    setCurrentPage(pageName)
  }

  const choosePage = () => {
    switch (currentPage) {
      case "Candidatos":
        return <Candidatos
          changePage={changePage}
          currentPage={currentPage}
        />
      case "Matches":
        return <Matches
          changePage={changePage}
          currentPage={currentPage} />
      default:
        return alert("Houve um erro. Tente novamente mais tarde!");
    }
  }

  return (
    <TelaApp>
      <GlobalStyle />
      {choosePage()}
    </TelaApp>
  )
}

export default App