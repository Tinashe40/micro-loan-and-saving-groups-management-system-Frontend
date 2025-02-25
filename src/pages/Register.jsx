import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Container, Typography } from "@mui/material";

function Register() {
  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <RegisterForm />
    </Container>
  );
}

export default Register;
