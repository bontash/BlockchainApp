import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";

const TransactionsPageCard = () => {
    return <Grid container alignItems={'center'} justify={'center'} direction={'column'}>
        <Grid item xs={6}>
            <Card sx={{
                width: 450,
                height: 260,
                backgroundColor: 'lightgoldenrodyellow',
                fontFamily: 'Trebuchet MS',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <CardContent>
                </CardContent>
            </Card>
        </Grid>
    </Grid>;
}

export default TransactionsPageCard;