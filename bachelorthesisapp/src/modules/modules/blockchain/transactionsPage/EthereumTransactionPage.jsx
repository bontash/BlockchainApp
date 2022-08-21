import React, {useEffect, useState} from "react";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import AccountsCard from "./components/AccountsCard";
import {Web3Client} from "./components/Web3Client";
import EthereumTransactionsTable from "./modules/EthereumTransactionsTable";
import {PageTitle} from "../../../core/ui/PageTitle";
import axios from "axios";

const addTransaction = async (transactionID, accountID) => {
    const body = {
        method: "POST",
        url: `http://localhost:3001/ethereumTransaction`,
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify({transactionID: transactionID, accountID: accountID})
    }
    const result = await axios(body);
    return result.data;
}

const fetchTransactions = async () => {
    const body = {
        method: "GET",
        url: `http://localhost:3001/ethereumTransaction`,
        headers: {'Content-Type': 'application/json'}
    }
    const result = await axios(body);
    return result.data;

}

const EthereumTransactionPage = () => {

    const [receiverAccount, setReceiverAccount] = useState("");
    const [valueField, setValueField] = useState("");
    const [senderAccount, setSenderAccount] = useState("");
    const [balance, setBalance] = useState();
    const [network, setNetwork] = useState("");
    const [rows, setRows] = useState([]);
    let transactionId;

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
        }, async function (error, hash) {
            if (hash !== undefined) {
                transactionId = hash;
                console.log("Hash: ", transactionId);
                await addTransaction(transactionId, senderAccount);
                const responseFind = await fetchTransactions();
                setRows(responseFind);
            }
        })
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

    return <>
        <ParticlesBackground/>
        <PageTitle>
            Ethereum transactions
        </PageTitle>
        <AccountsCard accountValue={receiverAccount}
                      onChangeAccount={(e) => setReceiverAccount(e.target.value)}
                      valueField={valueField}
                      onChangeValue={(e) => setValueField(e.target.value)}
                      onClick={() => mineValue()}/>
        <p/>
        <EthereumTransactionsTable rows={rows}/>
    </>
}

export default EthereumTransactionPage;