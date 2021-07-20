import styled from "styled-components"

export const MapTrip = styled.div`
  width: 400px;
  height: 100vh;
  margin-top: 200px;
  margin: auto;
  text-align: center;
  color: white;
`

export const CardTrip = styled.div`
  border: 5px solid red;
  padding: 25px;
  margin-bottom: 16px;
  background-color: black;

  button {
        cursor: pointer;
        background-color: red;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        outline: none;

        :hover {
            background-color: white;
        }
    }
`