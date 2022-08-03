import React from "react";
import {Card, CardContent, Grid, Button} from "@mui/material";
import BlockField from "../components/BlockField";
import NodeButton from "../components/NodeButton";

const EthereumBlock = ({blockInfo, setBlockInfo}) => {

    return <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
    <Card sx={{ width: 300, height: 670, backgroundColor: 'lightgoldenrodyellow'}}>
        <CardContent>
            <BlockField fieldName={"Block nr"} fieldValue={blockInfo.blockNr} onChange={(e) => setBlockInfo(e.target.value, "blockNr")} readOnly/>
            <BlockField fieldName={"Nonce"} fieldValue={blockInfo.nonce} onChange={(e) => setBlockInfo(e.target.value, "nonce")}/>
            <BlockField fieldName={"Timestamp"} fieldValue={blockInfo.timestamp} onChange={(e) => setBlockInfo(e.target.value, "timestamp")} readOnly/>
            <BlockField fieldName={"Data"} fieldValue={blockInfo.data} onChange={(e) => setBlockInfo(e.target.value, "data")}/>
            <BlockField fieldName={"Gas limit"} fieldValue={blockInfo.gasLimit} onChange={(e) => setBlockInfo(e.target.value, "gasLimit")} readOnly/>
            <BlockField fieldName={"Gas used"} fieldValue={blockInfo.gasUsed} onChange={(e) => setBlockInfo(e.target.value, "gasUsed")} readOnly/>
            <BlockField fieldName={"Difficulty"} fieldValue={blockInfo.difficulty} onChange={(e) => setBlockInfo(e.target.value, "difficulty")} readOnly/>
            <BlockField fieldName={"Previous block hash"} fieldValue={blockInfo.prevBlockHash} onChange={(e) => setBlockInfo(e.target.value, "prevBlockHash")} readOnly/>
            <BlockField fieldName={"Hash"} fieldValue={blockInfo.hash} onChange={(e) => setBlockInfo(e.target.value, "hash")} readOnly/>
            <NodeButton />
        </CardContent>
    </Card>
    </Grid>
}

export default EthereumBlock;