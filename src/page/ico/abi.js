const ICO_CONTRACT_ABI = [
       {
              "inputs": [
                     {
                            "internalType": "address payable",
                            "name": "_deposit",
                            "type": "address"
                     },
                     {
                            "internalType": "address",
                            "name": "_tokenContract",
                            "type": "address"
                     },
                     {
                            "internalType": "uint256",
                            "name": "_tokenSupply",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
       },
       {
              "anonymous": false,
              "inputs": [
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "tokenOwner",
                            "type": "address"
                     },
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                     },
                     {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "Approval",
              "type": "event"
       },
       {
              "anonymous": false,
              "inputs": [
                     {
                            "indexed": false,
                            "internalType": "address",
                            "name": "investor",
                            "type": "address"
                     },
                     {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                     },
                     {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "Invest",
              "type": "event"
       },
       {
              "anonymous": false,
              "inputs": [
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                     },
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                     },
                     {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "Transfer",
              "type": "event"
       },
       {
              "inputs": [],
              "name": "admin",
              "outputs": [
                     {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "tokenOwner",
                            "type": "address"
                     },
                     {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                     }
              ],
              "name": "allowance",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                     },
                     {
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "approve",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "balanceBNB",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "tokenOwner",
                            "type": "address"
                     }
              ],
              "name": "balanceOf",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "balance",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                     }
              ],
              "name": "balances",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "burn",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address payable",
                            "name": "newDeposit",
                            "type": "address"
                     }
              ],
              "name": "changeDepositAddress",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "deposit",
              "outputs": [
                     {
                            "internalType": "address payable",
                            "name": "",
                            "type": "address"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "founder",
              "outputs": [
                     {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "getCurrentState",
              "outputs": [
                     {
                            "internalType": "enum CryptosICO.State",
                            "name": "",
                            "type": "uint8"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "gettotalWallet",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "halt",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "hardCap",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "icoState",
              "outputs": [
                     {
                            "internalType": "enum CryptosICO.State",
                            "name": "",
                            "type": "uint8"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "invest",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                     }
              ],
              "stateMutability": "payable",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "maxInvestment",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "minInvestment",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "name",
              "outputs": [
                     {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "raisedAmount",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "resume",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "saleEnd",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "saleStart",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "uint256",
                            "name": "_hardcap",
                            "type": "uint256"
                     }
              ],
              "name": "setHardcap",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                     {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "tokenContract",
              "outputs": [
                     {
                            "internalType": "contract ERC20Interface",
                            "name": "",
                            "type": "address"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "tokenPrice",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "tokenSupply",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "tokenTradeStart",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "totalWallet",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                     },
                     {
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "transfer",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                     },
                     {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                     },
                     {
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "transferFrom",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "stateMutability": "payable",
              "type": "receive"
       }
]
const TOKEN_CONTRACT_ABI = [
       {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
       },
       {
              "anonymous": false,
              "inputs": [
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "tokenOwner",
                            "type": "address"
                     },
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                     },
                     {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "Approval",
              "type": "event"
       },
       {
              "anonymous": false,
              "inputs": [
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                     },
                     {
                            "indexed": true,
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                     },
                     {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "Transfer",
              "type": "event"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "tokenOwner",
                            "type": "address"
                     },
                     {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                     }
              ],
              "name": "allowance",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                     },
                     {
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "approve",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "tokenOwner",
                            "type": "address"
                     }
              ],
              "name": "balanceOf",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "balance",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                     }
              ],
              "name": "balances",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "founder",
              "outputs": [
                     {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "name",
              "outputs": [
                     {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                     {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                     {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                     }
              ],
              "stateMutability": "view",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                     },
                     {
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "transfer",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
       },
       {
              "inputs": [
                     {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                     },
                     {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                     },
                     {
                            "internalType": "uint256",
                            "name": "tokens",
                            "type": "uint256"
                     }
              ],
              "name": "transferFrom",
              "outputs": [
                     {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                     }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
       }
]
export  {ICO_CONTRACT_ABI, TOKEN_CONTRACT_ABI};