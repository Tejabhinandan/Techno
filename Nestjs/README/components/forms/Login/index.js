import ButtonComponent from "@/atoms/ButtonComponent";
import InputBoxComponent from "@/atoms/InputBoxComponent";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function LoginForm({
  heading = "Login",
  btnText = "Login",
  width = "w-100",
}) {
  return (
    // <div className={`d-flex justify-content-center border rounded${width}  `}>
    <Paper className={`p-3 ${width}`}>
      <Grid container>
        <Grid item xs={12} className="m-1">
          <Typography className="fs-26 fw-500">{heading}</Typography>
        </Grid>
        <Grid item xs={12} className="m-1">
          <Typography>Employee ID</Typography>
          <InputBoxComponent placeholder="Enter Employee Id" />
        </Grid>
        <Grid item xs={12} className="m-1">
          <Typography>Enter password</Typography>
          <InputBoxComponent placeholder="Enter Employee Id" />
        </Grid>
        <Grid item xs={12} className="m-1 my-2 d-flex justify-content-center">
          <Grid xs={12} md={6}>
            <ButtonComponent fullWidth label={btnText} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    // </div>
  );
}
