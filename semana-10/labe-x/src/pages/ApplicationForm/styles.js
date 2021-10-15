import styled from "styled-components"

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 100vw;
min-height: 95vh;

input {
    margin: 5px 0px;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid grey;
    width: 33%;
}
select {
    margin: 5px 0px;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid grey;
    width: 33%;
}
button {
    margin-left: 10px ;
    margin-right: 10px ;
    margin-bottom: 5px;
}
`