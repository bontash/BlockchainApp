import React, {useEffect, useState} from "react";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import axios from "axios";
import * as bitcore from "bitcore-lib";
import BitcoinAccountsCard from "./components/BitcoinAccountsCard";
import {PageTitle} from "../../../core/ui/PageTitle";
import BitcoinTransactionsTable from "./modules/BitcoinTransactionsTable";
import {Snackbar} from "@mui/material";

const fetchTransactions = async (senderAccountID) => {
    const body = {
        method: "GET",
        url: `http://localhost:3001/bitcoinTransaction?senderAccountID=${senderAccountID}`,
        headers: {'Content-Type': 'application/json'}
    }
    const result = await axios(body);
    console.log("Result fetch: ", result.data);
    return result.data;
}
const BitcoinTransactionPage = () => {

    const [receiverAccount, setReceiverAccount] = useState("");
    const [valueField, setValueField] = useState("");
    const [senderAccount, setSenderAccount] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [rows, setRows] = useState([]);
    let transactionId;
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }


    useEffect(() => {
        setOpen(true)
    }, [])

    async function sendBitcoin() {
        const sochainNetwork = "BTCTEST";
        const satoshiValue = valueField * 100000000;
        let script_asm;
        let fee = 0;
        let inputCount = 0;
        let outputCount = 2;
        const utxos = await axios.get(
            `https://sochain.com/api/v2/get_tx_unspent/${sochainNetwork}/${senderAccount}`
        );
        let totalAmountAvailable = 0;
        const transaction = new bitcore.Transaction();

        let inputs = [];
        for (const elem of utxos.data.data.txs) {
            let utxo = {};
            utxo.satoshis = Math.floor(Number(elem.value) * 100000000);
            utxo.script = elem.script_hex;
            utxo.address = utxos.data.data.address;
            utxo.txId = elem.txid;
            utxo.outputIndex = elem.output_no;
            totalAmountAvailable += utxo.satoshis;
            inputCount += 1;
            script_asm = elem.script_asm;
            inputs.push(utxo);
        }
        console.log(inputs);
        let transactionSize = inputCount * 146 + outputCount * 34 + 10 - inputCount;
        // Check if we have enough funds to cover the transaction and the fees assuming we want to pay 20 satoshis per byte

        fee = transactionSize * 20
        if (totalAmountAvailable - satoshiValue - fee < 0) {
            alert("Balance is too low for this transaction");
        }
        else {

            transaction.from(inputs);

            transaction.to(receiverAccount, satoshiValue);

            transaction.change(senderAccount);

            transaction.fee(fee * 20);

            transaction.sign(privateKey);

            const serializedTransaction = transaction.serialize();

            const body = {
                method: "POST",
                url: `http://localhost:3001/bitcoinTransaction`,
                headers: {'Content-Type': 'application/json'},
                data: JSON.stringify({
                    tx_hex: serializedTransaction,
                    senderAccountID: senderAccount,
                    receiverAccountID: receiverAccount,
                    value: valueField,
                    satoshisUsed: fee,
                    script: script_asm
                })
            }
            const result = await axios(body);
            transactionId = result.data.data.txid;
            const rowsResult = await fetchTransactions(senderAccount);
            setRows(rowsResult);
        }
    }


    return <>
        <ParticlesBackground/>
        <PageTitle>
            Bitcoin transactions
        </PageTitle>
        <Snackbar sx={{maxWidth: 600}}
                  message={"For testing the functionality from this page, you need a wallet for BTC, like Electrum with an account for BTC testnet. From there, " +
                  "you need to get your private key, for signing the transaction, your public key which is your account and the public key of a receiver. You " +
                  "can check the information from the table on sochain.com"} autoHideDuration={45000} open={open}
                  onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        />
        <BitcoinAccountsCard receiverAccountValue={receiverAccount} senderAccountValue={senderAccount}
                             onClick={() => sendBitcoin()} privateKeyValue={privateKey}
                             onChangePrivateKey={(e) => setPrivateKey(e.target.value)}
                             onChangeReceiverAccount={(e) => setReceiverAccount(e.target.value)}
                             onChangeSenderAccount={(e) => setSenderAccount(e.target.value)}
                             onChangeValue={(e) => setValueField(e.target.value)} valueField={valueField}/>
        <p/>
        <BitcoinTransactionsTable rows={rows}/>
    </>
}


export default BitcoinTransactionPage;