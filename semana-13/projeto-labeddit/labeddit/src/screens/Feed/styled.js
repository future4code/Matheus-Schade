import styled from "styled-components"
import { Color1, Color4, Color5 } from "../../constants/colors";

export const Body = styled.div`
width: 49.75vw;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

export const PostTitle = styled.input`
border-top-left-radius: 5px;
border-top-right-radius: 5px;
min-height: 2em;
border-left: 1px solid grey;
border-right: 1px solid grey;
border-top: 1px solid grey;
text-align: center;
width: 49.5vw;
margin-top: 25px;
box-shadow: 3px 3px 3px gray;
margin-bottom: -1px;
`

export const PostComment = styled.input`
width: 49.5vw;
min-height: 20vh;
text-align: center;
border-left: 1px solid grey;
border-right: 1px solid grey;
border-bottom: 1px solid grey;
border-top: none;
margin-bottom: 0px;
box-shadow: 3px 3px 3px gray;
`

export const Form = styled.form`
width: 49.75vw;
margin: 0 auto;

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