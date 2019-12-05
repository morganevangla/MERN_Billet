import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";

export class Login extends React.Component {
  state = {
    login: "",
    password: ""
  };
  send = async () => {
    const { login, password } = this.state;
    if (!login || login.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(login, password);
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
    const { login, password } = this.state;
    return (
      <div className="Login">
        <FormGroup controlId="login">
          <FormLabel>Login</FormLabel>
          <FormControl
            autoFocus
            type="text"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
            name="password"
          />
        </FormGroup>
        <Button onClick={this.send} block type="submit">
          Connexion
        </Button>
      </div>
    );
  }
}