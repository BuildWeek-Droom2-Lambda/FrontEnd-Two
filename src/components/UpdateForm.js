import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

import { axiosWithAuth } from "./utils/axiosWithAuth";

// Set schema for initializing an update request.
const initialFriend = {
  id: null,
  name: "",
  age: "",
  email: ""
};

const UpdateForm = props => {
  // Setting the initialFriend variable to state
  const [friend, setFriend] = useState(initialFriend);
  console.log(friend);

  // Getting the ID of the currently selected friend from URL parameters
  const { id } = useParams();
  console.log(id);

  const history = useHistory();

  // This useEffect call searches through the friends array to find the friend who's id matches the id passed into the component on URL params. When it finds the correct friend, it assigns that friend to state.
  useEffect(() => {
    const editingFriend = props.friends.find(
      friend => friend.id === Number(id)
    );

    if (editingFriend) {
      setFriend(editingFriend);
    }
  }, [id, props.friends]);

  // Calling the useHistory hook to replace using WithRouter HOC - Gives access to History, Location, and Match props.
  // let history = useHistory();
  // console.log(history);

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    setFriend({
      ...friend,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    updateFriend(id, friend);
  };

  // Create a .PUT request on form submission
  const updateFriend = (id, friend) => {
    axiosWithAuth()
      .put(`/api/friends/${id}`, friend)
      .then(response => {
        console.log("PUT request success! payload: ", response.data);
        props.setFriends(response.data);
      })
      .then(history.push("/protected"))
      .catch(err => console.log(err));
  };
  return (
    <div className="update-form">
      <h2>Update Friend</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="update-input"
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Name"
          value={friend.name}
        />

        <input
          className="update-input"
          type="number"
          name="age"
          onChange={changeHandler}
          placeholder="Age"
          value={friend.age}
        />

        <input
          className="update-input"
          type="string"
          name="email"
          onChange={changeHandler}
          placeholder="Email"
          value={friend.email}
        />

        <button className="md-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
