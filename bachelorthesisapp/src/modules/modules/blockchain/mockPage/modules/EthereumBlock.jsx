import React from "react";
import {Card, CardContent, Grid, Button, Box} from "@mui/material";
import BlockField from "../components/BlockField";
import NodeButton from "../components/NodeButton";
import {Web3Client} from "../../transactionsPage/components/Web3Client";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

const EthereumBlock = ({blockInfo, setBlockInfo, isCorrupted}) => {

    return <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
        <Card sx={{width: 360, height: 600, backgroundColor: 'lightgoldenrodyellow'}}>
            <CardContent>
                <BlockField fieldName={"Block nr"} fieldValue={blockInfo.blockNr}
                            onChange={async (e) => await setBlockInfo(e.target.value, "blockNr")} readOnly/>
                <BlockField fieldName={"Nonce"} fieldValue={blockInfo.nonce}
                            onChange={async (e) => await setBlockInfo(e.target.value, "nonce")}/>
                <BlockField fieldName={"Timestamp"} fieldValue={blockInfo.timestamp}
                            onChange={async (e) => await setBlockInfo(e.target.value, "timestamp")} readOnly/>
                <BlockField fieldName={"Value"} fieldValue={blockInfo.data}
                            onChange={async (e) => await setBlockInfo(e.target.value, "value")}/>
                <BlockField fieldName={"Gas limit"} fieldValue={blockInfo.gasLimit}
                            onChange={async (e) => await setBlockInfo(e.target.value, "gasLimit")} readOnly/>
                <BlockField fieldName={"Gas used"} fieldValue={blockInfo.gasUsed}
                            onChange={async (e) => await setBlockInfo(e.target.value, "gasUsed")} readOnly/>
                <BlockField fieldName={"Previous block hash"} fieldValue={blockInfo.prevBlockHash}
                            onChange={async (e) => await setBlockInfo(e.target.value, "prevBlockHash")} readOnly/>
                <BlockField fieldName={"Hash"} fieldValue={blockInfo.hash} readOnly/>
                <Box display={'flex'} justifyContent={'center'}>{isCorrupted ? <ClearIcon/> : <CheckIcon/>}</Box>
            </CardContent>
        </Card>
    </Grid>
}

export default EthereumBlock;