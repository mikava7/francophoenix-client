import axios from "axios";

const instance = axios.create({
  // baseURL: "https://frang.ge",
  // baseURL: "https://francophoenix.onrender.com",

  baseURL: "http://localhost:5500",
});

export default instance;
// baseURL: "https://francophoenix-ccc87763f637.herokuapp.com", // Update with your Heroku backend URL
///////////////
