import styled from 'styled-components';

export const Image = styled.img`
  width: 110px;
  height: 140px;
  border: 0.3px solid black;
  margin-top: 10px;
  display: block;
  margin: 20px auto 20px auto; 
  box-shadow: 0px 3px 34px -3px red;
`
export const Container = styled.div`
    height: 200px;
    margin-top: 30px;
    color: white;
`
export const Info = styled.p`
    text-align: center;

`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 50px;
    margin-top: 50px;
`
export const Icons = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
      :hover {
        transform: scale(1.5);
      }
      :active {
        transform: scale(3);
        transition: 0.5s;
      }
`