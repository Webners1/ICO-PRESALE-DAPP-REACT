import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledSlider } from "./styled";

export default function YelloSlider() {
  const MAX = 200;

  function valueLabelFormat(value) {
    return `${value}% | ${parseInt((value / 100) * MAX)} BNB`;
  }

  return (
    <Box px={4} pt={4}>
      <StyledSlider
        max={MAX}
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="on"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
      />
      <Typography align="right" p={0} m={0} variant="body2" mt={-1}>
        {MAX} BNB
      </Typography>
    </Box>
  );
}
