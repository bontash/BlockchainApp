import React, {useEffect, useState} from "react";
import {Button, ThemeProvider} from "@mui/material";
import {theme} from "../../../core/ui/theme/themeOptions";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import NavbarContainer from "../../../core/ui/navbar/navbar/NavbarContainer";
import axios from "axios";
import * as bitcore from "bitcore-lib";
import BitcoinAccountsCard from "./components/BitcoinAccountsCard";


const BitcoinTransactionPage = () => {

    const [receiverAccount, setReceiverAccount] = useState("");
    const [valueField, setValueField] = useState("");
    const [senderAccount, setSenderAccount] = useState("");

    async function sendBitcoin(receiverAddr, amount) {
        // var privateKey = new bitcore.PrivateKey('L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy');
        // var utxo = {
        //     "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
        //     "outputIndex" : 0,
        //     "address" : "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",
        //     "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",
        //     "satoshis" : 50000
        // };
        //
        // var transaction = new bitcore.Transaction()
        //     .from(utxo)
        //     .to('1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK', 15000)
        //     .sign(privateKey);
        // // var privateKey = new bitcore.PrivateKey('xprv9s21ZrQH143K3S7WAKpnRKW7bDEEfuaA4sPmM5v4hvDZUY5DxxXQRYrxMdy8H9wwvixrDTSEd4qH5UaWfEsktsdgLWHtvw6WcanPuXCjahZ');
        // var utxo = {
        //     "txId" : "bc2b1829b515f2ab60980bd85e92d91d368596da979453cb2bb47aae210301b",
        //     "outputIndex" : 1,
        //     "address" : "tb1qqj8aahefczvqfga26n7rryg9uz3x69ycdsek7r",
        //     "script" : "0014048fdedf29c09804a3aad4fc319105e0a26d1498",
        //     "satoshis" : 1171665
        // };
        //
        // var transaction = new bitcore.Transaction()
        //     .from(utxo)
        //     .to('tb1qf4pa20kzp873dx3kmfymdm7lf8d6kex2hurjn4', 15000)
        const sochainNetwork = "BTCTEST";
        const privateKey = "92yxSaSMc9Lpa2H68B7HGAUw1MwJsHqprPkyfTju5c1cMag7vP7";
        const senderAddr = "mkotnzcr7SjUuX8afk3B1jWC4P5JPc4gtH";
        const satoshiValue = amount * 100000000;
        let fee = 0;
        let inputCount = 0;
        let outputCount = 3;
        const utxos = await axios.get(
            `https://sochain.com/api/v2/get_tx_unspent/${sochainNetwork}/${senderAddr}`
        );
        let totalAmountAvailable = 0;
        const transaction = new bitcore.Transaction;

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
            //debugger;
            inputs.push(utxo);
        }
        console.log(inputs);

        let transactionSize = inputCount * 146 + outputCount * 34 + 10 - inputCount;
        // Check if we have enough funds to cover the transaction and the fees assuming we want to pay 20 satoshis per byte

        fee = transactionSize * 20
       // debugger;
        if (totalAmountAvailable - satoshiValue - fee < 0) {
            throw new Error("Balance is too low for this transaction");
        }

        transaction.from(inputs);
        //debugger;


        transaction.to(receiverAddr, satoshiValue);
        //debugger;

        transaction.change(senderAddr);

        transaction.fee(fee * 20);

        transaction.sign(privateKey);

        const serializedTransaction = transaction.serialize();

        const body = {
            method: "POST",
            url: `https://sochain.com/api/v2/send_tx/${sochainNetwork}`,
            withCredentials: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            },
            data: {
                tx_hex: serializedTransaction,
            }
        }
        debugger;

        const result = await axios(body);
        debugger;
        return result.data.data;
    }

    return <ThemeProvider theme={theme}>
        <NavbarContainer>
            <ParticlesBackground/>
            <BitcoinAccountsCard receiverAccountValue={receiverAccount} senderAccountValue={senderAccount}
                                 onClick={() => sendBitcoin("mzoZ6f8PCDMbGdXU69x1fHTTXu47nPN1Pk", 0.0001)}
                                 onChangeReceiverAccount={(e) => setReceiverAccount(e.target.value)}
                                 onChangeSenderAccount={(e) => setSenderAccount(e.target.value)}
                                 onChangeValue={(e) => setValueField(e.target.value)} valueField={valueField}/>
        </NavbarContainer>
    </ThemeProvider>

}

export default BitcoinTransactionPage;