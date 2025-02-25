import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import authService from "../services/authService";

function RegisterForm() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authService.register(user);
    alert("Registration successful!");
  };

  return (
    <Container>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
}

export default RegisterForm;
