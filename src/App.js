import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/utils/ProtectedRoute";
import FriendsList from "./Components/FriendsList";
import FriendForm from "./Components/FriendForm";
import UpdateForm from "./Components/UpdateForm";
import NoMatch from "./Components/NoMatch";

import { axiosWithAuth } from "./Components/utils/axiosWithAuth";

import "./App.css";

// This component is handling all of the Navigation and routing for the application. It's sole purpose is to set the URL paths and render components based upon URL input.

const App = () => {
  const [friends, setFriends] = useState([]);

  const [isLoading, setIsLoading] = useState();
  \;

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then(setIsLoading(true))
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
        setIsLoading(false);
        console.log(isLoading);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <FriendsContext.Provider value={{ friends, isLoading, setFriends }}>
      <div className="App">
        <Header />
        <Switch>
          <ProtectedRoute exact path="/protected" component={FriendsList} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/add-friend">
            <FriendForm setFriends={setFriends} />
          </Route>
          <Route
            path="/edit-friend/:id"
            render={props => (
              <UpdateForm
                {...props}
                friends={friends}
                setFriends={setFriends}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </FriendsContext.Provider>
  );
};

export default App;
