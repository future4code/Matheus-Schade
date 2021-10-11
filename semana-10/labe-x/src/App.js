import React, { useState } from "react"
import Home from "./pages/Home/Home.js"
import Viagens from "./pages/Viagens/Viagens.js"
import Admin from "./pages/Admin/Admin.js"

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home")

  const changePage = (pageName) => {
    setCurrentPage(pageName)
  }

  const choosePage = () => {
    switch (currentPage) {
      case "Home":
        return <Home
          changePage={changePage}
          currentPage={currentPage} />
      case "Admin":
        return <Admin
          changePage={changePage}
          currentPage={currentPage} />
      case "Viagens":
        return <Viagens
          changePage={changePage}
          currentPage={currentPage} />
      default:
        return <Home
          changePage={changePage}
          currentPage={currentPage} />
    }
  }

  return (
    <div>
      {choosePage()}
    </div>
  )
}

export default App;
