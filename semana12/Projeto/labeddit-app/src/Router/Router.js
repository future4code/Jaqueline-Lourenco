import React from 'react'
import { Switch , Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SingUpPage/SingUpPage'
import PostPage from '../pages/PostPage/PostPage'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export default function Router (/* {setRightButtonText} */) {
    return (
        <Switch>
            <Route exact path="/">
                <PostsPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage />
           </Route>
            <Route exact path="detalhes-post/:id">
                <PostDetailPage />
            </Route> 
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}