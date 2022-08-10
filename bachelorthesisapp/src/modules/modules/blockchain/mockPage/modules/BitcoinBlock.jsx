import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, Grid} from "@mui/material";
import BlockField from "../components/BlockField";
import NodeButton from "../components/NodeButton";

const BitcoinBlock = ({blockInfo, setBlockInfo}) => {

    const [blockHash, setBlockHash] = useState("");

    const fetchHash = (blockInfo, setResponse) => {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                blockNr: blockInfo.blockNr,
                nonce: blockInfo.nonce,
                timestamp: blockInfo.timestamp,
                value: blockInfo.value,
                prevBlockHash: blockInfo.prevBlockHash,
                hash: blockInfo.hash
            })
        };
        fetch('http://localhost:3001/bitcoinEncryption', requestOptions)
            .then(response => response.json())
            .then(data => setResponse(data.finalHash));
    }

    useEffect(() => {
        setBlockInfo(blockHash,"hash");
    },[blockHash])


    return <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
        <Card sx={{width: 300, height: 485, backgroundColor: 'lightgoldenrodyellow'}}>
            <CardContent>
                <BlockField fieldName={"Block nr"} fieldValue={blockInfo.blockNr}
                            onChange={(e) => setBlockInfo(e.target.value, "blockNr")} readOnly/>
                <BlockField fieldName={"Nonce"} fieldValue={blockInfo.nonce}
                            onChange={(e) => setBlockInfo(e.target.value, "nonce")}/>
                <BlockField fieldName={"Timestamp"} fieldValue={blockInfo.timestamp}
                            onChange={(e) => setBlockInfo(e.target.value, "timestamp")} readOnly/>
                <BlockField fieldName={"Value"} fieldValue={blockInfo.value}
                            onChange={(e) => setBlockInfo(e.target.value, "value")}/>
                <BlockField fieldName={"Previous block hash"} fieldValue={blockInfo.prevBlockHash}
                            onChange={(e) => setBlockInfo(e.target.value, "prevBlockHash")} readOnly/>
                <BlockField fieldName={"Hash"} fieldValue={blockHash} onChange={(e) => {setBlockInfo(e.target.value, "hash");console.log(e)}}/>
                <NodeButton onClick={() => fetchHash(blockInfo, setBlockHash)}/>
            </CardContent>
        </Card>
    </Grid>
}

export default BitcoinBlock;