import React from "react";
import {Box, Card, CardContent, Grid} from "@mui/material";
import BlockField from "../components/BlockField";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const BitcoinBlock = ({blockInfo, setBlockInfo, isCorrupted}) => {

    return <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
        <Card sx={{width: 360, height: 470, backgroundColor: 'lightgoldenrodyellow'}}>
            <CardContent>
                <BlockField fieldName={"Block nr"} fieldValue={blockInfo.blockNr}
                            onChange={async (e) => await setBlockInfo(e.target.value, "blockNr")} readOnly/>
                <BlockField fieldName={"Nonce"} fieldValue={blockInfo.nonce}
                            onChange={async (e) => await setBlockInfo(e.target.value, "nonce")}/>
                <BlockField fieldName={"Timestamp"} fieldValue={blockInfo.timestamp}
                            onChange={async (e) => await setBlockInfo(e.target.value, "timestamp")} readOnly/>
                <BlockField fieldName={"Value"} fieldValue={blockInfo.value}
                            onChange={async (e) => await setBlockInfo(e.target.value, "value")}/>
                <BlockField fieldName={"Previous block hash"} fieldValue={blockInfo.prevBlockHash}
                            onChange={async (e) => await setBlockInfo(e.target.value, "prevBlockHash")} readOnly/>
                <BlockField fieldName={"Hash"} fieldValue={blockInfo.hash} readOnly/>
                <Box display={'flex'} justifyContent={'center'}>{isCorrupted ? <ClearIcon/> : <CheckIcon/>}</Box>
            </CardContent>
        </Card>
    </Grid>
}

export default BitcoinBlock;