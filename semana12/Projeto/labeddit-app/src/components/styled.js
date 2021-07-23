import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'

//Components //Comments
export const HeartContainer = styled.div`
    cursor: pointer;
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
    max-width: 40rem;
    align-items: center;
    margin-bottom: 20px;
`
export const CreateCommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 40rem;
    align-items: center;
    margin-bottom: 20px;
`

//Header
export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
   /* min-width: 60%; */
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
`
export const ContainerButton = styled.div`
width:10rem;
`

//Pagination
export const PaginationContainer = styled.div`
	display: inline;
	justify-content: space-evenly;
`

//Icons
export const IconContainer = styled.div`
	display: flex;
`
export const IconImage = styled.img`
	margin-right: 5px;
`
