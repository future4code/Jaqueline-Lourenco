import styled from 'styled-components'

export const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  
  :hover {
    background-color: red;
    cursor: pointer;
  }
` 

export const MatchImage = styled.img`
  width: 40px;
  height: 40px;
  border: solid 0.5px black;
  border-radius: 30px;
  margin: 10px;

  :hover {
    background-color: red;
    cursor: pointer;
  }
`