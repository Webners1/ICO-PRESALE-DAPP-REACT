import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import colors from "./../../../colors";

const smallCircleStyles = {
  position: "absolute",
  content: "''",
  height: ".3rem",
  width: ".3rem",
  background: "white",
  top: "50%",
  transform: "translateY(-50%)",
  borderRadius: "100%",
  border: `2px solid`,
};

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: colors.yellow.v2,
  height: 6,
  paddingBottom: 0,
  "& .MuiSlider-track": {
    border: "none",
    "&:after": {
      left: 0,
      ...smallCircleStyles,
      borderColor: colors.yellow.v2,
    },
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: colors.white.v1,
    border: `3px solid ${colors.yellow.v2}`,
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
    "&:after": {
      display: "none",
    },
    "& .MuiSlider-valueLabel": {
      background: colors.black.v2,
      padding: theme.spacing(0.5, 1),
      borderRadius: 5,
      "& .MuiSlider-valueLabelLabel": {
        fontSize: "12px",
        userSelect: "none",
      },
    },
  },
  "& .MuiSlider-rail": {
    opacity: 0.2,
    backgroundColor: colors.white.v2,

    "&:after": {
      right: 0,
      ...smallCircleStyles,
      borderColor: colors.white.v2,
    },
  },
}));
