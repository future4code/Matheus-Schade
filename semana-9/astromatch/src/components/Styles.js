import styled from "styled-components"

export const Head = styled.div`
background-color: whitesmoke;
height: 6%;
display: flex;
width: 99%;
align-items: center;
justify-content: space-between;
border-radius: 10px 10px 0px 0px;
position: absolute;
border: 1px 1px 1px 1px solid blakc;


button {
  height: 25px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  font-weight: bold;
  margin: 0 10px;
  color: black;
  border: 0.5px solid black;

  @media (min-width: 401px) and (max-width: 800px) {
    height: 40px;
    font-size: 18px;
    }

    @media (min-width: 801px) and (max-width: 1100px) {
    height: 60px;
    width: 12vw;
    display: flex;
    justify-content: center;
    font-size: 22px;
    }

    :hover {
    transform: scale(1.2);
    color: #bf0b08;
  }

  p {
    margin-right: 10px;
    font-weight: bold;
    
  }
}

h3 {
    font-size: 24px;
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 401px) and (max-width: 800px) {
    font-size: 28px;
    }

    @media (min-width: 801px) and (max-width: 1100px) {
    font-size: 35px;
    }
    :hover {
      color: #bf0b08;
    }
}
`

export const Base = styled.div`
margin: 0px 0px;
padding: 0px 0px;
`