import styled from "styled-components"
import { Color1, Color5 } from "../../constants/colors"
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs"

export const Body = styled.div`
margin-top: 13vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

export const Date = styled.p`
margin-right: 12px;
color: ${Color5};
font-size: 10px;
`

export const UpArrow = styled(BsArrowUpCircleFill)`
cursor: pointer;
color: ${Color1};
`

export const DownArrow = styled(BsArrowDownCircleFill)`
cursor: pointer;
color: ${Color1};
`

export const CardArea = styled.div`
width: 50.2vw;
min-height: 10vh;
border: none;
display: flex;
flex-direction: column;
margin: 0 auto;
margin-top: 2vh;
margin-bottom: 2vh;
border-radius: 5px;
box-shadow: 3px 3px 3px gray;
overflow: hidden;
background-color: ${Color5};
`

export const UserName = styled.div`
width: 49.8vw;
height: 3vh;
border-bottom: 1px solid grey;
padding-left: 8px;
display: flex;
align-items: center;
justify-content: space-between;
background: ${Color1};
border-top-left-radius: 5px;
border-top-right-radius: 5px;
color: ${Color5};
`

export const Text = styled.div`
width: 90%;
min-height: 6vh;
margin-left: 12px;

`

export const ComentsAndEnjoys = styled.div`
width: 100%;
height: 3vh;
border-top: 1px solid grey;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Coments = styled.div`
max-width: 50%;
margin-right: 8px;
`

export const Enjoy = styled.div`
max-width: 45%;
margin-left: 8px;
display: flex;
align-items: center;
`

export const CountEnjoys = styled.p`
font-weight: bold;
margin: 0 10px;
`

export const DetailButton = styled.div`
margin-right: 1.9px;
width: 8vw;
font-size: 12px;
height: 100%;
border: none;
border-top-right-radius: 5px;
background-color: ${Color1};
text-align: center;
overflow-y: auto;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
color: ${Color5};
cursor: pointer;
`

export const CommentForm = styled.form`
width: 50.2vw;
height: 19vh;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 3px 3px 3px gray;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
margin: 0 auto;
input {
    width: 100%;
    height: 15vh;
    text-align: center;
    margin-bottom: 0px;
    outline: none; 
    border: none;
    background-color: ${Color5};
}
button {
    width: 50.5vw;
    margin: 0 auto;
    cursor: pointer;
    height: 4vh;
    border: 1px solid ${Color1};
    cursor: pointer;
    background-color: ${Color1};
    color: white;
    font-weight: bold;
    outline: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom: 1px solid ${Color1};
}
`