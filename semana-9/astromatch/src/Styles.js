import styled, { createGlobalStyle } from "styled-components"

export const TelaApp = styled.div`
display: flex;
flex-direction: column;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 300px;
height: 550px;

@media(max-width: 400px) {
  height: 100vh;
  width: 100vw;
  }

  @media (min-width: 401px) and (max-width: 2100px) {
    height: 100vh;
    width: 100vw;
  }


`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px 0px;
    padding: 0px 0px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
  }
  
  * {
    box-sizing: border-box;
  }
`