import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "../../core/ui/theme/themeOptions";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
import AccountsCard from "./components/AccountsCard";
import {Web3Client} from "./components/Web3Client";

const EthereumTransactionPage = () => {

    const [receiverAccount, setReceiverAccount] = useState("");
    const [valueField, setValueField] = useState("");
    const [senderAccount, setSenderAccount] = useState("");
    const [balance, setBalance] = useState();
    const [network, setNetwork] = useState("");

    async function loadAccounts() {
        //givenProvider is the provider which makes the browser compatible with web3
        //in my case, the givenProvider is Metamask
        // the fallback option is Ganache's address
        const accounts = await Web3Client.eth.requestAccounts();
        setSenderAccount(accounts[0]);
    }


    async function loadBalance() {
        const network = await Web3Client.eth.net.getNetworkType();
        setNetwork(network);
        const balance = await Web3Client.eth.getBalance(senderAccount);
        const trimmedBalance = balance / 1e18;
        setBalance(trimmedBalance.toFixed(4));
    }


    function mineValue() {
        console.log(valueField);
        const weiValue = Web3Client.utils.toWei(valueField);
        Web3Client.eth.sendTransaction({
            from: senderAccount,
            to: receiverAccount,
            value: weiValue
        }, function (error, hash) {
            console.log("error: " + error + " and hash: " + hash);
        });
    }

    useEffect(() => {
        console.log("called loadAccounts use effecrt")
        loadAccounts()
            .then(r => console.log("account"))
            .catch((e) => console.log("error:", e));
    }, [])

    useEffect(() => {
        console.log("called load balance use effect")
        if (senderAccount)
            loadBalance()
                .then(r => console.log("balance"))
                .catch((e) => console.log("error:", e));
    }, [senderAccount])

    return <ThemeProvider theme={theme}>
        <ParticlesBackground/>
        <NavbarContainer>
            <AccountsCard accountValue={receiverAccount}
                          onChangeAccount={(e) => setReceiverAccount(e.target.value)}
                          valueField={valueField}
                          onChangeValue={(e) => setValueField(e.target.value)}
                          onClick={() => mineValue()}/>
        </NavbarContainer>
    </ThemeProvider>
}

export default EthereumTransactionPage;