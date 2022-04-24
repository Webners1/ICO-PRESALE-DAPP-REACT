import { Container, Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import BannerSection from "../../components/BannerSection";
import CommentSection from "../../components/Comments";
import CountdownSection from "../../components/CountdownSection";
import InfoSection from "../../components/InfoSection";
import ThePieChart from "../../components/ThePieChart";
import { useAppContext } from "../../hooks";
import Web3 from "web3";

import { ICO_CONTRACT_ABI, TOKEN_CONTRACT_ABI } from "./abi.js";
import { useMoralis } from "react-moralis";

export default function IcoPage() {
  let [contract, seticoContract] = useState({});
  let [tokenContract, settokenContract] = useState("0x0");

  let [account, setAccount] = useState(
    "0x0"
  );
  let [minInvest, setminInvest] = useState();
  let [maxInvest, setmaxInvest] = useState();
  let [TokenContract, setTokenContract] = useState("00");
  let [hardcap, sethardcap] = useState();
  let [IcoBalance, setIcobalance] = useState();

  let [tokenSupply, settokenSupply] = useState();
  let [tokenInvested, settokenInvested] = useState();
  let [tokenPrice, setTokenPrice] = useState("10000");
  let [Totalcontributor, setTotalcontributor] = useState("10000");
  let [walletBalance, setwalletBalance] = useState("0");

  let [tokenName, settokenName] = useState("100000");
  let [symbol, setsymbol] = useState("100000");
  let [decimal, setdecimal] = useState("100000");
  let [TokentotalSupply, setTokentotalSupply] = useState("100000");

  let [icoContractAddress, seticoContractAddress] = useState(
    "0x8b87d36ff05452f252ffd196c777970c77795ec5"
  );
  let [tokenContractAddress, settokenContractAddress] = useState(
    "0xd0bdc8bcc42b4d6f7e0c886a949630cb67d79603"
  );
  const { isInitialized, authenticate, isAuthenticating,enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3EnableError, isAuthenticated, account:userAcc } = useMoralis();
  let [StartDatetime, setStartDateTime] = useState("Wed, 27 July 2022 13:30:00");
  let [EndDatetime, setEndDateTime] = useState("Wed, 27 July 2023 13:30:00");
  let [[dys, hrs, mins, secs], setTime] = useState([0, 0, 0, 0]);
  let [FirstTimeDone, setFirstTimeDone] = useState(false);
  let [value, setValue] = useState("");
  const contractInit = () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    seticoContract(
      (contract = new web3.eth.Contract(ICO_CONTRACT_ABI, icoContractAddress))
    );
    setTokenContract(
      (TokenContract = new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        tokenContractAddress
      ))
    );
  };
  const accountInit=async()=>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
   if(isAuthenticated){
     console.log("account" + userAcc)
     setAccount(account =userAcc.toLowerCase());
     setwalletBalance(web3.utils.fromWei(await web3.eth.getBalance(account), "ether"))
   }
   else {

     setAccount(account = "");
     setwalletBalance(0)
   }
  }

  const walletInit=()=>{

    authenticate()
  }
  const disconnect=()=>{
    window.web3.currentProvider.disconnect();
    window.location.reload(true);
  }
  

  const { isSmall } = useAppContext();
