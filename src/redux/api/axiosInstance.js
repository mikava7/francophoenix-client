import axios from "axios";

const instance = axios.create({
  baseURL: "https://francophoenix.onrender.com/",
});

export default instance;
// baseURL: "https://francophoenix-ccc87763f637.herokuapp.com", // Update with your Heroku backend URL
