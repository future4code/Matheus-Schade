import React, { useContext } from "react"
import { Head, RightButton, LeftButton, Home3, LogOutOutline } from "./styled";
import { LogoIcon } from "./styled"
import { goToFeed } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const history = useHistory()

  const { rightButtonText, rightButtonAction } = useContext(GlobalContext)


  return (

    <Head>

      <LeftButton onClick={() => goToFeed(history)}>
        HOME <Home3 />
      </LeftButton>

      <h1>labEddit <LogoIcon /></h1>

      <RightButton onClick={() => rightButtonAction(history)}>
        {rightButtonText} <LogOutOutline />
      </RightButton>

    </Head>
  )
}

export default Header;
