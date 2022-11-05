import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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

const SimpleDropdown = ({
  id = "simple-drop-down",
  value = "",
  options = [],
  fullWidth = false,
  label = "",
  variant = "outlined",
  errorText = "",
  placeholder = "",
  onChange = () => {},
  onBlur = () => {},
  readOnly = false,
  disabled = false,
  size = "small",
  sx = {},
}) => {
  const classes = useStyles();

  return (
    <>
      <Autocomplete
        size={size}
        value={value}
        disablePortal
        id={id}
        options={options}
        fullWidth={fullWidth}
        getOptionLabel={option => (option.label ? option.label : "")}
        disabled={disabled}
        renderInput={params => (
          <TextField
            {...params}
            label={label}
            variant={variant}
            error={errorText}
            onBlur={onBlur}
            placeholder={placeholder}
            classes={{ root: classes.customTextField }}
          />
        )}
        onChange={(e, value) => {
          onChange(e, value);
        }}
        readOnly={readOnly}
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
        popupIcon={
          <KeyboardArrowDownIcon
            fontSize="small"
            className="color-dark-black"
          />
        }
      />
      {errorText && (
        <FormHelperText error className="fw-700">
          {errorText}
        </FormHelperText>
      )}
    </>
  );
};

export default SimpleDropdown;
