import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LOGO from "../../../public/logo.png";

const UserLayout = ({ children }) => {
  return (
    <Grid>
      <Paper className="px-3 px-sm-5 py-3 bg-dark-black rounded-0">
        <Typography className="color-white fs-20 fw-600 text-right">
          Service Desk
        </Typography>
      </Paper>
      <Box className="position-absolute bottom-0 end-0">
        <Image src={LOGO} width="200" height="60" />
      </Box>
      <Grid className="px-3 px-md-5 py-2 hide-scrollbar page-height overflowY-scroll bg-light-white">
        {children}
      </Grid>
    </Grid>
  );
};

export default UserLayout;
