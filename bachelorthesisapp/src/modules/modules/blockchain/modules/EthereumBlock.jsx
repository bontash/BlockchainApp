import React from "react";
import {Card, CardContent, Grid} from "@mui/material";
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
            <BlockField fieldName={"Block nr"} onChange={(e) => setBlockInfo(e.target.value)}/>
            <BlockField fieldName={"Nonce"}/>
            <BlockField fieldName={"Timestamp"}/>
            <BlockField fieldName={"Data"}/>
            <BlockField fieldName={"Gas limit"}/>
            <BlockField fieldName={"Gas used"}/>
            <BlockField fieldName={"Difficulty"}/>
            <BlockField fieldName={"Previous block hash"}/>
            <BlockField fieldName={"Hash"}/>
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