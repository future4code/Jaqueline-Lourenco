import { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const RequestComments =(initialData,id)=>{
    const [comments, setComments] = useState(initialData)
    
    useLayoutEffect(() => {
    axios
    .get(`${BASE_URL}/posts/${id}/comments`, {headers: {
        Authorization: localStorage.getItem('token')}
    })
    .then((response)=>{
        setComments(response.data)
    })
    .catch((erro)=>{
        alert(erro.response.message)
    })
    },[id])

    return (comments)
}
