import React from "react";
import {Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import AccountCardButton from "./AccountCardButton";
import CustomTextField from "../../../../core/ui/CustomTextField";

const AccountsCard = ({onChangeAccount, onChangeValue, accountValue, valueField, onClick}) => {
    return <Grid container alignItems={'center'} justify={'center'} direction={'column'}>
        <Grid item xs={3}>
            <Card sx={{
                width: 450,
                height: 260,
                backgroundColor: 'lightgoldenrodyellow',
                fontFamily: 'Trebuchet MS',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <CardContent>
                    <Typography>Enter an account:</Typography>
                    <CustomTextField onChange={onChangeAccount} value={accountValue} label={'Receiver account'}
                                     width={415}/>
                    <Typography>Enter a value:</Typography>
                    <CustomTextField onChange={onChangeValue} value={valueField} label={'Value'} width={415}/>
                    <AccountCardButton onClick={onClick}/>
                </CardContent>
            </Card>
        </Grid>
    </Grid>;
}

export default AccountsCard;