import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:4242";


export default {



  login: function(login, password) {

    
    return axios.post(
      `${burl}/user/login`,
      {
        login ,
        password 
      }
    )
    .then(res => console.log(res.data));
  },
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers })
    .then(res => console.log(res.data));
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};