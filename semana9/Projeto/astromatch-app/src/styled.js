import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 25vw;
  height: 90vh;
  background: black;
  border: 10px solid red;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto ;
  border-radius: 16px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`
export const IconsApp = styled.img`
    width: 45px;
    height: 45px;
    cursor: pointer;
    margin: 20px;
    border-radius: 20px;

      :hover {
        transform: scale(1.5);
      }
      :active {
        transform: scale(3);
        transition: 0.5s;
      }
`
export const Logo = styled.img`
  width: 80px;
  height: 60px; 
`