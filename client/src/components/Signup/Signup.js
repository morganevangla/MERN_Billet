import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";

export class Signup extends React.Component {
  state = {
      login: [],
    email: [],
    password: [],
    cpassword: []
  };

  
  send = async () => {
    const { login, email, password, cpassword } = this.state;
    if (!email || email.length === 0) return;
    if (!login || login.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ login, email, password });
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
     
    const {user, email, password, cpassword } = this.state;
     
    return (
        
      <div className="Login">
              <FormGroup controlId="login">
          <FormLabel>Login</FormLabel>
          <FormControl
            autoFocus
            type="text"
            name="login"
            value={user}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            name = "password"
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="cpassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button onClick={this.send} block type="submit">
          Inscription
        </Button>
      </div>
    );
  }
}