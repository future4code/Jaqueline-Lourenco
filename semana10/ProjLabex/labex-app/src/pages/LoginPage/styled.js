import styled from 'styled-components'

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 80vh;
    border: 10px solid black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: auto ;
    border-radius: 10px;

    button {
        margin: 10px;
    }
`