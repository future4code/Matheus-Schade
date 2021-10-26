import React, { useContext } from "react"
import { Head, RightButton, LeftButton } from "./styled";
import { LogoIcon } from "./styled"
import { goToFeed } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";


const Header = () => {
  const history = useHistory()

  const { rightButtonText, rightButtonAction } = useContext(GlobalContext)


  return (

    <Head>

      <LeftButton>
        Left Button
      </LeftButton>

      <h1 onClick={() => goToFeed(history)}>labEddit <LogoIcon /></h1>

      <RightButton onClick={() => rightButtonAction(history)}>
        {rightButtonText}
      </RightButton>

    </Head>
  )
}

export default Header;
