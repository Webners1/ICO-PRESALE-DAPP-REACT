import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useCountdown from "../../../hooks";
import colors from "./../../../colors";

function Countdown({ days, hours, min, sec}) {
  console.log("time here" + days + " " + hours + " " + min + " " + sec)
  const [dys, hrs, mins, secs] = useCountdown({
    days: days,
    hours: hours,
    minutes: min,
    seconds: sec,
  });

  return (
    <Box py={2}>
      <Stack
        direction={"row"}
        divider={<Typography variant="h5">:</Typography>}
        justifyContent="center"
        alignItems={"center"}
        spacing={0.5}
      >
        {[dys, hrs, mins, secs].map((item, index) => {
          return (
            <Box
              bgcolor={colors.yellow.v1}
              border={2}
              borderRadius={2}
              borderColor={colors.yellow.v2}
              height={"3rem"}
              width={"3rem"}
              display='flex'
              alignItems={'center'}
              justifyContent={'center'}
              key={`countdown-fragemnts-${index}`}
            >
              <Typography variant="h5" p={0} m={0} fontWeight={500}>
                {item}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Countdown;
