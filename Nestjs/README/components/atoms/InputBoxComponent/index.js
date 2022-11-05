import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { FormHelperText } from "@mui/material";

const useStyles = makeStyles({
  customTextField: {
    "& input::placeholder": {
      fontSize: "14px",
    },
  },
  input: {
    color: "#B3B3B3",
  },
});

const InputBoxComponent = ({
  id = "",
  label = "",
  variant = "outlined", //filled outlined
  disabled = false,
  helperText = "",
  errorText = "",
  InputProps,
  color = "primary",
  fullWidth = true,
  size = "small", //small
  value = "",
  type = "text", //number password
  placeholder = "",
  sx = {},
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
  name = "",
}) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        name={name}
        id={id}
        label={label}
        variant={variant}
        disabled={disabled}
        placeholder={placeholder}
        helperText={helperText}
        error={errorText ? true : false}
        InputLabelProps={{
          shrink: true,
          classes: { root: classes.input },
        }}
        color={color}
        fullWidth={fullWidth}
        size={size}
        value={value}
        type={type}
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
          ...sx,
        }}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        classes={{ root: classes.customTextField }}
        inputProps={{ sx: { py: 1 } }}
        InputProps={InputProps}
      />
      {errorText && (
        <FormHelperText error className="fw-700">
          {errorText}
        </FormHelperText>
      )}
    </>
  );
};

export default InputBoxComponent;
