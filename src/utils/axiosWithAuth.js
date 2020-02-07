import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://droom-node-server.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
