import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderComponent = () => {
  return (
    <Box className="d-flex align-items-center ps-sm-3 ps-1 pe-0 pe-lg-5 bg-dark-black py-3 border-0">
      <Typography className="color-white fs-20 fw-600">Service Desk</Typography>
    </Box>
  );
};

export default HeaderComponent;
