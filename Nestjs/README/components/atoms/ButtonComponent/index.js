import { Button } from "@mui/material";

const ButtonComponent = ({
  label = "Button",
  variant = "contained",
  onBtnClick = () => {},
  size = "small",
  muiProps = "",
  borderRadius = "2px",
  textColor = "color-white",
  bgColor = "bg-dark-black",
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <Button
      variant={variant}
      onClick={onBtnClick}
      size={size}
      className={`${
        // eslint-disable-next-line no-nested-ternary
        variant === "contained"
          ? bgColor
          : variant === "outlined"
          ? `${textColor}`
          : ""
      } ${muiProps}`}
      sx={{
        textTransform: "capitalize",
        borderRadius: { borderRadius },
      }}
      fullWidth={fullWidth}
      disabled={disabled}
      disableElevation
      disableFocusRipple
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
