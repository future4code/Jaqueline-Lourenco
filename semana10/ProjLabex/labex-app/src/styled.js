import styled from 'styled-components'

export const GlobalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;

    img {
        width: 60px;
        height: 60px;
        border-radius: 16px;
    }
`
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
