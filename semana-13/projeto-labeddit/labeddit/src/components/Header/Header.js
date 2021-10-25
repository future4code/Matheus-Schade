import React from "react"
import { Head, RightButton, LeftButton } from "./styled";
import { LogoIcon } from "./styled"
import { goToFeed } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"


const Header = () => {
  const history = useHistory()
  return (

    <Head>

      <LeftButton>
        Left Button
      </LeftButton>

      <h1 onClick={() => goToFeed(history)}>labEddit  <LogoIcon /></h1>

      <RightButton>
        Right Button
      </RightButton>

    </Head>
  )
}

export default Header;
