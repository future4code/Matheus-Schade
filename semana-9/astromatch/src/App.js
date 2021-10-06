import React, { useState, useEffect } from "react"
import styled, {createGlobalStyle} from "styled-components"
import Candidatos from "./telas/Candidatos"
import Matches from "./telas/Matches"


const TelaApp = styled.div`
display: flex;
flex-direction: column;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`


const App = () => {
  const [currentPage, setCurrentPage] = useState("Candidatos")

  const changePage = (pageName) => {
    setCurrentPage(pageName)
  }

  const choosePage = () => {
    switch (currentPage) {
      case "Candidatos":
        return <Candidatos changePage={changePage} />
      case "Matches":
        return <Matches changePage={changePage} />
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