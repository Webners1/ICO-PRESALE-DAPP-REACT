import {
  Box,
  Button,
  CardActionArea,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import colors from "../../../colors";
import { StyledTextField, StyledYellowButton } from "./styled";

export default function InputBox({ hardcap=0, totalSupply, walletBalance=0, buyTokens, EndSale}) {
  const [val, setVal] = useState(0);
  console.log(hardcap)
  console.log(walletBalance)
  const tokenReceive=(val)=>{
      return totalSupply/hardcap * val;
  }

  return (
    <Box px={2}>
      <Typography variant="caption" fontWeight={"normal"}>
        Amount (Max: {hardcap} BNB)
      </Typography>

      <Stack direction={"row"} spacing={1}>
        <StyledTextField
          variant="outlined"
          size="small"
          type="text"
          value={val}
          max={Number(walletBalance)}
          onChange={(event) => setVal(event.target.value.replace(/[^\d]/g, ""))}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end"  >
                <Typography
                  fontWeight={"bolder"}
                  component={CardActionArea}
                  pb={0.5}
                  color={colors.yellow.v2}
                  variant={"h6"}
                  
                  onClick={() => setVal(Number(walletBalance))}
                >
                  max
                </Typography>
              </InputAdornment>
            ),
          }}
        />
        <StyledYellowButton disabled={EndSale? true:false} disableElevation variant="contained" size="small" onClick={()=>buyTokens(val.toFixed(2))}>
          Buy
        </StyledYellowButton>
      </Stack>
      <FormHelperText sx={{ fontWeight: 500, color: colors.blue.v1 }}>
        {`You'll receive: ${tokenReceive(val)} WOD`}
      </FormHelperText>
    </Box>
  );
}
