import Router from "./modules/core/routes/Router";
// import {useEffect} from "react";
// import {init} from "./modules/modules/blockchain/components/Web3Client";
// import Web3 from "web3";
// require('dotenv').config();
//
//
// function App() {
//     const providerUrl = process.env.PROVIDER_URL;
//
//     const web3 = new Web3(providerUrl);
//
//     const { networkId, networkName, providerName } = web3;
//
//     const Web3Client = () => (<div>
//         <h1>Infura/MetaMask/OpenZeppelin Dapp</h1>
//         <div>
//             Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
//         </div>
//         <div>
//             Provider: {providerName}
//         </div>
//     </div>)
//     return <Web3Client />
//     //const providerURL= process.env["PROVIDER_URL"];
//     // useEffect(() => {
//     //     // init();
//     //
//     // },[]);
//     // return (
//     //     <Router>
//     //
//     //     </Router>
//     // );
// }
// export default App;

import Web3 from "web3";
import {useEffect, useState} from "react";
require('dotenv').config();


function App() {

    // const [account, setAccount] = useState();
    // const [network, setNetwork] = useState();
    // const [balance, setBalance] = useState();
    //
    // const providerUrl = "https://ropsten.infura.io/v3/7a04937cd8854d3183e68da52e43944b";
    //
    // // if deps = [], useEffect is happening when the component is rendered the first time
    // // useEffect takes 2 params: a callback and a dependency list. The callback is triggered
    // // when the elems from the dependency list change
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
    //         // web3.eth.sendTransaction({
    //         //     from: '0x34e8dEe6163a1383415380b5F99AFC694B9DCEFF',
    //         //     to: '0xd93ff41e7b4D10cb6da0406122a14FFce267Fe2C',
    //         //     value:'10'
    //         // })
    //     }
    //
    //     loadAccounts();
    //     loadBalance();
    //
    // }, [account, network, balance])
    //
    // useEffect(() => {
    //     const web3 = new Web3(providerUrl);
    //     console.log(providerUrl);
    //     console.log(web3);
    //
    //     let provider = window.ethereum;
    //     console.log(provider);
    //
    //
    //
    // },[])

    return <Router>

    </Router>


}

export default App;
