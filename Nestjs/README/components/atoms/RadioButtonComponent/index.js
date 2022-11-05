import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioButton = ({ checked = false, onChange = () => {}, label = "" }) => {
  return (
    <FormControl>
      <RadioGroup onChange={onChange}>
        <FormControlLabel
          control={
            <Radio
              checked={checked}
              size="small"
              sx={{
                color: "#333333",
                "&.Mui-checked": {
                  color: "#333333",
                },
              }}
            />
          }
          sx={{
            "& .MuiFormControlLabel-label": {
              color: "#4a4a4a",
              fontSize: "14px",
              fontWeight: "600",
            },
          }}
          label={label}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
