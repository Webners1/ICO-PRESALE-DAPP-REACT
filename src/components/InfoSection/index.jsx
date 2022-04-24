import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import colors from "../../colors";
import { StyledPaper } from "../../styled";
import Copy from "../Copy";

export default function InfoSection({
  name,
  symbol,
  decimal,
  hardcap,
  totalSupply,
  EndDatetime,
  StartDatetime,
  totalContributor,
  minInvest,
  maxInvest,
  tokenTotalSupply,
  tokenPrice,
  walletBalance,
  tokenInvested,
  value,
  buyTokens,
  icoContractAddress,
  tokencontractAddress,
}) 
{
  
const percent = 50;
  return (
    <div>
      <StyledPaper sx={{ p: 1, px: 2 }}>
        {[
          {
            left: "Pre-Sale Contract Address",
            right: `${icoContractAddress}`,
            copy: true,
          },
          {
            left: "Token Contract Address",
            right: `${tokencontractAddress}`,
            helper: "(Do not send BNB to the token contract address)",
            copy: true,
            color: colors.yellow.v3,
          },
          {
            left:   "Token Name",
            right: `${name}`,
            copy: true,
          },
          {
            left: "Symbol",
            right: `${symbol}`,
            copy: true,
          },
          {
            left: "Decimals",
            right: `${decimal}`,
            copy: true,
          },
          {
            left: "Total Supply",
            right:  `${Number(totalSupply)?.toLocaleString()}`,
          },
          {
            left: "Token Price",
            right: `1 BNB = ${Number(tokenPrice)?.toLocaleString()} WOD`,
          },
          {
            left: "Tokens Offered",
            right: `${percent}% | ${(Number(tokenTotalSupply * percent/100 ))?.toLocaleString('en')}`,
          },
          {
            left: "Sale Start Time",
            right: `${StartDatetime}`,
          },
          {
            left: "Sale End Time",
            right: `${EndDatetime}`,
          },
        ].map(({ left, right, copy, helper, color }, index) => {
          return (
            <Grid
              container
              justifyContent="space-between"
              alignItems={"center"}
              key={`info-section-${index}`}
              sx={{
                borderBottom: `1px dashed ${colors.white.v4}`,
                py: helper ? 0 : 1,
              }}
            >
              <Grid item>
                <Typography variant="body2" fontWeight={"bold"}>
                  {left}
                </Typography>
              </Grid>
              <Grid item sx={{ ml: "auto" }}>
                <Stack direction="row" spacing={1}>
                  <section>
                    <Typography
                      variant="body2"
                      color={color}
                      className="textPrimary"
                      fontWeight={400}
                      align="right"
                      mb={-0.5}
                    >
                      {right}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="error.main"
                      fontSize={"10px"}
                    >
                      {helper}
                    </Typography>
                  </section>
                  {copy && <Copy value={right} title={left} />}
                </Stack>
              </Grid>
            </Grid>
          );
        })}
      </StyledPaper>
    </div>
  );
}
