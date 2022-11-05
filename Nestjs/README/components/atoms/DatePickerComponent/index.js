import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerComponent = ({
  label = "",
  value = null,
  onChange = () => {},
  readOnly = false,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        placeholder="Date"
        onChange={onChange}
        renderInput={params => (
          <TextField
            size="small"
            sx={{
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#333333",
                },
              },
              "& .MuiOutlinedInput-root:focus": {
                "& > fieldset": {
                  outline: "none",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#333333",
                },
              },
              "& .MuiInputAdornment-root": {
                "& >button": {
                  background: "#ffffff",
                  "& >svg": {
                    fill: "#333333",
                  },
                },
              },
            }}
            fullWidth
            {...params}
          />
        )}
        readOnly={readOnly}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