const INIT=async()=>{
  contractInit();
   await getTokenData();
  await getICOData();
}
  const buyTokens = (value) => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const tx = contract?.methods
      ?.invest()
      .send({ from: account, value: web3.utils.toWei(value,"ether") });
  };

  const getICOData = async () => {
   
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

console.log(contract)
    setTokenPrice(
      (tokenPrice = (await contract?.methods?.tokenPrice().call()).toString())
    );
  
    setmaxInvest(
      (maxInvest =  web3.utils.fromWei((await contract?.methods?.maxInvestment().call()),"ether").toString())
    );
 

    setIcobalance(
      (IcoBalance = web3.utils.fromWei((await contract?.methods?.balanceBNB().call()),"ether").toString())
    );
    setminInvest(
      (minInvest = web3.utils.fromWei((await contract?.methods?.minInvestment().call()), "ether").toString())
    );
    console.log("Gfgdf")
    
    settokenSupply(
      (tokenSupply = (await contract?.methods?.tokenSupply().call()).toString())
    );
    sethardcap(hardcap = web3.utils.fromWei((await contract?.methods?.hardCap().call()),"ether").toString());
    setTotalcontributor(
      (Totalcontributor = (
        await contract?.methods?.gettotalWallet().call()
      ).toString())
    );
    console.log( maxInvest ,minInvest,hardcap,tokenSupply,Totalcontributor);
  };
  const getTokenData = async () => {
 
  
    settokenName((tokenName = await TokenContract?.methods?.name().call()));
    setsymbol((symbol = await TokenContract?.methods?.symbol().call()));
    setdecimal((decimal = await TokenContract?.methods?.decimals().call()));
    setTokentotalSupply(
      (TokentotalSupply = (
        await TokenContract?.methods?.totalSupply().call()
      ).toString())
    );
  };

  

  const Time = () => {
    let date1 = new Date(`${StartDatetime}`);
    let time = date1.getTime();
    let now = Date.now()
    time = time-now;
    if (time < 0) {
      setFirstTimeDone(true);
      console.log("d")
      date1 = new Date(`${EndDatetime}`);
      time = date1.getTime();
      time = Number(time);
      time = time - now;
    }
    console.log(time)
    var days = Math.floor(time / (3600 * 24));
    time -= days * 3600 * 24;
    var hrs = Math.floor(time / 3600);
    time -= hrs * 3600;
    var mnts = Math.floor(time / 60);
    time -= mnts * 60;
    setTime(([dys, hrs, mins, secs] = [days, hrs, mnts, time]));
    return [days, hrs, mnts];
  };

  useEffect(() => {
    if (!isAuthenticated) {
      walletInit()
      accountInit()
    }

    INIT()
    Time();

    console.log([dys, hrs, mins, secs]);
    console.log(userAcc)
  }, [userAcc, isAuthenticated, Time]);

  return (
    <div>
      <BannerSection
        walletInit={walletInit}
        disconnect={disconnect}
        account={userAcc}
        isAuthenticated={isAuthenticated}

      />
      <Container sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            {isSmall && (
              <CountdownSection
                hardcap={hardcap!=NaN ? hardcap : 0}
                buyTokens={buyTokens}
                Datetime={[StartDatetime, EndDatetime]}
                getTime={[dys, hrs, mins, secs]}
                isAuthenticated={isAuthenticated}

                name={tokenName}
                symbol={symbol}
                tokenTotalSupply={TokentotalSupply !== NaN ? TokentotalSupply : 0}
                decimal={decimal}
                tokenInvested={tokenInvested}
                minInvest={minInvest != NaN ? minInvest : 0}
                maxInvest={maxInvest != NaN ? maxInvest : 0}
                tokenPrice={tokenPrice != NaN ? tokenPrice : 0}
                totalSupply={TokentotalSupply != NaN ? TokentotalSupply : 0}
                walletBalance={walletBalance}
                totalContributor={Totalcontributor != NaN ? Totalcontributor : 0}
                FirstTimeDone={FirstTimeDone}
              />
            )}
            <InfoSection
              isAuthenticated={isAuthenticated}
              
              name={tokenName}
              symbol={symbol}
              icoContractAddress={icoContractAddress}
              tokencontractAddress={tokenContractAddress}
              tokenTotalSupply={TokentotalSupply}
              getTime={Time}
              StartDatetime={StartDatetime}
              EndDatetime={EndDatetime}
              tokencontract={tokenContract}
              decimal={decimal}
              tokenInvested={tokenInvested}
              minInvest={minInvest != NaN ? minInvest : 0}
            
              maxInvest={maxInvest != NaN ? maxInvest : 0}
              tokenPrice={tokenPrice != NaN ? tokenPrice : 0}
              totalSupply={TokentotalSupply}
              walletBalance={walletBalance != NaN ? walletBalance : 0}
              buyTokens={buyTokens}
              totalContributor={Totalcontributor}
              hardcap={hardcap != NaN ? hardcap : 0}
            />
            {isSmall && <ThePieChart />}
            <CommentSection />
          </Grid>
          <Grid item md={4} xs={12}>
            {!isSmall && <CountdownSection 
              hardcap={hardcap != NaN ? hardcap : 0}
              buyTokens={buyTokens}
              Datetime={[StartDatetime, EndDatetime]}
              getTime={[dys, hrs, mins, secs]}
              isAuthenticated={isAuthenticated}

              name={tokenName}
              symbol={symbol}
              tokenTotalSupply={TokentotalSupply !== NaN ? TokentotalSupply : 0}
              decimal={decimal}
              tokenInvested={tokenInvested}
              minInvest={minInvest != NaN ? minInvest : 0}
              maxInvest={maxInvest != NaN ? maxInvest : 0}
              tokenPrice={tokenPrice != NaN ? tokenPrice : 0}
              totalSupply={TokentotalSupply != NaN ? TokentotalSupply : 0}
              walletBalance={walletBalance}
              totalContributor={Totalcontributor != NaN ? Totalcontributor : 0}
              FirstTimeDone={FirstTimeDone}
            />}
            {!isSmall && <ThePieChart totalCap={IcoBalance} />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
