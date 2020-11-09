import React from "react";
import { Spinner } from "reactstrap";
import Post from "./Post";

function PostList({ posts, loadPost }) {
  return (
    <div>
      {loadPost ? (
        <Spinner type="grow" color="success" />
      ) : (
        posts.map((el) => <Post post={el} />)
      )}
    </div>
  );
}

export default PostList;
