import LoginForm from "@/forms/Login";
import { Grid } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Grid xs={12} sm={6} md={4}>
        <LoginForm heading="Admin Login" />
      </Grid>
    </div>
  );
};

export default Login;
