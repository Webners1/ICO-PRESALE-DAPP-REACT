import { styled } from "@mui/system";
import colors from "./colors";

export const StyledPaper = styled("section")(({ theme }) => ({
  border: `2px solid ${colors.white.v3}`,
  borderRadius: 8,
  background: colors.white.v1,
}));
