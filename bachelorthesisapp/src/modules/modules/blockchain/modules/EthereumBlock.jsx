import React from "react";
import {Card, CardContent, Grid, Button} from "@mui/material";
import BlockField from "../components/BlockField";

const EthereumBlock = ({blockInfo, setBlockInfo}) => {

    // const handleChange = (event) => {
    //     const {
    //         target: {value},
    //     } = event;
    // }

    return <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
    <Card sx={{ width: 300, height: 650, backgroundColor: 'lightgoldenrodyellow'}}>
        <CardContent>
            <BlockField fieldName={"Block nr"} fieldValue={blockInfo.blockNr} onChange={(e) => setBlockInfo(e.target.value, "blockNr")} readOnly/>
            <BlockField fieldName={"Nonce"} fieldValue={blockInfo.nonce} onChange={(e) => setBlockInfo(e.target.value, "nonce")}/>
            <BlockField fieldName={"Timestamp"} fieldValue={blockInfo.timestamp} onChange={(e) => setBlockInfo(e.target.value, "timestamp")}/>
            <BlockField fieldName={"Data"} fieldValue={blockInfo.data} onChange={(e) => setBlockInfo(e.target.value, "data")}/>
            <BlockField fieldName={"Gas limit"} fieldValue={blockInfo.gasLimit} onChange={(e) => setBlockInfo(e.target.value, "gasLimit")}/>
            <BlockField fieldName={"Gas used"} fieldValue={blockInfo.gasUsed} onChange={(e) => setBlockInfo(e.target.value, "gasUsed")}/>
            <BlockField fieldName={"Difficulty"} fieldValue={blockInfo.difficulty} onChange={(e) => setBlockInfo(e.target.value, "difficulty")}/>
            <BlockField fieldName={"Previous block hash"} fieldValue={blockInfo.prevBlockHash} onChange={(e) => setBlockInfo(e.target.value, "prevBlockHash")}/>
            <BlockField fieldName={"Hash"} fieldValue={blockInfo.hash} onChange={(e) => setBlockInfo(e.target.value, "hash")}/>
            <Button>Click</Button>
        </CardContent>
    </Card>
    </Grid>
    // return <Grid container rowspacing={1}>
    //     <Grid item xs={6} md={3}>
    //         <TextField label={"Data to encrypt"}
    //                    variant={'filled'} />
    //     </Grid>
    //     <Grid item xs={6} md={3}>
    //         <TextField label={"Data to encrypt"}
    //                    variant={'filled'}/>
    //     </Grid>
    //     <Grid item xs={6} md={3}>
    //         <TextField label={"Data to encrypt"}
    //                    variant={'filled'}/>
    //     </Grid>
    //     <Grid item xs={6} md={3}>
    //         <TextField label={"Data to encrypt"}
    //                    variant={'filled'}/>
    //     </Grid>
    // </Grid>
}

export default EthereumBlock;