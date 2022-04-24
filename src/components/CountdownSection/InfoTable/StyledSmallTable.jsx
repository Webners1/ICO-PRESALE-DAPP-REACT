import { styled } from "@mui/system";

export const StyledSmallTable = styled("table")(({ theme }) => ({
  width: "100%",
  "& td": {
    borderBottomStyle: "dashed",
    padding: theme.spacing(.5, 0),
  },
}));
