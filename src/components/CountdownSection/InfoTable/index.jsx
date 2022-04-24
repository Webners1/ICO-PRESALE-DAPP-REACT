import { Box, TableCell, Typography } from "@mui/material";
import React from "react";
import { StyledSmallTable } from "./StyledSmallTable";

export default function InfoTable({ tokenPrice, hardcap, totalContributor, minInvest, maxInvest, walletBalance, tokenInvested, value, buyTokens, icoContractAddress, tokencontract }) {
  hardcap= hardcap!=NaN|| undefined? hardcap:0;
  console.log(hardcap)
  return (
    <Box px={2} pb={1}>
      <StyledSmallTable>
        {[
          {
            left: "Minimum Buy",
            right: `${minInvest} BNB`,
          },
          {
            left: "Maximum Buy",
            right: `${maxInvest} BNB`,
          },
          {
            left: "Soft Cap",
            right: `${minInvest} BNB`,
          },
          {
            left: "Hard Buy",
            right: `${hardcap} BNB`,
          },
          {
            left: "Total Contributors",
            right: `${Number(totalContributor).toLocaleString()}`,
          },
          {
            left: "Your Contribution",
            right: `${tokenInvested / tokenPrice} BNB| ${tokenInvested} WOD`,
          },
        ].map(({ left, right }, index) => {
          return (
            <tbody key={`info-section-countdown-${index}`}>
              <tr>
                <TableCell>
                  <Typography variant="caption" fontWeight={'bold'}>{left}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="caption" fontWeight={400}>{right}</Typography>
                </TableCell>
              </tr>
            </tbody>
          );
        })}
      </StyledSmallTable>
    </Box>
  );
}
