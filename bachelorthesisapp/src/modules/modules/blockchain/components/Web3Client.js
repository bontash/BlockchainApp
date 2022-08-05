import Web3 from "web3";
import {useEffect, useState} from "react";


// const [account, setAccount] = useState();
// const [network, setNetwork] = useState();
// const [balance, setBalance] = useState();

// const providerUrl = "https://ropsten.infura.io/v3/7a04937cd8854d3183e68da52e43944b";

// if deps = [], useEffect is happening when the component is rendered the first time
// useEffect takes 2 params: a callback and a dependency list. The callback is triggered
// when the elems from the dependency list change

export const Web3Client = new Web3(Web3.givenProvider || 'localhost:7545');

// useEffect(() => {
//
//     const web3 = new Web3(Web3.givenProvider || 'localhost:7545');
//     // await is making the function wait for smth to happen before executing the rest of the function
//     async function loadAccounts() {
//         //givenProvider is the provider which makes the browser compatible with web3
//         //in my case, the givenProvider is Metamask
//         // the fallback option is Ganache's address
//         const accounts = await web3.eth.requestAccounts();
//
//         setAccount(accounts[0]);
//     }
//
//     async function loadBalance() {
//         const network = await web3.eth.net.getNetworkType();
//         setNetwork(network);
//         const balance = await web3.eth.getBalance(account);
//         setBalance(balance/1e18);
//     }
//
//     loadAccounts();
//     loadBalance();
//
// }, [account, network, balance])
