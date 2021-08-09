import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'

//Components //Comments
export const HeartContainer = styled.div`
    cursor: pointer;
    color: white;
`
export const ContainerVotes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    max-width: 18rem;
    align-items: center;
    margin-bottom: 20px;
`
export const CreateCommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    max-width: 18rem;
    align-items: center;
    margin-bottom: 20px;

    button {
        background-color: #2e2d2b;
        color: white;

        :hover {
            background-color: #D64309;
        
        }
    }
`

//Header
export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #8F0002;

    button {
        background-color: #2e2d2b;
        color: white;

        :hover {
            background-color: #D64309;
        
        }
    }
`

//Loading
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`

//Post
export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
`
export const ContainerButton = styled.div`
    width:10rem;

    Button {
        background-color: #8F0002;
        color: white;

        :hover {
            background-color: #D64309;
        }
    }
`

//Pagination
export const PaginationContainer = styled.div`
	display: inline;
	justify-content: space-evenly;
    
    button {
        background-color: #8F0002;
        margin: 4px;
        width: 30px;
        border-radius: 15px;

        :hover{
            cursor: pointer;
            background-color: #D64309;
        }
    }
    
`

//Icons
export const IconContainer = styled.div`
	display: flex;
`
export const IconImage = styled.img`
	margin-right: 5px;
`
