import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, CreateCommentsContainer } from '../styled'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { comment } from '../../services/comments'

const CreateCommentsPosts = (props) => {
  const [form, onChange, clear] = useForm({ body: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitComment = (event) => {
    event.preventDefault()
    comment(form, props.id, clear, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitComment}>
      <CreateCommentsContainer>
        <InputsContainer>
          <TextField
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={'Comentário'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
          />
        </InputsContainer>
        <Button
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress /> : <>Comentar</>}
        </Button>
      </CreateCommentsContainer>
    </form>
  )
}

export default CreateCommentsPosts
