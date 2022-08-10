import React from "react";
import {Card, CardContent, Grid, Button} from "@mui/material";
import BlockField from "../components/BlockField";
import NodeButton from "../components/NodeButton";
import {Web3Client} from "../../transactionsPage/components/Web3Client";

const EthereumBlock = ({blockInfo, setBlockInfo}) => {

    function mineData(data) {
        const hashedData = Web3Client.eth.abi.encodeFunctionSignature(data);
        Web3Client.eth.sendTransaction({
            from: '0x34e8dEe6163a1383415380b5F99AFC694B9DCEFF',
            data: hashedData // deploying a contract
        }, function (error, hash) {
            console.log("error: " + error + " and hash: " + hash);
        });
    }

    function mineValue(value) {
        const weiValue = Web3Client.utils.toWei(value);
        Web3Client.eth.sendTransaction({
            from: '0x34e8dEe6163a1383415380b5F99AFC694B9DCEFF',
            to: '0x72DA7F08e90E9347217Ea77E9BF08B4AFb272cF5',
            value: weiValue // deploying a contract
        }, function (error, hash) {
            console.log("error: " + error + " and hash: " + hash);
        });
    }

    return <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
        <Card sx={{width: 400, height: 670, backgroundColor: 'lightgoldenrodyellow'}}>
            <CardContent>
                <BlockField fieldName={"Block nr"} fieldValue={blockInfo.blockNr}
                            onChange={(e) => setBlockInfo(e.target.value, "blockNr")} readOnly/>
                <BlockField fieldName={"Nonce"} fieldValue={blockInfo.nonce}
                            onChange={(e) => setBlockInfo(e.target.value, "nonce")}/>
                <BlockField fieldName={"Timestamp"} fieldValue={blockInfo.timestamp}
                            onChange={(e) => setBlockInfo(e.target.value, "timestamp")} readOnly/>
                <BlockField fieldName={"Value"} fieldValue={blockInfo.data}
                            onChange={(e) => setBlockInfo(e.target.value, "value")}/>
                <BlockField fieldName={"Gas limit"} fieldValue={blockInfo.gasLimit}
                            onChange={(e) => setBlockInfo(e.target.value, "gasLimit")} readOnly/>
                <BlockField fieldName={"Gas used"} fieldValue={blockInfo.gasUsed}
                            onChange={(e) => setBlockInfo(e.target.value, "gasUsed")} readOnly/>
                <BlockField fieldName={"Previous block hash"} fieldValue={blockInfo.prevBlockHash}
                            onChange={(e) => setBlockInfo(e.target.value, "prevBlockHash")} readOnly/>
                <BlockField fieldName={"Hash"} fieldValue={blockInfo.hash}
                            onChange={(e) => setBlockInfo(e.target.value, "hash")} readOnly/>
                <NodeButton onClick={() => mineValue(blockInfo.value)}/>
            </CardContent>
        </Card>
    </Grid>
}

export default EthereumBlock;