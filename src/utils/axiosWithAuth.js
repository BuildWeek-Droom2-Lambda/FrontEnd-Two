import axios from "axios";

export const axiosWithAuth = () => {
  //  Get token from localStorage
  const tokenFromBrowser = localStorage.getItem("token");
  //  Function that checks to see if the token exists
  const token = tokenFromBrowser ? tokenFromBrowser : false;
  //  Axios method that appends token to request header
  const axiosInstance = axios.create({
    baseURL: "https://droom-node-server.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
  return axiosInstance;
};
