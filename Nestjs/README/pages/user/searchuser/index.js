import { Grid, IconButton, InputAdornment, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchUser = () => {
  return (
    <Grid
      height="75%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <InputBase
        placeholder="Employee Id"
        fullWidth
        className="bg-white py-2 pe-3 ps-3 rounded-2 w-75"
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Grid>
  );
};

export default SearchUser;
