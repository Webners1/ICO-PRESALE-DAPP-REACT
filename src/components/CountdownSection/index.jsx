import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import colors from "../../colors";
import { useAppContext } from "../../hooks";
import { StyledPaper } from "../../styled";
import Countdown from "./Countdown";
import InfoTable from "./InfoTable";
import InputBox from "./InputBox";
import { StyledSlider } from "./YellowSlider/styled";

import YelloSlider from "./YellowSlider/index";

const CountDownTimer = ({
  FirstTimeDone,
  getTime,
  tokenReceive=0,
  tokenPrice=0,
  totalSupply=0,
  buyTokens,
  tokenInvested,
  hardcap=0,
  totalContributor,
  minInvest=0,
  maxInvest=0,
  walletBalance=0,
}) => {
  let [dys, hrs, mins, secs] = getTime;
  let [value, setValue] = useState(0);
  useEffect(() => {

  }, []);
  console.log(dys, hrs, mins, secs);
  const MAX = hardcap;
  console.log(hardcap)
  console.log("walletbalacne" + walletBalance)
  function valueLabelFormat(value) {
    setValue(value);
    return `${value}% | ${parseInt((value / 100) * MAX)} BNB`;
  }
  const { isSmall } = useAppContext();
  return (
    <StyledPaper sx={{ mb: isSmall && 2 }}>
      <Stack
        sx={{
          bgcolor: colors.yellow.v1,
          p: 1,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        alignItems="center"
        justifyContent="center"
        direction={"row"}
        spacing={1}
      >
        <Typography variant="subtitle1" align="center" fontWeight={"500"}>
          STAGE 1
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color={colors.white.v1}
          bgcolor={!FirstTimeDone ? colors.yellow.v3 : colors.red.v1}
          py={0.5}
          px={1}
          borderRadius={1}
        >
          {!FirstTimeDone ? "Starts In" : "Live"}
        </Typography>
      </Stack>
      <Countdown days={dys} hours={hrs} min={mins} sec={secs} />
      <Box px={4} pt={4}>
        <StyledSlider
          max={Number(MAX)}
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="on"
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
        />
        <Typography align="right" p={0} m={0} variant="body2" mt={-1}>
          {`${hardcap != NaN || undefined || null ? hardcap : 50} BNB`}
        </Typography>
      </Box>
      <InputBox
        hardcap={Number(MAX)}
        totalSupply={totalSupply}
        buyTokens={buyTokens}
        maxValue={walletBalance}
        tokenReceive={tokenReceive}
        walletBalance={walletBalance}
      />
      <InfoTable
        hardcap={Number(MAX)}
        tokenInvested={tokenInvested}
        minInvest={minInvest}
        maxInvest={maxInvest}
        tokenPrice={tokenPrice}
        totalSupply={totalSupply}
        walletBalance={walletBalance}
        totalContributor={totalContributor}
      />
    </StyledPaper>
  );
};

export default CountDownTimer;
