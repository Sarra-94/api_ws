import Axios from "axios";
import React, { useEffect, useState } from "react";
import CommentList from "../Components/CommentList";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const { id } = props.match.params;
  const { title, body } = props.location.state;
  const getComments = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
      <CommentList comments={comments} />
    </div>
  );
}

export default Comments;
