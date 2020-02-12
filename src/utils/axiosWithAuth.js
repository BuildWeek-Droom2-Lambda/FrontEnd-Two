import axios from "axios";

export const axiosWithAuth = () => {
  //  Get token from localStorage
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
