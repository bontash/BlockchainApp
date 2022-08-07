import React from "react";
import {Button, Card, CardContent, Grid} from "@mui/material";
import BlockField from "../components/BlockField";
import NodeButton from "../components/NodeButton";

const BitcoinBlock = ({blockInfo, setBlockInfo}) => {

    return <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
        <Card sx={{width: 300, height: 540, backgroundColor: 'lightgoldenrodyellow'}}>
            <CardContent>
                <BlockField fieldName={"Block nr"} fieldValue={blockInfo.blockNr}
                            onChange={(e) => setBlockInfo(e.target.value, "blockNr")} readOnly/>
                <BlockField fieldName={"Nonce"} fieldValue={blockInfo.nonce}
                            onChange={(e) => setBlockInfo(e.target.value, "nonce")}/>
                <BlockField fieldName={"Timestamp"} fieldValue={blockInfo.timestamp}
                            onChange={(e) => setBlockInfo(e.target.value, "timestamp")} readOnly/>
                <BlockField fieldName={"Value"} fieldValue={blockInfo.data}
                            onChange={(e) => setBlockInfo(e.target.value, "value")}/>
                <BlockField fieldName={"Difficulty"} fieldValue={blockInfo.difficulty}
                            onChange={(e) => setBlockInfo(e.target.value, "difficulty")} readOnly/>
                <BlockField fieldName={"Previous block hash"} fieldValue={blockInfo.prevBlockHash}
                            onChange={(e) => setBlockInfo(e.target.value, "prevBlockHash")} readOnly/>
                <BlockField fieldName={"Hash"} fieldValue={blockInfo.hash}
                            onChange={(e) => setBlockInfo(e.target.value, "hash")} readOnly/>
                <NodeButton/>
            </CardContent>
        </Card>
    </Grid>
}

export default BitcoinBlock;