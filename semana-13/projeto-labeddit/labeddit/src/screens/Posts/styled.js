import styled from "styled-components"
import { Color1, Color5 } from "../../constants/colors"
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs"

export const Date = styled.p`
margin-right: 10px;
color: gray;
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
width: 50vw;
min-height: 10vh;
border: 1px solid grey;
display: flex;
flex-direction: column;
margin: 0 auto;
margin-top: 3vh;
margin-bottom: 2vh;
border-radius: 5px;
border-top-right-radius: 7px;
box-shadow: 3px 3px 3px gray;
`

export const UserName = styled.div`
width: 49.5vw;
height: 3vh;
border-bottom: 1px solid grey;
padding-left: 8px;
display: flex;
align-items: center;
justify-content: space-between;
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
cursor: pointer;
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
width: 49.75vw;
margin: 0 auto;
input {
    width: 49.5vw;
    min-height: 20vh;
    text-align: center;
    margin-top: 25px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid grey;
    margin-bottom: 0px;
    box-shadow: 3px 3px 3px gray;
}
button {
    width: 49.9vw;
    margin: 0 auto;
    cursor: pointer;
    height: 2.4em;
    margin-top: -2.5px;
    border: 1px solid ${Color1};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    background-color: ${Color1};
    color: white;
    box-shadow: 3px 3px 3px gray;
    font-weight: bold;
}
`