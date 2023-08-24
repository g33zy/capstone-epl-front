import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";
import axios from "axios";

function Login(props) {
  console.log(props);
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const newState = { ...state };
    newState[e.target.name] = e.target.value;
    setState(newState);
  };
  console.log(state);

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("https://capstone-epl.onrender.com/auth/login", {
      email: state.email,
      password: state.password,
    })
    .then((response) => {
      console.log(response)
      document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 6000000 });
      document.cookie = cookie.serialize("token", response.data.token) 
      navigate("/dashboard");
      // look back to see where this came from console log response line 30
    })
    .catch((error) => {
      console.log(error)
      // come back later to add error message
    })

    
  };

  return (
    <div className="App" style={{minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container  maxWidth="sm" >
        <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}} className="login-form" onSubmit={handleLogin}>
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
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Login;
