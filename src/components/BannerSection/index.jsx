import {
  Avatar,
  Container,
  Grid,
  Hidden,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  SecurityAuditReportIcon,
  TelegramIcon,
  TokenExplorerBscScanIcon,
  TwitterIcon,
  WhitePaperIcon,
} from "../../assets/Icons";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppContext } from "../../hooks";
import { StyledPaper } from "../../styled";
import BlackButton from "../BlackButton";
const DropDownCard = ({disconnect,walletBalance,account})=>{
  const liCls =
    "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";
  return(

<div className="shadow h-auto w-56 absolute">
      <ul className="text-left" style={{ listStyle: "none"}}>
    <li className={liCls} style={{fontWeight:600, fontSize:'23px'}}>
      {`${walletBalance === undefined? 0 : walletBalance} BNB`}
    </li>
    <li>
    <button style={{ border:'none' }}className={liCls} onClick={() => disconnect(false)}>
      Disconnect
    </button>
    </li>

  </ul>
</div>
  )
}
export default function BannerSection({ isAuthenticated, account = null, walletInit,walletBalance,disconnect}) {
  const [height, setHeight] = useState();
  const { isSmall } = useAppContext();
  const [click, setClick] = useState(false);

  const liCls =
    "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";

  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("hover", handleClick);
    return () => {
      document.removeEventListener("hover", handleClick);
    };
  });
 

  return (
    <div>
      <Box href='/home'>
        <img src="/assets/banner.png" alt="" height={"100%"} width="100%" />
      </Box>

      <Hidden mdUp>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="end"
          px={2}
          sx={{
            transform: "translateY(-60%)",
          }}
        >
          <BlackButton href='/home'>Home</BlackButton>
          {!isAuthenticated ? <BlackButton onClick={walletInit ? () => walletInit() : null} >Connect Wallet</BlackButton> : (
            <div
              className="dropdown"
              ref={drop}
              style={{
                position: "relative",
                margin: "16px",
                width: "auto",
                display: "inline-block"
              }}
            >
              <button onClick={() => setOpen(open => !open)}>{account}</button>
              {open && <DropDownCard setOpen={setOpen} />}
            </div>
          )}
        </Stack>
      </Hidden>

      <Container
        sx={{
          mb: !isSmall && -height / 2 + "px",
          transform: !isSmall && "translateY(-50%)",
        }}
        ref={(ele) => !isSmall && setHeight(ele?.clientHeight)}
      >
        <StyledPaper sx={{ p: isSmall ? 2 : 3, pt: isSmall ? 0 : 3 }}>
          <Grid container spacing={isSmall ? 1 : 3}>
            <Grid
              item
              md={2}
              xs={4}
              ref={(ele) => isSmall && setHeight(ele?.clientHeight)}
            >
              <Paper
                sx={{
                  mb: isSmall && "-50%",
                  transform: isSmall && "translateY(-48%)",
                  p: 0.8,
                  borderRadius: 2,
                }}
              >
                <Avatar
                  src="/assets/logo.png"
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 2,
                  }}
                />
              </Paper>
            </Grid>

            <Hidden mdUp>
              <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant={isSmall ? "h6" : "h4"}
                  sx={{ fontWeight: "bolder", ml: 1 }}
                >
                  BabyDoge
                </Typography>
              </Grid>
            </Hidden>

            <Grid item md={10}>
              <Stack
                direction="row"
                spacing={isSmall ? 0 : 2}
                justifyContent="space-between"
                alignItems={"center"}
                sx={{
                  mb: 1,
                  mt: isSmall && 1,
                  "& svg": {
                    height: 30,
                    width: 30,
                  },
                }}
              >
                <Stack
                  direction={isSmall ? "column" : "row"}
                  spacing={!isSmall && 2}
                  alignItems={!isSmall && "center"}
                >
                  <Hidden mdDown>
                    <Typography
                      variant={isSmall ? "h6" : "h4"}
                      sx={{ fontWeight: "bolder" }}
                    >
                      BabyDoge
                    </Typography>
                  </Hidden>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"flex-end"}
                  >
                    {[
                      { link: "", icon: <TelegramIcon /> },
                      { link: "", icon: <TwitterIcon /> },
                      { link: "", icon: <InstagramIcon /> },
                      { link: "", icon: <FacebookIcon /> },
                      { link: "", icon: <WhitePaperIcon /> },
                      { link: "", icon: <SecurityAuditReportIcon /> },
                      { link: "", icon: <TokenExplorerBscScanIcon /> },
                    ].map((item, index) => {
                      return (
                        <IconButton
                          size="small"
                          key={`banner-icons-${index}`}
                          sx={{
                            position: "relative",
                            "&:after": {
                              content: "''",
                              position: "absolute",
                              top: "0",
                              left: "0",
                              width: "0",
                              height: "100%",
                              backgroundColor: "rgba(255,255,255,0.4)",
                              WebkitTransition: "none",
                              MozTransition: "none",
                              transition: "none",
                            },
                            "&:hover:after": {
                              width: "120%",
                              backgroundColor: "rgba(255,255,255,0)",
                              WebkitTransition: "all 0.4s ease-in-out",
                              MozTransition: "all 0.4s ease-in-out",
                              transition: "all 0.4s ease-in-out",
                            },
                          }}
                        >
                          {item.icon}
                        </IconButton>
                      );
                    })}
                  </Stack>
                </Stack>
                <Hidden mdDown>
                  <Stack direction="row" spacing={1}>
                    <BlackButton>Home</BlackButton>
                    {!isAuthenticated? <BlackButton onClick={walletInit ? () => walletInit() : null} >Connect Wallet</BlackButton>:(
                      <div
                        className="dropdown"
                        ref={drop}
                        style={{
                          position: "relative",
                          margin: "16px",
                          width: "auto",
                          display: "inline-block"
                        }}
                      >
                        <button onClick={() => setOpen(open => !open)}>{account}</button>
                        {open && <DropDownCard setOpen={setOpen} disconnect={ disconnect} walletBalance={walletBalance} account={account} />}
                      </div>
                    )}
                  </Stack>
                </Hidden>
              </Stack>

              <Typography
                variant={isSmall ? "body1" : "h6"}
                fontWeight={400}
                lineHeight={1.3}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                vitae aut ex sequi dolor, tempora labore laborum porro deleniti
                ab harum ullam voluptatum, incidunt deserunt dignissimos.
                Aspernatur similique, officiis temporibus natus omnis atque
                possimus expedita illum animi rerum facilis mollitia autem
                possimus expedita illum animi rerum facilis mollitia autem
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </div>
  );
}
