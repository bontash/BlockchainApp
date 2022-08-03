import Web3 from "web3";

class Service{
    web3Node = null;
    selectedAccount = null;

    constructor(props) {
        this.init()

    }

    init(){
        let provider = window.ethereum;

        if (typeof provider !== 'undefined') {
            //MetaMask is installed

            provider.request({method: 'eth_requestAccounts'}).then((accounts) => {
                this.selectedAccount = accounts[0];
                console.log(accounts);
            })
                .catch((e) => {
                    console.log(e)
                });
        }

        this.web3Node = new Web3(provider);
    }

    getNode(){
           
    }

}