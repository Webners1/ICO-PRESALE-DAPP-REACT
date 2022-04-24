import { useMediaQuery, useTheme } from "@mui/material";
import { createContext } from "react";

const AppContext = createContext();
export default AppContext;

export function AppProvider({ children }) {
  const theme = useTheme();

  const islg = useMediaQuery(theme.breakpoints.up("lg"));
  const ismd = useMediaQuery(theme.breakpoints.only("md"));
  const issm = useMediaQuery(theme.breakpoints.only("sm"));
  const isxs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const contextValue = {
    islg,
    ismd,
    issm,
    isxs,
    isSmall,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
