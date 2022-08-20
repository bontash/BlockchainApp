import React, {useState} from "react";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import axios from "axios";
import * as bitcore from "bitcore-lib";
import BitcoinAccountsCard from "./components/BitcoinAccountsCard";
import {PageTitle} from "../../../core/ui/PageTitle";
import BitcoinTransactionsTable from "./modules/BitcoinTransactionsTable";

const fetchTransactions = (setResponse) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    fetch(`http://localhost:3001/bitcoinTransaction`, requestOptions)
        .then(response => console.log("Response:", response ))
        .then(data => setResponse(data.bitcoinTransactions)).catch(error=> console.log("Error: ",error));
}

const BitcoinTransactionPage = () => {

    const [receiverAccount, setReceiverAccount] = useState("");
    const [valueField, setValueField] = useState("");
    const [senderAccount, setSenderAccount] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [rows, setRows] = useState([]);
    let transactionId;

    async function sendBitcoin() {
        const sochainNetwork = "BTCTEST";
        const satoshiValue = valueField * 100000000;
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
            inputs.push(utxo);
        }
        let transactionSize = inputCount * 146 + outputCount * 34 + 10 - inputCount;
        // Check if we have enough funds to cover the transaction and the fees assuming we want to pay 20 satoshis per byte

        fee = transactionSize * 20
        if (totalAmountAvailable - satoshiValue - fee < 0) {
            throw new Error("Balance is too low for this transaction");
        }

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
            data: JSON.stringify({tx_hex: serializedTransaction, accountID: senderAccount})
        }
        const result = await axios(body);
        transactionId = result.data.data.txid;
        fetchTransactions(setRows);
        console.log("Rows: ",rows);
    }


    return <>
        <ParticlesBackground/>
        <PageTitle>
            Bitcoin transactions
        </PageTitle>
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