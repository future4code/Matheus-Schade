import styled from "styled-components"
import { Color1, Color5 } from "../../constants/colors"
import { FaUserFriends } from "react-icons/fa"

export const Head = styled.div`
width: 100vw;
height: 10vh;
background-color: ${Color1};
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
top: 0px;
box-shadow: 3px 3px 3px gray;
h1{
    color: ${Color5};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
}
`
export const LogoIcon = styled(FaUserFriends)`
margin-left: 12px;
margin-top: 4px;
color: ${Color5};
cursor: pointer;
`

export const LeftButton = styled.button`
margin-left: 3vw;
height: 2.4em;
width: 12vw;
color: ${Color1};
border: none;
font-size: 20px;
background-color: ${Color1};
`

export const RightButton = styled.button`
margin-right: 3vw;
height: 2.4em;
width: 12vw;
border: none;
font-size: 20px;
cursor: pointer;
color: ${Color5};
background-color: ${Color1};
`