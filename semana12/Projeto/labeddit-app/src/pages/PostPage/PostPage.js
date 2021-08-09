import { ContainerPost, Welcome } from "../styled";
import React, {useContext} from "react";
import PostCards from "./PostCard";
import Post from "../../components/Post/Post";
import Loading from "../../assets/download.gif";
import useProtectedPage from "../../hooks/useProtectedPage";
import Hello from "../../assets/Welcome.jpg"
import Pagination from '../../components/Pagination'
import {GlobalStateContext} from "../../Global/GlobalStateContext"

export const PostPage = () => {
  useProtectedPage();
  const {posts} = useContext(GlobalStateContext)

  const postList =
    posts &&
    posts.map((post) => {
      return (
        <PostCards
          commentCount={post.commentCount}
          voteSum={post.voteSum}
          body={post.body}
          title={post.title}
          createdAt={post.createdAt}
          username={post.username}
          id={post.id}
          userVote={post.userVote}
        />
      );
    });

  return (
    <ContainerPost>
      <Welcome src={Hello} alt="hello image" />
      <Post />
      {postList ? postList : <img src={Loading} alt="loading" />}
      <Pagination/>
    </ContainerPost>
  );
};
export default PostPage;
