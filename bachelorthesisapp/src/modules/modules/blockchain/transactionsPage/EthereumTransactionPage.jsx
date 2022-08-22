import React, {useEffect, useState} from "react";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import AccountsCard from "./components/AccountsCard";
import {Web3Client} from "./components/Web3Client";
import EthereumTransactionsTable from "./modules/EthereumTransactionsTable";
import {PageTitle} from "../../../core/ui/PageTitle";
import axios from "axios";
import {Snackbar} from "@mui/material";
import * as BN from "bn.js"

const addTransaction = async (transactionID, accountID, gasUsed, blockNr, receiverAccountID, value) => {
    const body = {
        method: "POST",
        url: `http://localhost:3001/ethereumTransaction`,
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify({
            transactionID: transactionID,
            senderAccountID: accountID,
            gasUsed: gasUsed,
            blockNr: blockNr,
            receiverAccountID: receiverAccountID,
            value: value
        })
    }
    const result = await axios(body);
    return result.data;
}

const fetchTransactions = async (senderAccountID) => {
    const body = {
        method: "GET",
        url: `http://localhost:3001/ethereumTransaction?senderAccountID=${senderAccountID}`,
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
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }


    useEffect(() => {
        setOpen(true)
    }, [])

    async function loadAccounts() {

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

    async function getBlockInfo(hash) {
        const data = await Web3Client.eth.getTransaction(hash);
        return data;
    }


    function mineValue() {
        const weiValue = Web3Client.utils.toWei(valueField);
        const reducedWeiValue = weiValue / 10000000;
        const weiValueBN = new BN(reducedWeiValue, 10);
        const weiValueInt = weiValueBN.toNumber();
        const balanceWei = Web3Client.utils.toWei(balance);
        const reducedBalanceWei = balanceWei / 10000000;
        const balanceBN = new BN(reducedBalanceWei, 10);
        const balanceInt = balanceBN.toNumber();
        let blockInfo;

        if (balanceInt - weiValueInt - 257 >= 0) {
            Web3Client.eth.sendTransaction({
                from: senderAccount,
                to: receiverAccount,
                value: weiValue
            }, async function (error, hash) {
                if (hash !== undefined) {
                    transactionId = hash;
                    do {
                        blockInfo = await getBlockInfo(hash);
                    } while (blockInfo.blockNumber === null);
                    if (blockInfo.blockNumber !== null) {
                        const gasUsed = blockInfo.gasPrice;
                        const blockNr = blockInfo.blockNumber;
                        await addTransaction(transactionId, senderAccount, gasUsed, blockNr, receiverAccount, valueField);
                        const responseFind = await fetchTransactions(senderAccount);
                        setRows(responseFind);
                    }
                }
            })
        } else alert("You do not have enough ETH in your account!")
    }

    useEffect(() => {
        loadAccounts()
            .then(r => console.log("account"))
            .catch((e) => console.log("error:", e));
    }, [])

    useEffect(() => {
        if (senderAccount)
            loadBalance()
                .then(r => console.log("balance"))
                .catch((e) => console.log("error:", e));
    }, [senderAccount])

    return <>
        <ParticlesBackground/>
        <Snackbar sx={{maxWidth: 600}}
                  message={"For testing the functionality from this page, you need the Metamask extension with an account, some test ETH and " +
                  "a receiver account. This transaction will be sent to the Ropsten testnet and information about each transaction made on this page will appear in the table " +
                  "below. Don't worry if it does not load right away! It takes a couple of seconds from the transaction to be selected from the mempool and deployed into a block. " +
                  "You can check the information on etherscan.io"} autoHideDuration={45000} open={open}
                  onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        />
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