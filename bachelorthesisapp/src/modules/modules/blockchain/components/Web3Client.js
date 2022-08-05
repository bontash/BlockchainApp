import Web3 from "web3";


// const { networkId, networkName, providerName } = web3Context;
// const Web3Client = () => (<div>
//     <h1>Infura/MetaMask/OpenZeppelin Dapp</h1>
//     <div>
//         Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
//     </div>
//     <div>
//         Provider: {providerName}
//     </div>
// </div>)
//
// export default Web3Client;
//
// export const init = () => {
//     let provider = window.ethereum;
//
//     if (typeof provider !== 'undefined') {
//         //MetaMask is installed
//
//         provider.request({method: 'eth_requestAccounts'}).then((accounts) => {
//             selectedAccount = accounts[0];
//             console.log(accounts);
//         })
//             .catch((e) => {
//                 console.log(e)
//             });
//     }
//
//     const web3 = new Web3(provider);
//     const idk = web3.eth.sendTransaction(selectedAccount);
//     console.log(idk);
// }