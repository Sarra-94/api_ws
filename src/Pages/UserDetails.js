import Axios from "axios";
import React, { useEffect, useState } from "react";
import PostList from "../Components/PostList";
import SingleUser from "../Components/SingleUser";

function UserDetails(props) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [loadUser, setLoadUser] = useState(true);
  const [loadPost, setLoadPost] = useState(true);
  const { id } = props.match.params;
  const getUserById = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoadUser(false);
      })
      .catch((err) => console.log(err));
  };
  const getPosts = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => {
        setPosts(res.data);
        setLoadPost(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUserById();
    getPosts();
  }, []);
  return (
    <div>
      <SingleUser user={user} loadUser={loadUser} />
      <PostList posts={posts} loadPost={loadPost} />
    </div>
  );
}

export default UserDetails;
