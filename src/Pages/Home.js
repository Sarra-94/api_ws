import React from "react";
import UserList from "../Components/UserList";

function Home({ users, loadUsers }) {
  return (
    <div>
      <UserList users={users} loadUsers={loadUsers} />{" "}
    </div>
  );
}

export default Home;
