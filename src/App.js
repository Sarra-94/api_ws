import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import Axios from "axios";
import { useEffect, useState } from "react";
import UserDetails from "./Pages/UserDetails";
import Comments from "./Pages/Comments";

function App() {
  const [users, setUsers] = useState([]);
  const [loadUsers, setLoadUsers] = useState(true);

  const getUser = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoadUsers(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home users={users} loadUsers={loadUsers} />}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/users/:id" component={UserDetails} />
        <Route path="/posts/:id" component={Comments} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
