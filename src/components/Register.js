import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
// import cookie from 'cookie'
import axios from "axios";

function Register() {
  // console.log(props)
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    teamname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const newState = { ...state };
    newState[e.target.name] = e.target.value;
    setState(newState);
  };
  console.log(state);

  const handleRegister = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:4001/auth/register`, {
    // axios.post(`/auth/register`, {
      userName: state.username,
      teamName: state.teamname,
      email: state.email,
      password: state.password,
    });

    navigate("/login");
  };

  return (
    <div  style={{minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="App">
      <Container maxWidth="sm">
        <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}} className="register-form" onSubmit={handleRegister}>
          <TextField
            required
            onChange={handleChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleChange}
            value={state.teamname}
            name="teamname"
            label="Teamname"
            type="text"
          />
          <TextField
            required
            onChange={handleChange}
            value={state.email}
            name="email"
            label="Email"
            type="text"
          />
          <TextField
            required
            onChange={handleChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="register-button"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Register;
