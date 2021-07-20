import styled from "styled-components"

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding: 100px;
    color: #04029E;
        
    img {
    border-radius: 16px;
    margin: 10px;
    }

    button {
        cursor: pointer;
        margin: 10px ;
        border-radius: 30px;
        width: 100px;
        height: 80px;
        background-color: #9E0204;
        color: #02779E;

        :hover {
            background-color: black;
        }
    }
`