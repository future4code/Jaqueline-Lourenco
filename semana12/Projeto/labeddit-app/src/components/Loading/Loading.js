import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LoadingContainer } from '../styled'

export default function Loading () {
  return (
    <LoadingContainer>
      <iframe src="https://giphy.com/embed/l3nWhI38IWDofyDrW" 
        width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen>
      </iframe>
    </LoadingContainer>
  )
}