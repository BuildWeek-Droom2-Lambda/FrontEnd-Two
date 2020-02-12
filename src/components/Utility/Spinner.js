import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-center">
      <img
        className="spinner"
        src={require("../../Assets/spinner.gif")}
        alt="loading..."
      />
      <h1>You must be logged in to view the friends!</h1>
    </div>
  );
};

export default Spinner;
