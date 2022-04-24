import { Button } from "@mui/material";
import React from "react";
import colors from "./../../colors";

export default function BlackButton({ walletinit ,children, ...props }) {
  return (
    <Button
    onClick={walletinit?()=>walletinit():null}
      variant={"contained"}
      sx={{
        py: 0.3,
        px: 1,
        textTransform: "capitalize",
        minWidth: 0,
        fontWeight: 400,
        bgcolor: colors.black.v1,
        color: colors.white.v1,
        "&:hover": {
          bgcolor: colors.yellow.v1,
          color: colors.black.v1,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
